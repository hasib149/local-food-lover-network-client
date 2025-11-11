import React from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
          hover:text-green-500 hover:bg-transparent transition-colors duration-200 text-xl ${
            isActive ? "text-green-500 " : ""
          }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
          hover:text-green-500 hover:bg-transparent transition-colors duration-200 text-xl ${
            isActive ? "text-green-500 " : ""
          }`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b border-green-300 w-11/12 mx-auto">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo / Brand Name */}
        <Link to="/" className="text-3xl font-bold text-gray-600">
          Food <span className="text-green-500">Lovers</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-2">
        <Link to="/login"
          className="
  relative overflow-hidden group
  px-6 py-1 text-xl font-semibold uppercase tracking-wide
  text-green-700  outline outline-green-600
  transition duration-700 hover:scale-105 hover:text-white hover:outline-green-600
  hover:shadow-[4px_5px_17px_-4px_#268391]
  rounded-md
"
        >
          <span className="relative z-10">Login</span>
          <span className="absolute -left-10 top-0 h-full w-0 bg-green-700 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
        </Link>
        <Link to="/login"
          className="
  relative overflow-hidden group
  px-6 py-1 text-xl font-semibold uppercase tracking-wide
  text-green-700  outline outline-green-600
  transition duration-700 hover:scale-105 hover:text-white hover:outline-green-600
  hover:shadow-[4px_5px_17px_-4px_#268391]
  rounded-md
"
        >
          <span className="relative z-10">Register</span>
          <span className="absolute -left-10 top-0 h-full w-0 bg-green-700 skew-x-45 transition-all duration-700 group-hover:w-[250%] -z-10"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
