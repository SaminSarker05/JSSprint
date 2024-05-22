const express = require('express');  // import express module
const app = express(); // make instance of express object
let {people} = require('./data.js');


// to load static assets - middleware
app.use(express.static('./example'))
// built in middleware to part urlencoded post request
// to parse incoming data from a POST request into js object mounted to req.body
app.use(express.urlencoded({extended:false}));

// default http method = read data
app.get('/api/people', (req, res) => {
  res.status(200).json({status:true, data:people});
})

app.use(express.json()); // parse incoming json
// same url but different request
app.post('/api/people', (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(201).json({success:false, msg:"try again"});
  }
  res.status(201).send('success');
})

// POST http method = add data
app.post('/login', (req, res) => {
  const {name} = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send('please enter name');
})

app.listen(8000, () => { // start server on port 8000
  console.log('listening on port 8000...');
})