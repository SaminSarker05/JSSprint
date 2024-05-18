const http = require('http'); // use http js module

// create server that takes callback function with request and result
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("home");
  }
})

// list on port 8000 with callback function after completion
server.listen(8000, () => {
  console.log('server started on port 8000');
});