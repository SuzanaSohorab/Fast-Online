import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <section className="relative py-20 px-6 text-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-20 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -bottom-20 right-1/4"></div>

        <div className="relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 font-semibold tracking-widest uppercase mb-3"
          >
            Get In Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-6xl
              font-black
              italic
              bg-gradient-to-r
              from-yellow-200
              via-yellow-400
              to-orange-500
              bg-clip-text
              text-transparent
            "
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto mt-5"
          >
            Have a question or need help? Our team is always ready
            to help you stay connected.
          </motion.p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-3">
              Let's talk.
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you are looking for a new internet connection,
              need technical support, or have any questions about
              our services, feel free to contact us.
            </p>

            {/* Location */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl">
                📍
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Our Location
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  107 New Eskaton, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl">
                📞
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Phone
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  +880 1719912221
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl">
                ✉️
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Email
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  fastonline21@gmail.com
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="mt-8 p-5 rounded-xl border border-yellow-500/20 bg-zinc-950">
              <h3 className="text-yellow-400 font-bold">
                24/7 Customer Support
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Need urgent assistance? Our support team is here
                to help you whenever you need us.
              </p>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              bg-zinc-950
              border
              border-yellow-500/20
              rounded-2xl
              p-6
              md:p-8
              shadow-[0_0_40px_rgba(255,180,0,0.06)]
            "
          >

            <h2 className="text-2xl font-bold mb-6">
              Send us a message
            </h2>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
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
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
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

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is this about?"
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

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="
                    textarea
                    w-full
                    bg-zinc-900
                    border-zinc-700
                    text-white
                    placeholder:text-gray-500
                    focus:border-yellow-400
                    focus:outline-none
                    focus:ring-1
                    focus:ring-yellow-400
                    resize-none
                  "
                ></textarea>
              </div>

              {/* Submit */}
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
                  shadow-[0_0_20px_rgba(255,180,0,0.2)]
                  hover:from-yellow-300
                  hover:to-orange-400
                "
              >
                Send Message
              </motion.button>

            </form>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;