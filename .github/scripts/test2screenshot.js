const puppeteer = require("puppeteer");

const run = async (path) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage(); 

  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error") {
      console.error("ERROR", msg);
    }
  });

  await page.setViewport({ width: 1280, height: 800 });
  console.log("Running test");

  await page.evaluate(() => performance.mark("Start"));
  const go = await page.goto("http://localhost/code/jsapi-resources/esm-samples/jsapi-angular-cli/dist/index.html", {
    waitUntil: "networkidle0"
  });

  if (go.status() !== 404) {
    console.log("Waiting for page load..");
    await page.waitForSelector(".esri-view-root");
    console.log("waiting...");

    await page.evaluate(() => performance.mark("End"));     
    await page.screenshot({ path: "screenshot.png" });
    // await browser.close();
    console.log("See screen shot: " + "./screenshot.png");

    console.log("\n==== performance.getEntries() ====\n");
    // console.log(await page.evaluate(() => JSON.stringify(performance.getEntries(), null, "  ")));

    const rawPerfEntries = await page.evaluate(function () {
      // return JSON.stringify(window.performance.getEntriesByType("mark"));
       return JSON.stringify(window.performance.getEntries());
    });

    // Parsing string
    const allPerformanceEntries = JSON.parse(rawPerfEntries);

    // Find FirstContentfulPaing
    // const cEnd = allPerformanceEntries.find((x) => x.name === "End'");
    const cEnd = allPerformanceEntries.filter( (val) => {return val.name.includes("main")});
    console.log("FIRST C F", allPerformanceEntries);   
    // console.log("TIME to LOAD", cEnd[0].startTime - cStart[0].startTime + "ms"); 
    console.log("Time to load: ", allPerformanceEntries[allPerformanceEntries.length - 2]);

    console.log("\n==== performance.toJSON() ====\n");
    console.log(await page.evaluate(() => JSON.stringify(performance.toJSON(), null, "  ")));
    const appPerf = await page.evaluate(() => {
      const p = JSON.stringify(performance.toJSON(), null, "  ");
      //  const time = appPerf.timing.connectStart - appPerf.timing.connectEnd;
      return p;
    });
    const v = JSON.parse(appPerf);
    console.log("TIMING", v.timing.connectEnd - v.timeOrigin);
    console.log(appPerf);

    console.log("\n==== page.metrics() ====\n");
    const perf = await page.metrics();
    console.log(JSON.stringify(perf, null, "  "));

    console.log("\n==== Devtools: Performance.getMetrics ====\n");
    let performanceMetrics = await page._client.send("Performance.getMetrics");
    console.log(performanceMetrics.metrics);

    await browser.close();
  } else {
    console.log("\x1b[41m\x1b[30mERROR: Page did not load");
    browser.close();
  }
};

run();
