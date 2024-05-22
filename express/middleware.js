const express = require('express')
const app = express();
// middleware function
const logger = require('./logger');
const author = require('./author');
const morgan = require('morgan');

// req => middleware => res
app.use(logger);
app.use(author);
app.use(morgan);
// app.use('path', middleware)
// applies middleware to all paths starting with provided


app.get('/', (req, res) => {
  res.send('home');
})

app.get('/about', (req, res) => {
  res.send('about');
})

app.listen(8000, () => {
  console.log('listening on port 8000');
})