const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true, // needed for call reminder
  },
  department: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Faculty", facultySchema);
