import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gray-300 sticky w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"} className="text-black text-3xl font-bold">
                AITS
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block ">
              <Link
                to={"/"}
                className="text-black transition-all delay-75 hover:text-white px-3 py-2 rounded-md font-medium "
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-black transition-all delay-75 hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                About
              </Link>
              <Link
                to={"/courses"}
                className="text-black transition-all delay-75 hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Courses
              </Link>
              <Link
                to={"/contact"}
                className="text-black transition-all delay-75 hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-white focus:outline-none "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to={"/"}
            className="block text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="block text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <Link
            to={"/courses"}
            className="block text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Courses
          </Link>
          <Link
            to={"/contact"}
            className="block text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
