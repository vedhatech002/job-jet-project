import { Link } from "react-router-dom";
const JobCard = (props) => {
  return (
    <Link
      to={`/job/${props.data?._id}`}
      className="px-4 py-6 bg-white flex  items-center gap-4 rounded-md font-poppins shadow-lg "
    >
      <div className="">
        <img
          src={props.data?.companyLogo}
          alt="logo"
          className=" w-24 h-24  object-cover"
          onError={(e) => {
            const defaultImg =
              "https://static.vecteezy.com/system/resources/previews/024/033/455/original/business-icon-office-suitcase-with-transparent-background-free-png.png";
            e.target.src = defaultImg;
          }}
        />
      </div>
      <div className="text-black flex flex-col items-start gap-1">
        <h4 className="text-xl font-poppins font-semibold capitalize">
          {props.data?.jobTitle}
        </h4>
        <p className="text-sm lg:text-[16px] font-inter font-medium">
          {props.data?.companyName}
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Salary :</span>
          <span> {props.data?.jobSalary}</span>
        </div>
        <div className="lg:font-inter text-[14px] md:text-[13px] lg:text-sm flex items-center gap-2">
          <span className="font-semibold"> Job Function :</span>
          <span>{props.data?.jobCategory}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
