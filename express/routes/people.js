const express = require('express');
const router = express.Router();
const {
  getPeople,
  postPeople, 
  putPeople,
  deletePeople
} = require('../controllers/people');

router.get('/', getPeople) // GET http method
router.post('/', postPeople) // POST http method
router.put('/:id', putPeople) // PUT http method
router.delete('/:id', deletePeople) // DELETE http method

// router.route('/').get(getPeople).post(postPeople); ALT method

module.exports = {router}; 