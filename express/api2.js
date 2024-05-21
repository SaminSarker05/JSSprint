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

// use :param to pass in paramaters
app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find((product) => { 
    if (product.id === Number(productId)) {
      return product;
    }
  })
  if (!singleProduct) {
    return res.json(404).send('product does not exist');
  }
  return res.json(singleProduct);
})

app.get('/api/v1/query', (req, res) => {
  const {search, limit} = req.query;
  console.log(search, limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {return product.name.startsWith(search)})
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).json({ success: true, data: []});
  } else {
    res.status(200).json({ success:true, data:sortedProducts  });
  }
})

app.listen(8000, () => {
  console.log('listening on port 8000...');
})