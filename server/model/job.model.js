const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: [true, "please enter the job title"],
    },
    jobCategory: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobSalary: {
      type: String,
      required: true,
    },
    isJobAvailable: {
      type: Boolean,
      required: true,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("product", jobSchema);

module.exports = Job;
