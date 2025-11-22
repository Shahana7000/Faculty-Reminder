const ClassModel = require("../models/Class");

// Add new class
const addClass = async (req, res) => {
  try {
    const newClass = await ClassModel.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await ClassModel.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete class
const deleteClass = async (req, res) => {
  try {
    await ClassModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addClass, getAllClasses, deleteClass };
