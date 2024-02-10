const Category = require("./../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Category.find();

  res.status(200).json({
    status: "success",
    results: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.createTask = catchAsync(async (req, res) => {
  try {
    const newTask = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        task: newTask,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
});

exports.deleteTask = (req, res) => {
  if (req.params.id * 1 > tasks.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};

exports.updateTask = (req, res) => {
  if (req.params.id * 1 > tasks.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      task: "<Update task here...>",
    },
  });
};
