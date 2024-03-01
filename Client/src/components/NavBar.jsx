import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-white md:px-12 sm:px-8 px-6 py-4  border-b shadow-md fixed w-full z-10">
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

        <h1 className="font-semibold md:text-3xl text-2xl">
          <Link to="/">Job Jet</Link>
        </h1>
      </div>

      {/* Hamburger Button and close button */}
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400  transition-all duration-300 ${
            isOpen ? "transform rotate-90" : ""
          }`}
          aria-controls="dropdown"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Nav links */}
      <div
        id="dropdown"
        className={`absolute right-0 mt-2 top-12 sm:top-0 z-10 ${
          isOpen ? "block" : "hidden"
        } sm:block bg-white divide-y sm:divide-y-0 divide-gray-100 rounded-lg sm:shadow-none shadow w-48 px-5 py-3 sm:w-auto `}
      >
        <ul
          className="grid sm:flex items-centers space-y-1 sm:space-y-0 md:text-lg text-sm sm:space-x-6 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <NavLink
              to="/"
              className="active-nav"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className="active-nav"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Search Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/postjob"
              className="active-nav"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Post Job
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
