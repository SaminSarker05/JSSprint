// API

const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/api', (req, res) => {
  // sends back json response
  res.status(200).json([products]);
})

app.listen(8000, () => {
  console.log('listening on port 8000...');
})