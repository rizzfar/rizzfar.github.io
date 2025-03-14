import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Anagram Search",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    image: "./anagram.png",
    technologies: ["Webpack", "SASS", "WebComponents"],
    github: "https://github.com/rizzfar/anagram",
    live: "rizzfar.github.io/anagram/"
  },
  {
    title: "Task Management App",
    description: "A beautiful and intuitive task management application",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
    technologies: ["React", "TypeScript", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with beautiful visualizations",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    technologies: ["React", "D3.js", "Weather API"],
    github: "#",
    live: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 space-x-4">
                    <a href={project.github} className="text-white hover:text-blue-400">
                      <Github size={24} />
                    </a>
                    <a href={project.live} className="text-white hover:text-blue-400">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;