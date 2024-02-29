import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import API_URL from "../utils/constant";

const Job = () => {
  const [jobData, setJobData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleJob = async () => {
      const response = await fetch(API_URL + id);

      const jsonData = await response.json();
      setJobData(jsonData);
    };

    getSingleJob();
  }, []);

  const navigate = useNavigate();

  const deleteData = () => {
    const confirmDelete = confirm(
      "Do you want to delete this job recruitment post?"
    );
    if (confirmDelete) {
      const deleteDBData = async () => {
        const response = await fetch(API_URL + id, {
          method: "DELETE",
        });
      };
      deleteDBData();
      alert("Your post has been deleted");
      navigate("/jobs");
    }
  };

  return jobData === null ? (
    <div className="flex justify-center mt-20 min-h-screen ">
      <img src="/loading.gif" alt="loading" className="h-96" />
    </div>
  ) : (
    <div className="py-10 px-5 pb-10 bg-gray-200 min-h-screen pt-32">
      <div className="max-w-5xl mx-auto bg-white shadow-md shadow-gray-300 rounded w-full px-3 sm:px-5 py-5 sm:py-10">
        <div className="p-4 sm:flex items-start space-y-10 sm:space-y-0 sm:space-x-10">
          <div>
            <img
              src={jobData?.companyLogo}
              alt="logo"
              className="w-36 h-36 mx-auto rounded-md object-cover"
            />
          </div>
          <div className="text-black space-y-2">
            <h4 className="text-2xl font-poppins font-semibold capitalize">
              {jobData?.jobTitle}
            </h4>
            <div className="flex-col justify-start">
              <p className=" text-lg font-inter font-semibold">
                {jobData?.companyName}
              </p>
              <p className="text-sm text-slate-900">{jobData?.contactInfo}</p>
            </div>

            <div className="space-y-2 text-lg">
              <span
                className={` px-4 py-1 text-sm font-semibold text-white rounded-full ${
                  jobData?.isJobAvailable === "Actively Recruiting"
                    ? "bg-green-600"
                    : "bg-red-500"
                } `}
              >
                {jobData?.isJobAvailable}
              </span>

              <div className="flex items-center gap-3">
                <span className="font-semibold  border-b border-gray-400">
                  Salary :
                </span>
                <span> {jobData?.jobSalary}</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-2"></hr>
        <div className="my-4 px-4">
          <p className="font-inter">
            <span className="font-semibold">Job Description : </span>
            {jobData?.jobDescription}
          </p>

          <div className="flex items-center space-x-5 mt-5">
            <Link
              to={`/updatejob/${id}`}
              className="bg-blue-500 text-white font-semibold px-4 py-[0.28rem] rounded-md hover:bg-blue-600"
            >
              Edit Post
            </Link>
            <button
              className="bg-red-500 text-white px-4 py-1 font-semibold rounded-md hover:bg-red-600"
              onClick={deleteData}
            >
              Delete Post
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/jobs">
          <button className="outline rounded-md px-7 py-2 outline-1 bg-blue-500 outline-blue-500 hover:bg-gray-100 hover:text-blue-500 hover:cursor-pointer font-semibold text-white transition hover:transition ">
            Back to Search Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
