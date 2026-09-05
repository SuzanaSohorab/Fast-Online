import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-zinc-950/90
          border
          border-yellow-500/20
          rounded-2xl
          shadow-[0_0_40px_rgba(255,180,0,0.08)]
          p-8
          backdrop-blur-md
        "
      >

        {/* Logo */}
        <div className="text-center mb-8">
          <h1
            className="
              text-4xl
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
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Welcome back! Login to continue.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                input
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
                transition-all
              "
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs text-yellow-400 hover:text-orange-400 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="
                w-full
                input
                bg-zinc-900
                border-zinc-700
                text-white
                placeholder:text-gray-500
                focus:border-yellow-400
                focus:outline-none
                focus:ring-1
                focus:ring-yellow-400
                transition-all
              "
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border-yellow-500 checked:bg-yellow-400 checked:border-yellow-400"
            />

            <span className="text-sm text-gray-400">
              Remember me
            </span>
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              btn
              w-full
              border-0
              bg-linear-to-r
              from-yellow-400
              to-orange-500
              text-black
              font-bold
              text-base
              shadow-[0_0_20px_rgba(255,180,0,0.2)]
              hover:from-yellow-300
              hover:to-orange-400
            "
          >
            Login
          </motion.button>

        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-400 mt-7">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 font-semibold hover:text-orange-400 transition-colors"
          >
            Create an account
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Login;