const express = require('express');
const router = express.Router();
const {people} = require('../data');

// GET http method
router.get('/', (req, res) => {
  res.status(200).json({status:true, data:people});
})

// POST http method
router.post('/', (req, res) => {
  const {name} = req.body;
  console.log(name);
  if (!name) {
    return res.status(400).json({status:false, data:[]});
  }
  res.status(201).send({status:true, data: [...people, name]});
})

// PUT http method
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const person = people.find((person) => {return person.id === Number(id)});
  if (!person) {
    return res.status(400).json({status: false, msg: "could not find person"});
  }
  const newPeople = people.filter((person) => person.id !== Number(id) );
  res.status(200).json({status: true, data: newPeople});
})

module.exports = {router}; 