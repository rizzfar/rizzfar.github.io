import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Figma, Globe, Cloud, PenTool as Tool, Cpu, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 size={24} />,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5/CSS3", level: 90 }
    ],
    color: "blue"
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Google Cloud", level: 75 },
      { name: "RESTful APIs", level: 90 },
    ],
    color: "blue"
  },
  {
    title: "UI/UX Design",
    icon: <Figma size={24} />,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "User Research", level: 70 },
      { name: "Wireframing", level: 85 },
      { name: "Prototyping", level: 80 }
    ],
    color: "blue"
  },
  {
    title: "Other Skills",
    icon: <Tool size={24} />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Testing", level: 85 },
      { name: "Hackerrank", level: 74 },
      { name: "Problem Solving", level: 90 },
    ],
    color: "blue"
  }
];

const Skills: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in various areas of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`text-${category.color}-500 mb-4 flex items-center space-x-2`}>
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-${category.color}-500 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold">Web Standards</h3>
            </div>
            <div className="text-center">
              <Cloud className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold">Cloud Services</h3>
            </div>
            <div className="text-center">
              <Cpu className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold">System Design</h3>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold">Security</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;