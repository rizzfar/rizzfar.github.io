import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-transparent relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
              Rizky Al Farid Hafizh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-base">
              Frontend Developer & UI/UX Designer
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 italic mt-2">
              "Design with purpose, code with passion."
            </p>
          </div>

          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://github.com/rizzfar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <Github size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="https://www.linkedin.com/in/rizkyalfaridhafizh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <Linkedin size={26} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 10 }}
              href="mailto:alfaridrizky69@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
            >
              <Mail size={26} />
            </motion.a>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rizky Al Farid Hafizh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
