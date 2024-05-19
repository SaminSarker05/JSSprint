// API V2

const express = require('express');
const app = express();
const {products} = require('./data.js');

app.get('/', (req, res) => {
  res.status(200).send('<h1>hello world </h1><a href="/api/products">hey</a>')
})

app.get('/api/products', (req, res) => {
  // const newProducts = products.map((product) => {
  //   const {id, name} = product;
  //   return {id, name};
  // })
  // res.json(newProducts);
  const singleProduct = products.find((product) => {
    if (product.name === "samin") {
      return product;
    }
  })
  res.json(singleProduct);
})

app.get('/api/products/:productId', (req, res) => {
  console.log(req.params);
  const singleProduct = products.find((product) => { product.id == req.params['productId']})
  res.json(singleProduct);


})

app.listen(8000, () => {
  console.log('listening on port 8000...');
})