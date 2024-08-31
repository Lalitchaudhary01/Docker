const http = require("http");

const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, Kubernetes!\n");
};

module.exports = (req, res) => {
  requestHandler(req, res);
};
