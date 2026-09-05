import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import bannerVideo from "../../assets/banner.mp4";

const Banner = () => {
  const text =
    "Fastest internet service provider in your area. Experience blazing fast speeds and reliable connectivity with our state-of-the-art technology.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="hero-content relative z-10 text-neutral-content text-center">
        <div className="max-w-5xl">

          {/* Welcome */}
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-4 text-lg md:text-xl font-semibold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]"
          >
            Welcome to
          </motion.p>

          {/* FAST ONLINE */}
          <motion.h1
            initial={{ opacity: 0, x: 250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="
              text-6xl
              md:text-8xl
              lg:text-9xl
              font-black
              tracking-widest
              italic
              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_15px_rgba(255,180,0,0.5)]
            "
          >
            FAST ONLINE
          </motion.h1>

          {/* Animated Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "180px" }}
            transition={{ duration: 1, delay: 1 }}
            className="
              h-1
              mx-auto
              mt-5
              rounded-full
              bg-gradient-to-r
              from-yellow-300
              via-yellow-400
              to-orange-500
              shadow-[0_0_10px_rgba(255,200,0,0.9)]
            "
          ></motion.div>

          {/* Typewriter Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="
              mt-6
              text-base
              md:text-lg
              max-w-3xl
              mx-auto
              text-gray-200
              leading-relaxed
              min-h-[80px]
            "
          >
            {displayText}
            <span className="animate-pulse text-yellow-400 font-bold">
              |
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn btn-primary px-8 font-bold"
            >
             Our Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn btn-outline btn-secondary px-8 font-bold"
            >
              Explore
            </motion.button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;