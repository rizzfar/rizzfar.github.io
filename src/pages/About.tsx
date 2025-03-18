import { motion } from 'framer-motion';
import { timelineItems } from '../data/content';


export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tentang Saya
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Seorang <b>Frontend Developer</b> yang bersemangat dengan fokus pada menciptakan
            pengalaman pengguna yang luar biasa melalui desain yang bersih dan kode yang efisien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Profil
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Saya adalah seorang Frontend Developer dan UI/UX Designer dengan pengalaman
              dalam mengembangkan aplikasi web modern. Saya memiliki passion dalam
              menciptakan antarmuka yang intuitif dan responsif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Keahlian
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Frontend Development (React, Next.js)</li>
              <li>• UI/UX Design</li>
              <li>• Responsive Web Design</li>
              <li>• Modern JavaScript (ES6+)</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Pendidikan & Pengalaman
          </h2>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative flex items-start"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                  <item.icon size={24} />
                </div>
                <div className="ml-6">
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}