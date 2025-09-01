const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createCategory).get(protect, getAllCategories);

module.exports = router;
