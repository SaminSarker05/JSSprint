const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  // validation: field specifications/checks
  name: {
    type:String,
    required: [true, "provide a name"]
  },
  completed: {
    type:Boolean, 
    default: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);