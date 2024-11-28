const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello node js. Be nice");
});

server.listen(port, function () {
  console.log(`Server is running at ${port}`);
});
