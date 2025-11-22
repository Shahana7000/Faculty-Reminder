const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // e.g. "BCA"
  },
  year: {
    type: Number,
    required: true, // e.g. 2
  },
  section: {
    type: String, // e.g. "A"
  },
});

module.exports = mongoose.model("Class", classSchema);
