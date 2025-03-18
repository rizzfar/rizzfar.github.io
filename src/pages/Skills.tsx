import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Database, Globe, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'User Research', level: 75 },
      { name: 'Prototyping', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'Google Cloud', level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Keahlian Teknis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berikut adalah rangkuman keahlian teknis yang saya miliki dalam
            pengembangan web dan desain antarmuka pengguna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <category.icon
                    size={24}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <h2 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 p-6 rounded-xl text-white">
            <Globe className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-indigo-100">
              Membangun aplikasi web modern dengan fokus pada performa dan aksesibilitas
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 p-6 rounded-xl text-white">
            <Database className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-purple-100">
              Mengelola database dengan efisien untuk aplikasi skala besar
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-600 dark:from-pink-600 dark:to-red-700 p-6 rounded-xl text-white">
            <Settings className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps</h3>
            <p className="text-pink-100">
              Mengoptimalkan proses deployment dan maintenance aplikasi
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}