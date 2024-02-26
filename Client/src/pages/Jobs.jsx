import JobCard from "../components/JobCard";
export const Jobs = () => {
  return (
    <div className="px-20 py-10">
      <div>
        <h1 className="text-blue-500 font-semibold text-3xl">Search Jobs</h1>
      </div>
      <div className="mt-3 sm:space-x-3 space-x-2 space-y-2 relative">
        <input
          type="text"
          placeholder="Search"
          className="sm:w-80 w-44 px-10 py-2 outline-none bg-gray-200 rounded"
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="fill-current absolute top-3.5 left-2 text-gray-400"
          >
            <path
              fill="currentColor"
              d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
            ></path>
          </svg>
        </span>

        <button
          type="submit"
          className="bg-blue-500 text-white hover:cursor-pointer border-2 hover:border-2 border-blue-500 hover:bg-white hover:text-blue-500 py-2 px-6 mt-2 rounded transition hover:transition"
        >
          Search
        </button>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4 m-5">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};
