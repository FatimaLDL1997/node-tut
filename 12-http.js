const http = require("http");

//req=request, res= response
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  } else if (req.url === "/about") {
    res.end("here is our short about");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Oops! can't seem to find page </p>
  <a href="/">back home</a> 
  `);
});

server.listen(5000);
