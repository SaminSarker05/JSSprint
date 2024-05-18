const http = require('http');
const {readFileSync, createReadStream} = require('fs');

const server = http.createServer((req, res) => {
  // const text = readFileSync('./result.txt', 'utf8');
  // res.end(text);
  // for large files use createReadStream

  // filestream is an event; have acess to listening and emits
  const filestream = createReadStream('./result.txt', 'utf8');
  filestream.on('open', () => {
    filestream.pipe(res); // allows transfering of data
  })
  filestream.on('error', () => {
    res.end(err);
  })
})

server.listen(8000);