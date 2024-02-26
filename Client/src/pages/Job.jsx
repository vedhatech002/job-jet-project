const Job = () => {
  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
                  viewBox="0 0 24 24"
                  className="bg-gray-300 hover:bg-gray-500 hover:fill-white rounded-full p-2 fill-blue-800"
        >
          <path
            d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77"
          />
        </svg>
          </div>
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
    </div>
  );
};

export default Job;
