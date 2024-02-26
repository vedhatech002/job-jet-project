import { Link } from "react-router-dom";
const JobCard = (props) => {
  return (
    <Link
      to={`/job/${props.data?._id}`}
      className="px-4 py-6 flex items-center space-x-6 bg-white shadow-md shadow-gray-300 rounded "
    >
      <div className="rounded-full">
        <img
          src={props.data?.companyLogo}
          alt="logo"
          className=" rounded-full w-32 h-32  mx-auto object-cover"
        />
      </div>
      <div className="text-black space-y-2">
        <h4 className="text-xl font-poppins font-normal">
          {props.data?.jobTitle}
        </h4>
        <div className="flex-col justify-start">
          <p className="italic text-lg font-inter text-md">
            {props.data?.companyName}
          </p>
          <p className="text-sm italic text-slate-900">
            {props.data?.contactInfo}
          </p>

          <p className="font-inter text-sm">{props.data.jobCategory}</p>
        </div>

        <div className="flex items-center space-x-8">
          <span className="font-bold font-xs">
            {props.data?.isJobAvailable ? "Actively Recruiting" : "Job Expired"}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-semibold ">Salary</span>
            <span> {props.data?.jobSalary}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
