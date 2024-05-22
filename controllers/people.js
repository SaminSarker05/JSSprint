const {people} = require('../data');

const getPeople = (req, res) => {
  res.status(200).json({status:true, data:people});
}

const postPeople = (req, res) => {
  const {name} = req.body;
  console.log(name);
  if (!name) {
    return res.status(400).json({status:false, data:[]});
  }
  res.status(201).send({status:true, data: [...people, name]});
}

const putPeople = (req, res) => {
  const {id} = req.params;
  const {new_name} = req.body;
  const person = people.find((person) => {return person.id === Number(id)});
  if (!person) {
    return res.status(400).json({status:false, msg: "could not find person"});
  }
  person.name = name;
  res.status(200).json({status: true, msg: "updated"});
}

const deletePeople = (req, res) => {
  const {id} = req.params;
  const person = people.find((person) => {return person.id === Number(id)});
  if (!person) {
    return res.status(400).json({status: false, msg: "could not find person"});
  }
  const newPeople = people.filter((person) => person.id !== Number(id) );
  res.status(200).json({status: true, data: newPeople});
}

module.exports = {
  getPeople,
  postPeople, 
  putPeople,
  deletePeople
}