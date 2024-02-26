const Job = (props) => {
  return (
    <div>
      <div className="px-8 py-8 flex items-center space-x-6 bg-white shadow-lg shadow-gray-300 rounded w-full">
        <div>
          <img
            src="https://play-lh.googleusercontent.com/K_-SxUrxyAYAs_clNCjP8-xHWkNdEJtX6iNGLsYPz4hbeREfyr_XVn6PRPfOZcfKY6M"
            alt="logo"
            className="sm:w-52 sm:h-52 w-32 h-32 object-contain mx-auto"
          />
        </div>
        <div className="text-black space-y-2">
          <h4 className="text-3xl font-poppins font-normal">
            {props.data.jobTitle}
          </h4>
          <h4 className="text-xl font-poppins font-normal">
            {props.data.companyName}
          </h4>
          <div className="flex-col justify-start">
            <p className="italic text-lg font-inter text-md">
              Location : {props.data.jobLocation}
            </p>
          </div>

          <div className="flex items-center space-x-8">
            <span className="font-bold">
              {" "}
              {props.data.isJobAvailable
                ? "actively recuruting"
                : "job expired"}
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
    </div>
  );
};

export default Job;
