import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-5 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                delay: 2,
                repeat: Infinity,
              }}
            />
            <img
              src="./public/photo.jpeg"
              alt="Profile"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About Me
            </motion.h1>
            <motion.div
              className="space-y-6 text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Hello! I'm a passionate full-stack developer with a love for
                creating beautiful and functional web applications. With several
                years of experience in web development, I specialize in building
                responsive and user-friendly interfaces.
              </p>
              <p>
                My journey in software development began with a curiosity about
                how things work on the web. Since then, I've worked on various
                projects, from small business websites to complex enterprise
                applications. Currently, I am pursuing my studies at Universitas
                Komputer Indonesia (UNIKOM) in Bandung, aiming to enhance my
                skills and knowledge in both front-end and back-end development.
              </p>
              <p>
                My ultimate goal is to become a software engineer who not only
                builds efficient and scalable applications but also focuses on
                creating intuitive and visually appealing user experiences
                (UI/UX). I am constantly learning new technologies, refining my
                design skills, and staying up-to-date with industry trends to
                deliver innovative digital solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
