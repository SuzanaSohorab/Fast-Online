import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-400 transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-400 transition-colors duration-300"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-400 transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black/90 text-white shadow-lg border-b border-yellow-500/20 backdrop-blur-md sticky top-0 z-50">

      {/* Left */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-yellow-400 lg:hidden"
          >
            <svg
              aria-label="Menu"
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
            className="menu menu-sm dropdown-content bg-black/95 text-white rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-yellow-500/20"
          >
            {navLink}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="
            btn btn-ghost
            text-2xl
            font-black
            italic
            tracking-widest
            bg-gradient-to-r
            from-yellow-200
            via-yellow-400
            to-orange-500
            bg-clip-text
            text-transparent
            hover:scale-105
            transition-transform
            duration-300
          "
        >
          FAST ONLINE
        </NavLink>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-base font-semibold">
          {navLink}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end">
        <NavLink
          to="/login"
          className="
            btn
            border-0
            bg-gradient-to-r
            from-yellow-400
            to-orange-500
            text-black
            font-bold
            px-6
            hover:from-yellow-300
            hover:to-orange-400
            hover:scale-105
            transition-all
            duration-300
            shadow-[0_0_15px_rgba(255,180,0,0.35)]
          "
        >
          Login
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;