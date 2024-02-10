const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskId: Number,
  title: String,
  status: String,
  description: String,
  storyPoints: Number,
  subtasks: [String],
});
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A category name must have less or equal then 40 characters",
    ],
  },
  categoryId: {
    type: Number,
    required: [true, "A category must have a group size"],
    default: Date.now(),
  },
  tasks: [taskSchema],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
