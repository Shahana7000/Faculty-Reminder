const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Static admin credentials
const ADMIN_EMAIL = "admin@college.com";
const ADMIN_PASSWORD = "admin123";

// Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, "secretKey", { expiresIn: "1h" });
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;
