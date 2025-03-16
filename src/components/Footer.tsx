import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h3>
            <p className="text-gray-300">
              Ready to start a project or just want to chat? Feel free to reach out!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors">
                <a href="/about">Tentang Saya</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="/projects">Projek</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="/skills">Skills</a>
              </li>
              <li className="hover:text-blue-400 transition-colors">
                <a href="/contact">Kontak</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Social Links</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/rizzfar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/rizkyalfaridhafizh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:alfaridrizky69@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm flex items-center justify-center space-x-2"
        >
          <p>Made with</p>
          <Heart size={16} className="text-red-500 animate-pulse" />
          <p>by Rizky Al Farid © {new Date().getFullYear()}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;