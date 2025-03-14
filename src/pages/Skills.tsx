import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Palette, Database, Terminal, Github } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 size={24} />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
    color: "blue"
  },
  {
    title: "Backend Development",
    icon: <Server size={24} />,
    skills: ["Node.js", "Express", "PostgreSQL", "RESTful APIs", "GraphQL"],
    color: "green"
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={24} />,
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    color: "purple"
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Database Design"],
    color: "yellow"
  },
  {
    title: "DevOps",
    icon: <Terminal size={24} />,
    skills: ["Docker", "CI/CD", "AWS", "Linux", "Nginx"],
    color: "red"
  },
  {
    title: "Version Control",
    icon: <Github size={24} />,
    skills: ["Git", "GitHub", "GitLab", "Branching Strategies", "Code Review"],
    color: "indigo"
  }
];

const Skills: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`text-${category.color}-500 mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;