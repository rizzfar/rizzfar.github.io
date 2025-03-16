import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Server, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-40 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-12 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-44 pt-32 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Sparkles size={16} className="mr-2" />
                Currently Work Freelance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6"
            >
              Hi, Saya{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rizky Al Farid
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              <p className="text-gray-600">
                Frontend Developer yang bersemangat dalam merancang pengalaman
                web yang estetis, responsif, dan intuitif, didukung oleh
                teknologi modern.
              </p>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Layout className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Membangun antarmuka pengguna yang responsif dan intuitif dengan
              framework modern serta praktik terbaik.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
          >
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Server className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-600">
              <p className="text-gray-600">
                Membangun aplikasi server-side yang skalabel dan aman dengan
                arsitektur yang kokoh.
              </p>
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
          >
            <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Code className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Mendesain antarmuka yang intuitif, menarik, dan mudah digunakan
              dengan mengikuti prinsip desain yang baik serta standar industri.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
