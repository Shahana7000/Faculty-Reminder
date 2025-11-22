// // const cron = require("node-cron");
// // const twilio = require("twilio");
// // const Lecture = require("../models/Lecture");
// // const Faculty = require("../models/Faculty");
// // const ClassModel = require("../models/Class");

// // const client = twilio(
// //   process.env.TWILIO_ACCOUNT_SID,
// //   process.env.TWILIO_AUTH_TOKEN
// // );

// // // Utility function to create dynamic message
// // const generateVoiceMessage = (facultyName, className) => {
// //   return `Hello ${facultyName}, this is an automated reminder from the Lecture Reminder System. 
// //   Your lecture for ${className} starts in ten minutes. Please be prepared.`;
// // };

// // // Main reminder function
// // const startLectureReminder = () => {
// //   console.log("⏰ Lecture reminder cron started...");

// //   // Runs every minute
// //   cron.schedule("* * * * *", async () => {
// //     const now = new Date();
// //     const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

// //     const tenMinutesLater = new Date(now.getTime() + 10 * 60000)
// //       .toTimeString()
// //       .slice(0, 5); // HH:MM format

// //     try {
// //       const upcomingLectures = await Lecture.find({
// //         day: currentDay,
// //         time: tenMinutesLater,
// //       })
// //         .populate("facultyId")
// //         .populate("classId");

// //       for (const lec of upcomingLectures) {
// //         const faculty = lec.facultyId;
// //         const classData = lec.classId;

// //         if (!faculty?.phone) continue;

// //         const message = generateVoiceMessage(faculty.name, classData.name);

// //         await client.calls.create({
// //           twiml: `<Response><Say voice="alice">${message}</Say></Response>`,
// //           to: faculty.phone,
// //           from: process.env.TWILIO_CALLER_ID,
// //         });

// //         console.log(`📞 Called ${faculty.name} for ${classData.name}`);
// //       }
// //     } catch (err) {
// //       console.error("❌ Error in reminder scheduler:", err.message);
// //     }
// //   });
// // };

// // module.exports = startLectureReminder;
// const cron = require("node-cron");
// const twilio = require("twilio");
// const Lecture = require("../models/Lecture");
// const Faculty = require("../models/Faculty");
// const ClassModel = require("../models/Class");
// require("dotenv").config();

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// function generateVoiceMessage(facultyName, className, subject) {
//   return `Hello ${facultyName}, this is an automated reminder from the Lecture Reminder System. 
//   Your lecture for ${subject} with class ${className} starts in ten minutes. Please be prepared.`;
// }

// const startLectureReminder = () => {
//   console.log("⏰ Lecture reminder cron started...");

//   cron.schedule("* * * * *", async () => {
//     const now = new Date();
//     const tenMinutesLater = new Date(now.getTime() + 10 * 60000);

//     try {
//       const lectures = await Lecture.find({
//         lectureDate: { $gte: now, $lte: tenMinutesLater },
//       })
//         .populate("faculty")
//         .populate("class");

//       if (lectures.length === 0) {
//         console.log("No lectures in the next 10 minutes.");
//         return;
//       }

//       for (const lec of lectures) {
//         if (!lec.faculty?.phone) continue;

//         const message = generateVoiceMessage(
//           lec.faculty.name,
//           lec.class.name,
//           lec.subject
//         );

//         await client.calls.create({
//           twiml: `<Response><Say>${message}</Say></Response>`,
//           to: lec.faculty.phone,
//           from: process.env.TWILIO_CALLER_ID,
//         });

//         console.log(`📞 Called ${lec.faculty.name} for ${lec.subject}`);
//       }
//     } catch (error) {
//       console.error("❌ Error in lecture reminder:", error.message);
//     }
//   });
// };

// module.exports = startLectureReminder;

const cron = require("node-cron");
const Lecture = require("../models/Lecture");
const makeCall = require("../utils/callService");

const startLectureReminder = () => {
  console.log("⏰ Lecture reminder cron started...");

  // Runs every minute
  cron.schedule("* * * * *", async () => {
    const now = new Date();
    const tenMinutesLater = new Date(now.getTime() + 10 * 60000);

    try {
      const lectures = await Lecture.find({
        lectureDate: { $gte: now, $lte: tenMinutesLater },
      })
        .populate("faculty")
        .populate("class");

      if (lectures.length === 0) {
        console.log("No lectures in the next 10 minutes.");
        return;
      }

      for (const lec of lectures) {
        if (!lec.faculty?.phone) continue;

        await makeCall(
          lec.faculty.name,
          lec.faculty.phone,
          lec.class.name,
          lec.subject
        );
      }
    } catch (error) {
      console.error("❌ Error in lecture reminder cron:", error.message);
    }
  });
};

module.exports = startLectureReminder;
