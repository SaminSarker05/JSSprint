const express = require("express");
const router = express.Router();
const { 
  getAllTasks, 
  getTask, 
  updateTask, 
  deleteTask, 
  createTask 
} = require("../controllers/tasks.js")

// ROUTES
router.get("/", getAllTasks)
router.post("/", createTask)
router.get("/:id", getTask)
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)

module.exports = {router}