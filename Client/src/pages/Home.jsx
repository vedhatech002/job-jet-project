import JobCard from "../components/JobCard";
import SearchJobs from "./SearchJobs";

export const Home = () => {
  return <div className="bg-gray-100">
    <div className="grid grid-cols-2 items-center gap-x-2 m-10 py-20 font-poppins">
    <div className="m-5">
      <h2 className="text-3xl font-bold">Find your job of your choices</h2>
      <p className="my-3 leading-relaxed font-inter">
        Its a portal where you can post your job vacancy in your company all around India. And also
You can find your jobs by matching your location, company, salary and recruiting status of the company
        </p>
        <div className="space-x-4 my-6">
          <button className="outline rounded-sm px-4 py-2 outline-1 outline-blue-500 hover:bg-blue-500  hover:text-white hover:cursor-pointer font-semibold text-blue-500">
            Search Jobs
         </button>
          <button className="outline rounded-sm px-4 py-2 outline-1 bg-blue-500 outline-blue-500 hover:bg-white hover:text-blue-500 hover:cursor-pointer font-semibold text-white">
            Post Jobs
         </button>
        </div>
      </div>
      <div>
      <img src="./Illustration.png" alt="landing-page" className="w-88 h-88 rounded object-contain"></img>
    </div>
    </div>
    <SearchJobs/>
    </div>
};
