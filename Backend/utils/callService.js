// // require("dotenv").config(); // ✅ MUST be added at the top
// // const twilio = require("twilio");

// // const client = twilio(
// //   process.env.TWILIO_ACCOUNT_SID,
// //   process.env.TWILIO_AUTH_TOKEN
// // );

// // // Function to make a call
// // const makeCall = async (facultyName, facultyPhone, className) => {
// //   try {
// //     await client.calls.create({
// //       to: facultyPhone,
// //       from: process.env.TWILIO_CALLER_ID,
// //       twiml: `<Response>
// //                 <Say voice="alice">
// //                   Hello ${facultyName}, this is an automated reminder.
// //                   Your lecture for ${className} will start in 10 minutes.
// //                 </Say>
// //               </Response>`,
// //     });

// //     console.log(`✅ Call made to ${facultyName} (${facultyPhone}) for class ${className}`);
// //   } catch (error) {
// //     console.error("❌ Twilio call failed:", error.message);
// //   }
// // };

// // module.exports = makeCall;
// // const twilio = require("twilio");
// // require("dotenv").config();

// // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// // const makeCall = async (facultyName, facultyPhone, className) => {
// //   try {
// //     const call = await client.calls.create({
// //       to: facultyPhone, // e.g. "+917000606483"
// //       from: process.env.TWILIO_CALLER_ID, // e.g. "+15094858618"
// //       twiml: `<Response>
// //                 <Say voice="alice">
// //                   Hello ${facultyName}, this is an automated reminder.
// //                   Your lecture for ${className} will start in 10 minutes.
// //                 </Say>
// //               </Response>`,
// //     });

// //     console.log(`✅ Call initiated for ${facultyName}: ${call.sid}`);
// //   } catch (error) {
// //     console.error("❌ Twilio call failed:", error.message);
// //   }
// // };

// // module.exports = makeCall;

// const cron = require("node-cron");
// const Lecture = require("./models/Lecture");
// const Faculty = require("./models/Faculty");
// const twilio = require("twilio");
// require("dotenv").config();

// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// cron.schedule("* * * * *", async () => {
//   console.log("⏰ Lecture reminder cron running...");

//   const now = new Date();
//   const tenMinutesLater = new Date(now.getTime() + 10 * 60000);

//   const lectures = await Lecture.find({
//     lectureDate: { $gte: now, $lte: tenMinutesLater },
//   }).populate("faculty");

//   for (const lec of lectures) {
//     if (!lec.faculty || !lec.faculty.phone) continue;

//     try {
//       await client.calls.create({
//         twiml: `<Response><Say>Hello ${lec.faculty.name}, your lecture for ${lec.subject} starts in 10 minutes.</Say></Response>`,
//         to: lec.faculty.phone,
//         from: process.env.TWILIO_CALLER_ID,
//       });
//       console.log(`📞 Call sent to ${lec.faculty.name}`);
//     } catch (err) {
//       console.error("❌ Error making call:", err.message);
//     }
//   }
// });

require("dotenv").config();
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Function to make a voice call
const makeCall = async (facultyName, facultyPhone, className, subject) => {
  try {
    const twiml = `<Response>
      <Say voice="alice">
        Hello ${facultyName}, this is an automated reminder from the Lecture Reminder System.
        Your lecture for ${subject} with class ${className} starts in ten minutes.
      </Say>
    </Response>`;

    const call = await client.calls.create({
      to: facultyPhone, // e.g. "+91XXXXXXXXXX"
      from: process.env.TWILIO_CALLER_ID, // e.g. "+15094858618"
      twiml,
    });

    console.log(`✅ Call initiated to ${facultyName} (${facultyPhone}) — SID: ${call.sid}`);
  } catch (error) {
    console.error("❌ Twilio call failed:", error.message);
  }
};

module.exports = makeCall;
