import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-yellow-500/20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <NavLink
            to="/"
            className="
              text-3xl
              font-black
              italic
              tracking-widest
              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
          >
            FAST ONLINE
          </NavLink>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Fast, reliable and affordable internet connectivity.
            Stay connected with FAST ONLINE.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">

            <a
              href="#"
              className="btn btn-circle btn-sm bg-zinc-900 border-zinc-800 hover:bg-yellow-400 hover:text-black transition-all"
            >
              f
            </a>

            <a
              href="#"
              className="btn btn-circle btn-sm bg-zinc-900 border-zinc-800 hover:bg-yellow-400 hover:text-black transition-all"
            >
              X
            </a>

            <a
              href="#"
              className="btn btn-circle btn-sm bg-zinc-900 border-zinc-800 hover:bg-yellow-400 hover:text-black transition-all"
            >
              in
            </a>

            <a
              href="#"
              className="btn btn-circle btn-sm bg-zinc-900 border-zinc-800 hover:bg-yellow-400 hover:text-black transition-all"
            >
              ▶
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <NavLink
                to="/"
                className="hover:text-yellow-400 transition-colors"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className="hover:text-yellow-400 transition-colors"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              High Speed Internet
            </li>

            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Home Broadband
            </li>

            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              Business Internet
            </li>

            <li className="hover:text-yellow-400 transition-colors cursor-pointer">
              24/7 Customer Support
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex gap-3">
              <span className="text-yellow-400">📍</span>
              <span>
                107 New Eskaton Dhaka, Bangladesh
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-yellow-400">📞</span>
              <span>
                +880 1719912221
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-yellow-400">✉️</span>
              <span>
                support@fastonline.com
              </span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p className="text-gray-500">
            © {new Date().getFullYear()} FAST ONLINE. All rights reserved.
          </p>

          <div className="flex gap-5 text-gray-500">
            <a
              href="#"
              className="hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-yellow-400 transition-colors"
            >
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;