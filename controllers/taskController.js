const Category = require("./../models/taskModel");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Category.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      tasks,
    },
  });
});

exports.createTask = (req, res) => {
  const newId = tasks[tasks.length - 1].id + 1;
  const newTask = Object.assign({ id: newId }, req.body);
  tasks.push(newTask);

  fs.writeFile(
    `${__dirname}/dev-data/data/tasks.json`,
    JSON.stringify(tasks),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          task: newTask,
        },
      });
    }
  );
  res.send("Done");
};

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
