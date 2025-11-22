// utils/twilio-test.js
const twilio = require("twilio");
require("dotenv").config({ path: "../.env" });

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

(async () => {
  try {
    const call = await client.calls.create({
      to: "+917000606483", // your verified number
      from: process.env.TWILIO_CALLER_ID, // Twilio provided number
      twiml: '<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="alice">Hello Shahana, this is an automated reminder. Your lecture for BCA will start in 10 minutes. Please be ready.</Say></Response>',
    });

    console.log("✅ Custom call initiated:", call.sid);
  } catch (error) {
    console.error("❌ Error making call:", error.message);
  }
})();
