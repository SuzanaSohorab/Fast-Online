import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    // Registration logic will be added here
    console.log("Register clicked");
  };

  const handleGoogleRegister = () => {
    // Google authentication will be added here
    console.log("Google Register clicked");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-zinc-950/95
          border
          border-yellow-500/20
          rounded-2xl
          shadow-[0_0_40px_rgba(255,180,0,0.08)]
          p-8
          backdrop-blur-md
        "
      >

        {/* Header */}
        <div className="text-center mb-7">

          <h1
            className="
              text-4xl
              font-black
              italic
              tracking-widest
              bg-linear-to-r
              from-yellow-200
              via-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
          >
            FAST ONLINE
          </h1>

          <h2 className="text-2xl font-bold text-white mt-5">
            Create an Account
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Join FAST ONLINE and stay connected.
          </p>

        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="
                input
                w-full
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="
                input
                w-full
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              required
              className="
                input
                w-full
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              required
              className="
                input
                w-full
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
              "
            />
          </div>

          {/* Register Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              btn
              w-full
              border-0
              mt-2
              bg-linear-to-r
              from-yellow-400
              to-orange-500
              text-black
              font-bold
              shadow-[0_0_20px_rgba(255,180,0,0.2)]
              hover:from-yellow-300
              hover:to-orange-400
            "
          >
            Create Account
          </motion.button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-zinc-800 flex-1"></div>

          <span className="text-xs text-gray-500">
            OR
          </span>

          <div className="h-px bg-zinc-800 flex-1"></div>
        </div>

        {/* Google Register */}
        <motion.button
          type="button"
          onClick={handleGoogleRegister}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="
            btn
            w-full
            bg-white
            hover:bg-gray-100
            text-black
            border-0
            font-semibold
          "
        >
          {/* Google Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19.1-7.2 19.1-20 0-1.3-.2-2.3-.5-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-.8 2.7-2.4 5-4.1 6.6l6.2 5.2C36.9 40.4 44 35 44 24c0-1.3-.2-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </motion.button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-400 mt-7">
          Already have an account?{" "}

          <Link
            to="/login"
            className="
              text-yellow-400
              font-semibold
              hover:text-orange-400
              transition-colors
            "
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Register;