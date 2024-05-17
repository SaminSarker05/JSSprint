const {readFile} = require('fs');

// async function
readFile('./learn.js', 'utf8', (err, data) => {
  if (err) {
    console.log('did not work');
    return;
  } else {
    console.log(data);
  }
});