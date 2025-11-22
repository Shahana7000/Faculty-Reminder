const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const facultyRoutes = require("./routes/facultyRoutes");
const classRoutes = require("./routes/classRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
const startLectureReminder = require("./utils/scheduleReminder");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Lecture Reminder System Backend Running 🚀");
});
app.use("/api/faculty", facultyRoutes);
app.use("/api/class", classRoutes);
app.use("/api/lecture", lectureRoutes);
app.use("/api/admin", adminRoutes);

connectDB()
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // ✅ Start lecture reminder after DB ready
    startLectureReminder();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
