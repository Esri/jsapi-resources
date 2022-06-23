#!/usr/bin/env node
const puppeteer = require("puppeteer");
const WebServer = require("./WebServer");

let go, webserver;
let pageTotalBytes = 0;
let totalJSRequests = 0;
let performanceMarkStart, performanceMarkEnd;
const PORT = 3000; // Used for both WebServer and TEST_URL
const TEST_URL = "http://localhost:" + PORT;

/**
 * Use HTTP response object to calculate total data transferred
 * @param {Object} response 
 */
const addResponseSize = async (response) => {
  const url = response.url();
  const str = url.substring(url.length - 3, url.length);
  if (str === ".js") {
    totalJSRequests++;
  }

  try {
    const buffer = await response.buffer();
    pageTotalBytes += buffer.length;
  } catch (e) {
    console.log("\x1b[41m\x1b[30mERROR in http response:", e);
  }
};

/**
 * Capture a bunch of errors and make it easy to find problems.
 * @param {Page} page An instance of puppeteer's Page
 */
const errorLogging = (page) => {
  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error") {
      console.log("\x1b[41m\x1b[30mCONSOLE ERROR in puppeteer:", msg);
    }
  });

  page.on("pageerror", (err) => {
    console.log("\x1b[41m\x1b[30mERROR pageerror in puppeteer:", err);
  });

  page.on("requestfailed", (err) => {
    console.log("\x1b[41m\x1b[30mERROR - requestfailed in puppeteer:", err);
  });
};

/**
 * Configure how the page is set up.
 * The height and width of the viewport can affect performance
 * @private
 * @param {Page} page An instance of puppeteer's Page
 */
const pageSetup = async (page) => {
  // Setting a fixed viewport size lets us standardize all the perf tests
  await page.setViewport({ width: 1280, height: 720 });

  // Timestamp for tracking the internal performance of 'this' script
  performanceMarkStart = performance.now();

  // Track the http response object
  page.on("response", addResponseSize);
};

/**
 * Retrieve and calculate page metrics
 * @private
 * @param {Page} page An instance of puppeteer's page
 * @param {string} sampleName
 * @returns {object} Performance information
 */
const capturePageMetrics = async (page, sampleName) => {
  const rawPerfEntries = await page.evaluate(() => {
    return JSON.stringify(window.performance.getEntries());
  });

  const allPerformanceEntries = JSON.parse(rawPerfEntries);

  // This number is derived from the timestamp of the last http request reported by puppeteer
  // This is not reflective of when the app becomes usable. It's just the very last http request.
  const elapsedRuntimeMS = Math.round(
    allPerformanceEntries[allPerformanceEntries.length - 1].startTime +
      allPerformanceEntries[allPerformanceEntries.length - 1].duration
  );

  const pageMetrics = await page.metrics();
  const JSHeapUsedSizeBytes = pageMetrics.JSHeapUsedSize;

  // Finalize the self.performance numbers for this script
  performanceMarkEnd = performance.now();
  const totalScriptTimeMS = Math.round(performanceMarkEnd - performanceMarkStart);

  /**
   * sampleName - name of the sample or bundle
   * elapsedRuntimeMS - runtime in milliseconds derived from the applications last HTTP request
   * pageTotalBytes - total number of bytes calculated using the http response object
   * JSHeapUsedSizeBytes - JSHeapUsedSize as reported by puppeteer
   * totalScriptTimeMS - approximate internal runtime of the library script in milliseconds.
   * Useful for comparing against the `elapsedRuntimeMS`. Should not be used as an indicator of
   * application performance, it's most useful for troubleshooting.
   * totalJSRequests - total number of JavaScript files requested by the app
   */
  return {
    sampleName,
    elapsedRuntimeMS,
    pageTotalBytes,
    JSHeapUsedSizeBytes,
    totalScriptTimeMS,
    totalJSRequests
  };
};

/**
 * Start the webserver
 * @private
 * @param {string} path
 * @param {number} port
 * @returns WebServer WebServer instance
 */
const startWebServer = (path, port) => {
  webserver = new WebServer(path, port);
  webserver.start();
};

/**
 * Run browser performance tests
 * @param {string} path
 * @param {string} sampleInfo
 * @returns {object} Object containing the performance metrics
 */
const browserPerformanceTest = async (path, sampleName = "") => {
  pageTotalBytes = 0;
  startWebServer(path, PORT);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  errorLogging(page);
  await pageSetup(page);

  // Load the app!
  // networkidle0 means consider loading completed when there are
  // no more than 0 network connections for at least 500 ms.
  console.log("Waiting for page load...");
  go = await page.goto(TEST_URL, {
    waitUntil: "networkidle0"
  });

  // Check for HTTP page not found errors
  if (go?.status() !== 404) {
    // Did the root CSS for the View get injected into the DOM
    await page.waitForSelector(".esri-view-root");
    console.log("Page loaded. Capturing metrics...");

    const pageMetrics = await capturePageMetrics(page, sampleName);

    // Clean up by closing the browser
    await browser.close();

    // Clean up by stopping the webserver
    // Close it because we may need to test multiple directories
    const shutdown = await webserver.stop();
    console.log("Shutting down webserver:", shutdown);

    return pageMetrics;
  } else {
    console.log("\x1b[41m\x1b[30mERROR page did not load:", path);
    return {
      error: "Page did not load"
    };
  }
};

module.exports = browserPerformanceTest;
