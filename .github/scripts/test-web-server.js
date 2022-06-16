const WebServer = require("./WebServer");
const stdExec = require("child_process").exec;
const exec = require("util").promisify(stdExec);

let server;

// Make sure you already built the appplication you are testing against :-)
const run = () => {
  const path = "../../esm-samples/jsapi-custom-widget/dist/";
  server = new WebServer(path, 3000);
  server.start();

  setTimeout(async () => {
    const t = await exec("cd " + path + " && cd .. && curl http://localhost:3000");  
    console.log("Stopping", t);
    server.stop();
  }, 5000);
}

run();