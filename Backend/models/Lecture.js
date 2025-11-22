const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty",
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  lectureDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String, // e.g. "10:00"
    required: true,
  },
  endTime: {
    type: String, // e.g. "11:00"
    required: true,
  },
});

module.exports = mongoose.model("Lecture", lectureSchema);
