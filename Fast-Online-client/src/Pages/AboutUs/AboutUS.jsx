import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

        <div className="relative z-10 text-center max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 font-semibold tracking-widest uppercase mb-4"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              italic
              tracking-wider
              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
          >
            FAST ONLINE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >
            Fast, reliable and affordable internet connectivity for
            everyone. We are committed to keeping you connected with
            high-speed internet and dependable service.
          </motion.p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="px-6 py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-400 font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connecting People.
              <br />
              <span className="text-yellow-400">
                Connecting Dreams.
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              FAST ONLINE is an internet service provider focused on
              delivering fast, stable and affordable internet
              connectivity. Our goal is to make reliable internet
              accessible for homes, students, professionals and
              businesses.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From everyday browsing and online classes to gaming,
              streaming and remote work, we provide a connection you
              can depend on.
            </p>
          </motion.div>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              bg-zinc-950
              border
              border-yellow-500/20
              rounded-2xl
              p-8
              shadow-[0_0_40px_rgba(255,180,0,0.06)]
            "
          >
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-black text-yellow-400">
                  24/7
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Connectivity
                </p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-black text-orange-400">
                  Fast
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Internet
                </p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-black text-yellow-400">
                  Reliable
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Service
                </p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-black text-orange-400">
                  Support
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Whenever You Need
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 bg-zinc-950">

        <div className="max-w-5xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-yellow-400 font-semibold uppercase tracking-widest"
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Internet That Keeps You
            <span className="text-yellow-400"> Ahead.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Our mission is simple: provide high-quality internet with
            excellent customer service at a price that works for
            everyone. We continuously improve our network and
            technology so our customers can stay connected without
            limitations.
          </motion.p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready for a{" "}
            <span className="text-yellow-400">
              faster connection?
            </span>
          </h2>

          <p className="text-gray-400 mt-4 mb-8">
            Join FAST ONLINE and experience reliable internet
            connectivity.
          </p>

          <button
            className="
              btn
              border-0
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              text-black
              font-bold
              px-8
              hover:from-yellow-300
              hover:to-orange-400
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_20px_rgba(255,180,0,0.2)]
            "
          >
            Get Connected
          </button>

        </motion.div>

      </section>

    </div>
  );
};

export default About;