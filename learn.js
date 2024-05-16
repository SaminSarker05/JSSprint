const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("home");
  } 
  if (req.url === '/about') {
    res.end("about");
  }
})

server.listen(8000);