import { Link } from "react-router-dom";
const JobCard = (props) => {
  return (
    <Link
      to={`/job/${props.data?._id}`}
      className="sm:px-4 py-5 sm:py-10 sm:flex items-center space-y-4 sm:space-y-0 space-x-6 bg-white shadow-md shadow-gray-300 rounded "
    >
      <div className="rounded">
        <img
          src={props.data?.companyLogo}
          alt="logo"
          className=" rounded w-32 h-32 mx-auto object-cover"
        />
      </div>
      <div className="text-black space-y-3">
        <h4 className="text-lg font-poppins font-semibold capitalize">
          {props.data?.jobTitle}
        </h4>
        <span className="font-inter text-sm">{props.data.jobCategory}</span>
        <div className="flex-col justify-start">
          <p className="italic text-lg font-inter text-md">
            {props.data?.companyName}
          </p>
          <p className="text-sm italic text-slate-900">
            {props.data?.contactInfo}
          </p>
        </div>

        <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold border-b border-gray-600">
              Salary
            </span>
            <span> {props.data?.jobSalary}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
