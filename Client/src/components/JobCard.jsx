import { Link } from "react-router-dom";
const JobCard = (props) => {
  return (
    <Link
      to={`/job/${props.data?._id}`}
      className="px-4 py-6 bg-white flex  items-center gap-4 rounded-md font-poppins   shadow-lg "
    >
<<<<<<< HEAD
      <div className="rounded">
        <img
          src={props.data?.companyLogo}
          alt="logo"
          className=" rounded w-32 h-32 mx-auto object-cover"
        />
      </div>
      <div className="text-black space-y-3">
        <h4 className="text-lg font-poppins font-semibold capitalize">
=======
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
>>>>>>> 9c01fad01adf93cb66f9d00e403b98318129830d
          {props.data?.jobTitle}
        </h4>
        <p className=" text-[16px] font-inter font-medium">
          {props.data?.companyName}
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold">Salary :</span>
          <span> {props.data?.jobSalary}</span>
        </div>
        <div className="font-inter text-sm flex items-center gap-2">
          <span className="font-semibold"> Job Function :</span>
          <span>{props.data?.jobCategory}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
