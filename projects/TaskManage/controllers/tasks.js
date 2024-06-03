const Task = require('../models/task.js')

// CALLBACK FUNCTIONS
const getAllTasks = async (req, res) => {
  try {
    const alltasks = Task.find({});
    res.status(200).json({alltasks});

  } catch (err) {
    console.log("here");
    res.status(500).json(err);
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
}

const getTask = async (req, res) => {
  try {
    const { id:taskId } = req.params;
    const atask = await Task.findOne({_id: taskId});
    if (!atask) {
      res.status(500).json({missing});
    }
    res.status(200).json(atask);
  } catch (err) {
    res.status(500).json(err);
  }
  res.json({method: "get task", details: req.params});
}

const updateTask = async (req, res) => {
  try {
    const {id:taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body)
    if (!task) {
      res.status(500).json({missing});
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id:taskId} = req.params;
    const task = await Task.findOneAndDelete({_id:taskId});
    if (!task) {
      return res.json("mo task to delete");
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
}


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}