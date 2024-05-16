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

*/

const john = 'john';
const me = 'samin';
const sayHi = (name) => {
  console.log(`hello there ${name}`);
}

module.exports = {john, me, sayHi};