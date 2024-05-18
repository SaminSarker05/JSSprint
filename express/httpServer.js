const http = require('http');
const {readFileSync, read} = require('fs');

// load pages
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {  // home
    // would have to request all resources used by html page; ie css, js
    // and set up url endpoints to serve those resources
    
    // specify return type as html and status code
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage);
    res.end(); 
  } else if (url === '/about') {  // about
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>about</h1>');
    res.end();
  } else { // 404
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>error</h1>');
    res.end();
  }

})

server.listen(8000);