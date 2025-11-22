const express = require("express");
const router = express.Router();
const { addFaculty, getAllFaculty, deleteFaculty } = require("../controllers/facultyController");

router.post("/", addFaculty);
router.get("/", getAllFaculty);
router.delete("/:id", deleteFaculty);

module.exports = router;
