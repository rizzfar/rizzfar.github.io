import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <ParticleBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4 font-display">
              👋 Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-display">
              Rizky Al Farid Hafizh
            </h1>
            <h2 className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400 mb-8 font-display">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
              Crafting beautiful digital experiences through clean code and
              intuitive design. Specializing in creating responsive,
              user-friendly web applications that make an impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 dark:border-indigo-400 text-lg font-medium rounded-full text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>


            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-800"
                  src="https://upload.wikimedia.org/wikipedia/id/b/b8/Logo_Universitas_Komputer_Indonesia.png"
                  alt="Client"
                />
                <img
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-800"
                  src="https://landing-page-dicoding.vercel.app/img/circle-g.jpg"
                  alt="Client"
                />
                <img
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-800"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXsiWxLc3e02viaq-eMqc3b3_mG3Dw5SmcA&s"
                  alt="Client"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Growing through real-world practice
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  15+ Projects & Experiments Completed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src="public/image/ghibli.png"
                  alt="Profile"
                  className="w-[500px] h-[500px] rounded-3xl shadow-2xl object-cover object-top"
                />

              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-display">
              Continuous
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Learning & Improvement
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-display">
              15+ Proyek
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              UI Concept & Side Project
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-display">
              Fast
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              Adaptation & Problem Solving
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-display">
              Passionate
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              UI/UX & Frontend Development
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
