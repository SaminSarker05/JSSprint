const {readFile, writeFile} = require('fs');
// require('fs').promises - makes promises by default
const util = require('util');
const readPromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readPromise('./learn.js', 'utf8');
    await writePromise('./newfile.js', `new stuff ${first}`);
    console.log(first);
  } catch (err) {
    console.log(err);
  }
}

start();

// async function for concurrent execution of lines
// use promises which represent async operations to streamline process
// use async and await keywords to resolve promises


/*
can automate promise object use using promisify from util

const getText = (path) => {
  // promise object alternative to async call back approach
  // takes resolve & reject provided functions to control Promise outcome
  return new Promise((resolve, reject) => {
    // async function
    readFile(path, 'utf8', (err, data) => {
      if (err) { reject(err); } 
      else { resolve(data); }
    });
  }) 
}

const start = async () => {
  try {
    const first = await getText('./learn.js');
    console.log(first);
  } catch (err) {
    console.log(err);
  }
}
*/