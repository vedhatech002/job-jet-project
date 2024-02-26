const JobCard = () => {
  return (
    <div className="p-4 flex items-center space-x-6 bg-white shadow-xl shadow-gray-300 rounded w-full">
      <div>
        <img
          src="https://play-lh.googleusercontent.com/K_-SxUrxyAYAs_clNCjP8-xHWkNdEJtX6iNGLsYPz4hbeREfyr_XVn6PRPfOZcfKY6M"
          alt="logo"
          className="w-64 h-64 rounded object-contain"
        />
      </div>
      <div className="text-black space-y-2">
        <h4 className="text-3xl font-poppins font-normal">
          Frontend Developer
        </h4>
        <div className="flex-col justify-start">
          <p className="italic text-lg font-inter text-md">
            Cyberdude Networks Pvt Ltd,Chennai
          </p>
         <p className="text-md italic text-slate-900">Cybedudenetworks@gmail.com</p>
        <p className="font-inter text-md">
          0 - 1 yrs of Experience, skills required ReactJS, TailwindCSS, GitHub
        </p>
        </div>
        
        <div className="flex items-center space-x-8">
          <span className="font-bold">Actively recuriting</span>
          <p>
            <span className="font-semibold underline-offset-4 underline">
              Salary
            </span>
            : 2 LPA
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
