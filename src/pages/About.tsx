import React from "react";
import { motion } from "framer-motion";
import { Book, Briefcase, GraduationCap } from "lucide-react";

const About: React.FC = () => {
  const timeline = [
    {
      year: "2023-2024",
      title: "Frontend Developer (Remote)",
      company: "Bandung Coders Community",
      icon: <Briefcase className="text-purple-500" size={24} />,
    },
    {
      year: "2023-2027",
      title: "Computer Science Student",
      company: "Universitas Komputer Indonesia (UNIKOM)",
      icon: <GraduationCap className="text-green-500" size={24} />,
    },
    {
      year: "2020",
      title: "First Line of Code",
      company: "Self-taught Journey",
      icon: <Book className="text-red-500" size={24} />,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
              className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
            <div className="relative">
              <img
                src="./public/photo.jpeg"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h1
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Tentang Saya
              </motion.h1>
              <motion.div
                className="prose prose-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>
                  Halo! Aku seorang Frontend Developer dengan passion
                  merancang pengalaman web yang keren dan responsif. Saat ini, saya sedang menempuh pendidikan di Universitas Komputer Indonesia (UNIKOM) Bandung, di mana saya
                  mendalami dunia pengembangan web modern yang terus berkembang.
                </p>
                <p>
                  Perjalanan saya dalam pengembangan web dimulai dari rasa ingin
                  tahu yang mendalam tentang bagaimana teknologi dapat
                  meningkatkan interaksi digital. Selama bertahun-tahun, saya
                  telah mengerjakan berbagai project, mulai dari merancang desain
                  website hingga mengembangkan aplikasi web kompleks
                  yang memberikan pengalaman pengguna yang mulus.
                </p>
              </motion.div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                My Journey
              </h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-semibold">
                        {item.year}
                      </div>
                      <div className="text-lg font-medium text-gray-900">
                        {item.title}
                      </div>
                      <div className="text-gray-600">{item.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
