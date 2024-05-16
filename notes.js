/*
require - function to use modules

setinterval example
setInterval(() => {
  console.log("hello world");
}, 1000);


modules - allows encapsulation of code
all files modules by default

module.exports = {} to share
require to use modules

built in modules:
  - os
  - path
  - fs
  - http


making a server using the javascript http module
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("home page");
  res.end();
})

server.listen(8000);

to install dependency
npm i <packagename>

package.json
holds meta information about js project
to start project and automate
npm init


*/

