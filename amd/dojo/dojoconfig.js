dojoConfig = {
  baseUrl: "./node_modules/",
  packages: [
    {
      name: "dojo",
      location: "dojo"
    },
    {
      name: "build",
      location: "dojo-util/build"
    }
  ]
};
require("./node_modules/dojo/dojo.js");