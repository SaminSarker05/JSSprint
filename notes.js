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
holds meta information about js project including dependencies
to start project and automate
npm init

never push node_modules when its generated
if project has package.json <npm install> installs all dependencies

nodemon dependency that restarts nodejs app if file changes

event loop:
allows node js to perform non I/O operations by offloading to system kernal
js normally single threaded: executes line by line

npm - node package manager

async feature allows concurrent execution of code 
- other code can run while waiting for previous lines

callback - a function intended to be called a later time

promise - js object represents value during an async operation
- cleaner approach to callback based async code

in js can chain methods
.then().catch()

*/

