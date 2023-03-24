const express = require("express");
const router = express.Router();

const blogRoutes = require("./blogController");
router.use("/api/blogs", blogRoutes);

const userRoutes = require("./userController");
router.use("/api/users", userRoutes);

const frontEndRoutes = require("./frontEndController");
router.use("/", frontEndRoutes);

const commentRoutes = require("./commentController");
router.use("/api/comments", commentRoutes);

module.exports = router;