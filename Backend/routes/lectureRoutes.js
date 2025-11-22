const express = require("express");
const router = express.Router();
const { addLecture, getAllLectures, deleteLecture } = require("../controllers/lectureController");

router.post("/", addLecture);
router.get("/", getAllLectures);
router.delete("/:id", deleteLecture);

module.exports = router;
