import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex  justify-between items-center bg-white px-3 sm:px-20 py-5 border-b shadow-md">
      <div className="flex items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-current mr-2 text-blue-500"
          >
            <g fill="none" fillRule="evenodd">
              <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="currentColor"
                d="M14 4a3 3 0 0 1 3 3h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3zm1 5H9v10h6zm5 0h-3v10h3zM7 9H4v10h3zm7-3h-4a1 1 0 0 0-.993.883L9 7h6a1 1 0 0 0-.883-.993z"
              ></path>
            </g>
          </svg>
        </span>

        <h1 className="font-semibold text-3xl">
          <Link to="/">Job Jet</Link>
        </h1>
      </div>
      <ul className="flex items-center space-x-3 sm:space-x-6">
        <li
          className="font-semibold hover:text-blue-500
        hover:cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
        before:-bottom-5 before:left-0 before:bg-blue-500
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="font-semibold hover:text-blue-500
        hover:cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
        before:-bottom-5 before:left-0 before:bg-blue-500
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/jobs">Search Job</Link>
        </li>
        <li
          className="font-semibold hover:text-blue-500
        hover:cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
        before:-bottom-5 before:left-0 before:bg-blue-500
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/postjob">Post A Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};
