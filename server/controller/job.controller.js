const Job = require("../model/job.model.js");

//Get All data from DB
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
    console.log(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

//Post method to create Job on DB
const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

//get one job
const getSingleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(200).json(job);
    console.log(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

//update a job in Db
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndUpdate(id, req.body);

    if (!job) {
      return res.status(404).json({ message: "job not found" });
    }
    const updatedJob = await Job.findById(id);

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

//Delete a Job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return res.status(404).json({ message: "job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = {
  getJobs,
  createJob,
  getSingleJob,
  updateJob,
  deleteJob,
};
