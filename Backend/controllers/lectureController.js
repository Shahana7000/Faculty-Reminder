// const Lecture = require("../models/Lecture");

// // Add lecture
// // Add lecture
// // Add lecture
// // const addLecture = async (req, res) => {
// //   try {
// //     const { facultyId, classId, subject, day, time } = req.body;

// //     if (!facultyId || !classId || !subject || !day || !time) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     // Convert day to actual date for this week
// //     const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// //     const today = new Date();
// //     const targetDayIndex = daysOfWeek.indexOf(day);
// //     const diff = (targetDayIndex - today.getDay() + 7) % 7;
// //     const lectureDate = new Date(today);
// //     lectureDate.setDate(today.getDate() + diff);

// //     const lecture = await Lecture.create({
// //       faculty: facultyId,
// //       class: classId,
// //       subject,
// //       lectureDate,
// //       startTime: time,
// //       endTime: "00:00", // optional placeholder
// //     });

// //     res.status(201).json(lecture);
// //   } catch (error) {
// //     console.error("❌ Error adding lecture:", error.message);
// //     res.status(400).json({ message: error.message });
// //   }
// // };



// const addLecture = async (req, res) => {
//   try {
//     const { facultyId, classId, subject, day, time } = req.body;

//     if (!facultyId || !classId || !subject || !day || !time) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // Convert day name to actual date for this week
//     const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const today = new Date();
//     const targetDayIndex = daysOfWeek.indexOf(day);
//     const diff = (targetDayIndex - today.getDay() + 7) % 7;

//     const lectureDate = new Date(today);
//     lectureDate.setDate(today.getDate() + diff);

//     // Combine lecture date + time
//     const [hours, minutes] = time.split(":").map(Number);
//     lectureDate.setHours(hours, minutes, 0, 0);

//     // Save lecture
//     const lecture = await Lecture.create({
//       faculty: facultyId,
//       class: classId,
//       subject,
//       lectureDate, // ✅ full datetime
//       startTime: time,
//       endTime: "00:00", // optional
//     });

//     res.status(201).json(lecture);
//   } catch (error) {
//     console.error("❌ Error adding lecture:", error.message);
//     res.status(400).json({ message: error.message });
//   }
// };


// // Get all lectures
// const getAllLectures = async (req, res) => {
//   try {
//     const lectures = await Lecture.find()
//       .populate("faculty", "name email phone")
//       .populate("class", "name year section");

//     const formatted = lectures.map((lec) => ({
//       ...lec._doc,
//       facultyId: lec.faculty,
//       classId: lec.class,
//     }));

//     res.status(200).json(formatted);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // Delete lecture
// const deleteLecture = async (req, res) => {
//   try {
//     await Lecture.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Lecture deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { addLecture, getAllLectures, deleteLecture };

const Lecture = require("../models/Lecture");

// ✅ ADD LECTURE
const addLecture = async (req, res) => {
  try {
    const { facultyId, classId, subject, day, time } = req.body;

    if (!facultyId || !classId || !subject || !day || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Convert day name to date of this week
    const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const today = new Date();
    const targetDayIndex = daysOfWeek.indexOf(day);
    const diff = (targetDayIndex - today.getDay() + 7) % 7;

    const lectureDate = new Date(today);
    lectureDate.setDate(today.getDate() + diff);

    // 🕒 Convert 12-hour or 24-hour format to correct 24-hour time
    let [hourPart, minutePart] = time.split(":");
    let minutes = parseInt(minutePart);
    let hours = parseInt(hourPart);

    // Handle AM/PM (case-insensitive)
    if (minutePart.toLowerCase().includes("pm") && hours < 12) {
      hours += 12;
    }
    if (minutePart.toLowerCase().includes("am") && hours === 12) {
      hours = 0;
    }

    // Remove non-numeric chars from minutes (like "35pm")
    minutes = parseInt(minutePart.replace(/\D/g, ""));

    // Combine final time
    lectureDate.setHours(hours, minutes, 0, 0);

    // Save lecture
    const lecture = await Lecture.create({
      faculty: facultyId,
      class: classId,
      subject,
      lectureDate, // full datetime
      startTime: time,
      endTime: "00:00"
    });

    console.log("✅ Lecture added successfully:", {
      subject,
      date: lectureDate,
      time: time,
      facultyId,
    });

    res.status(201).json(lecture);
  } catch (error) {
    console.error("❌ Error adding lecture:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// ✅ GET ALL LECTURES
const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find()
      .populate("faculty", "name email phone")
      .populate("class", "name year section");

    const formatted = lectures.map((lec) => ({
      ...lec._doc,
      facultyId: lec.faculty,
      classId: lec.class,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error("❌ Error fetching lectures:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE LECTURE
const deleteLecture = async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error) {
    console.error("❌ Error deleting lecture:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addLecture, getAllLectures, deleteLecture };
