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
      console.log(jsonData);
    };

    getSingleJob();
  }, []);

  const navigate = useNavigate();

  const deleteData = () => {
    const confirmDelete = confirm("if you want to delete this job");
    if (confirmDelete) {
      const deleteDBData = async () => {
        const response = await fetch(API_URL + id, {
          method: "DELETE",
        });
      };
      deleteDBData();
      alert("sucessfully deleted");
      navigate("/jobs");
    } else {
      alert("data not found");
    }
  };

  return jobData === null ? (
    <h1>fetching data</h1>
  ) : (
    <div className="py-10 bg-gray-200">
      <div className="max-w-5xl mx-auto bg-white shadow-md shadow-gray-300 rounded w-full mb-10 p-4">
        <div className="p-4 flex items-start space-x-6">
          <div>
            <img
              src="https://play-lh.googleusercontent.com/K_-SxUrxyAYAs_clNCjP8-xHWkNdEJtX6iNGLsYPz4hbeREfyr_XVn6PRPfOZcfKY6M"
              alt="logo"
              className="w-32 h-32 mx-auto rounded-md object-cover  "
            />
          </div>
          <div className="text-black space-y-2">
            <h4 className="text-2xl font-poppins font-semibold">
              {jobData?.jobTitle}
            </h4>
            <div className="flex-col justify-start">
              <p className=" text-lg font-inter font-semibold">
                {jobData?.companyName}
              </p>
              <p className="text-sm text-slate-900">{jobData?.contactInfo}</p>
            </div>

            <div className="space-y-2 text-lg">
              {jobData?.isJobAvailable ? (
                <span className="bg-green-500 px-4 py-0.5 text-sm font-semibold text-white rounded-md">
                  Actively Recruiting
                </span>
              ) : (
                <span className="bg-red-500 px-4 py-0.5 text-sm font-semibold text-white rounded-md">
                  Job Expired
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="font-semibold  text-lg ">Salary :</span>
                <span className="font-sm  "> {jobData?.jobSalary}</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-2"></hr>
        <div className="m-4">
          <p className="text-sm font-inter">{jobData?.jobDescription}</p>
        </div>
        <div className="space-x-4">
          <Link
            to={`/updatejob/${id}`}
            href="#"
            className="bg-blue-500 text-white font-semibold px-4 py-[0.28rem] rounded-md"
          >
            Update
          </Link>
          <button
            className="bg-red-500 text-white px-4 py-1 font-semibold rounded"
            onClick={deleteData}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
