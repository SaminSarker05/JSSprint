// CALLBACK FUNCTIONS
const getAllTasks = (req, res) => {
  res.send("get all tasks");
}
const createTask = (req, res) => {
  res.status(200).json(req.body);
}
const getTask = (req, res) => {
  res.json({method: "get task", details: req.params});
}
const updateTask = (req, res) => {
  res.json({method: "update task", details: req.params});
}
const deleteTask = (req, res) => {
  res.json({method: "delete task", details: req.params});
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}