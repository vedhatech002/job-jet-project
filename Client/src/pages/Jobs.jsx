import JobCard from "../components/JobCard";
export const Jobs = () => {
  return (
    <div>
      <div className="m-10 sm:space-x-4 space-x-2 space-y-2">
        <input
          type="text"
          placeholder="Search"
          className="sm:w-80 w-44 p-2 outline-none bg-gray-200 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white hover:cursor-pointer border-2 hover:border-2 border-blue-500 hover:bg-white hover:text-blue-500 p-2 mt-2 rounded"
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
