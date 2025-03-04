const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Add Task
router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task({ text: req.body.text });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Error adding task' });
  }
});

// Get All Tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

module.exports = router;
