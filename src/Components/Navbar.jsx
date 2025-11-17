import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContex);
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await logout();
      toast.success("Log out successful!");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed!");
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-gray-600 font-medium 
            hover:text-green-500 hover:bg-transparent transition-colors duration-200 text-xl ${
              isActive ? "text-green-500" : ""
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
              isActive ? "text-green-500" : ""
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
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="hidden sm:flex items-center gap-2 text-3xl font-bold text-gray-600"
        >
          Food
          <img
            src="/chicken-skewers-with-slices-apples-chili.png"
            alt="Food Lovers Logo"
            className="w-13 h-14 object-contain inline-block"
          />
          <span className="text-green-500">Lovers</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <img
              src={user.photoURL || "/default-user.png"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              onClick={handlelogout}
              className="px-6 py-1 text-xl font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="
          px-4 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-green-700 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5
        "
            >
              Login
            </Link>

            <Link
              to="/registar"
              className="
          px-4 py-2 
          bg-white text-green-700 
          font-semibold 
          rounded-lg 
          border border-green-600
          shadow-sm 
          transition-all duration-300
          hover:bg-green-700 hover:text-white 
          hover:border-green-700
          hover:-translate-y-0.5
        "
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
