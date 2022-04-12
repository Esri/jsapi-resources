#!/usr/bin/env node
const express = require("express");

let server;

class WebServer {
  /**
   * A lightweight webserver
   * @param {string} path
   * @param {number} port
   */
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
   * @returns {Promise} Close server or throw an error
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
