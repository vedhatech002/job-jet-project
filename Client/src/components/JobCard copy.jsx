const JobCard = (props) => {
  return (
    <div className="p-4 flex items-center space-x-6 bg-white shadow-md shadow-gray-300 rounded">
      <div className="rounded-full">
        <img
          src="https://play-lh.googleusercontent.com/K_-SxUrxyAYAs_clNCjP8-xHWkNdEJtX6iNGLsYPz4hbeREfyr_XVn6PRPfOZcfKY6M"
          alt="logo"
          className="sm:w-52 sm:h-52 w-32 h-32 object-contain mx-auto"
        />
      </div>
      <div className="text-black space-y-2">
        <h4 className="text-xl font-poppins font-normal">
          {props.data.jobTitle}
        </h4>
        <div className="flex-col justify-start">
          <p className="italic text-lg font-inter text-md">
            {props.data.companyName}
          </p>
          <p className="text-sm italic text-slate-900">
            Cybedudenetworks@gmail.com
          </p>
          <p className="font-inter text-sm">{props.data.jobCategory}</p>
        </div>

        <div className="flex items-center space-x-8">
          <span className="font-bold font-xs">
            {props.data.isJobAvailable ? "actively recuruting" : "job expired"}
          </span>
          <p>
            <span className="font-semibold underline-offset-4 underline">
              Salary
            </span>
            {props.data.jobSalary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
