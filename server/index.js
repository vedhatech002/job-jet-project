const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const jobRoutes = require("./routes/job.route.js");

const app = express();

//middleware to recive json data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("hello Job Jet");
});

//connection with db
if (process.env.MONGODB_URL) {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("conected to database!");
      app.listen(3000, () => {
        console.log("server is running on port 3000");
      });
    })
    .catch((error) => {
      console.log("conection failed!", error);
    });
} else {
  console.log("not fetching env");
}
