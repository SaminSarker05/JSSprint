const express = require('express');
const app = express();
const {people} = require('./data');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// GET http method
app.get('/api/people', (req, res) => {
  res.status(200).json({status:true, data:people});
})

// POST http method
app.post('/api/people', (req, res) => {
  const {name} = req.body;
  console.log(name);
  if (!name) {
    return res.status(400).json({status:false, data:[]});
  }
  res.status(201).send({status:true, data: [...people, name]});
})

// PUT http method
app.put('/api/people/:id', (req, res) => {
  const {id} = req.params;
  const {new_name} = req.body;
  const person = people.find((person) => {return person.id === Number(id)});
  if (!person) {
    return res.status(400).json({status:false, msg: "could not find person"});
  }
  person.name = name;
  res.status(200).json({status: true, msg: "updated"});
})

// DELETE http method
app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params;
  const person = people.find((person) => {return person.id === Number(id)});
  if (!person) {
    return res.status(400).json({status: false, msg: "could not find person"});
  }
  const newPeople = people.filter((person) => person.id !== Number(id) );
  res.status(200).json({status: true, data: newPeople});
})

app.listen(8000, () => {
  console.log('listening on port 8000');
})