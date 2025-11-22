const express = require("express");
const router = express.Router();
const { addClass, getAllClasses, deleteClass } = require("../controllers/classController");

router.post("/", addClass);
router.get("/", getAllClasses);
router.delete("/:id", deleteClass);

module.exports = router;
