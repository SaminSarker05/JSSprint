const {readFile} = require('fs');


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

getText('./learn.js')
  .then((result) => {console.log(result)})
  .catch((err) => {console.log(err)})