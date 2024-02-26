const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controller/job.controller.js");

router.get("/", getJobs);

router.get("/:id", getSingleJob);

router.post("/", createJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

module.exports = router;
