// readstream; good for large files

const {createReadStream, write} = require('fs');
const stream = createReadStream('./notes.js');

stream.on('data', (result) => {
  console.log(result);
})

// using writefilesync to write to new file
const {writeFileSync} = require('fs');

for (let i = 0; i < 1000; ++i) {
  writeFileSync('./result.txt', 'hello world');
}


