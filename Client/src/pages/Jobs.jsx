import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import API_URL from "../utils/constant";
export const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL);

      const jsonData = await response.json();
      setJobsData(jsonData);
      setFilterData(jsonData);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleFilter = () => {
    console.log(searchInput);
    const filter = jobsData.filter(
      (job) =>
        job?.jobLocation.toLowerCase().includes(searchInput.toLowerCase()) ||
        job?.jobTitle.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilterData(filter);
  };

  return (
    <div className="pt-20 font-poppins bg-gray-200  lg:px-12 sm:px-8 px-4 ">
      <div className=" w-full  py-4 ">
        <h1 className="text-lg text-blue-500 font-semibold ">Search Jobs</h1>
        <div className="xl:w-6/12 lg:w-8/12 sm:w-10/12 w-full flex items-center gap-6 mt-3">
          <div className="w-full relative ">
            <input
              type="text"
              placeholder="Search jobs by location or job title"
              className="px-4 pl-12 w-full py-2 outline-none rounded-md focus:border-blue-500 border-2"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <span className="absolute top-2 left-4 text-gray-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                ></path>
              </svg>
            </span>
          </div>

          <button
            className="bg-blue-500 text-white font-semibold hover:cursor-pointer border-2 hover:border-2 border-blue-500 hover:bg-gray-100 hover:text-blue-500 py-1.5 px-4 rounded transition hover:transition"
            onClick={handleFilter}
          >
            Search
          </button>
        </div>
      </div>
      <section className="min-h-screen">
        {isLoading ? (
          // Loading spinner
          <div className="flex justify-center">
            <img
              src="/loading.gif"
              alt="loading"
              className="opacity-40 w-[500px]"
            />
          </div>
        ) : filteredData.length === 0 ? (
          // No data found image when there is no data
          <div className="flex justify-center mt-20">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-1965034-1662569.png?f=webp"
              alt="loading"
              className="opacity-40"
            />
          </div>
        ) : (
          <div className=" gap-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 ">
            {filteredData.map((job, id) => (
              <JobCard data={job} key={id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
