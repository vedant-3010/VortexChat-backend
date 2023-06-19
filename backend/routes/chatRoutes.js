const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChats);
// router.route("/group").post(protect, createGroup);
// router.route("/rename").get(protect, renameGroup);
// router.route("/groupremove").get(protect, removeFromGroup);
// router.route("/groupadd").get(protect, addToGroup);

module.exports = router;