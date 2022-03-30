#!/usr/bin/env node
const express = require("express");

let server;

/**
 * A lightweight webserver
 * @param {string} path absolute path to the folder
 * @param {number} port launch the webserver on this port
 */
class WebServer {
  constructor(path, port) {
    this.path = path;
    this.port = port;
  }

  /**
   * Start an instance of the server
   */
  start() {
    const app = express();
    app.use(express.static(this.path));

    server = app.listen(this.port);
    console.log("listening on port", this.port);
  }

  /**
   * Stop the server
   * @returns {Promise} resolve or reject. Rejection returns the error message.
   */
  stop() {
    return new Promise((resolve, reject) => {
      server.on("close", () => {
        resolve("Closed");
      });
      server.on("clientError", (err, socket) => {
        console.log(err);
        socket.end(err.code);
        reject(err);        
      });
      server.close();
    });
  }
}

module.exports = WebServer;
