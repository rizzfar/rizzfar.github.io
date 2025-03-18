import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { certificates } from '../data/content';

export default function Certificates() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sertifikat
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kumpulan sertifikat dan pencapaian yang membuktikan dedikasi saya
            dalam pengembangan diri dan profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="relative rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-indigo-200 mb-1">{certificate.issuer}</p>
                <div className="flex items-center justify-center text-gray-200 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{certificate.date}</span>
                </div>
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <ExternalLink className="w-5 h-5 text-gray-900 dark:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-indigo-600 dark:bg-indigo-700 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Terus Belajar & Berkembang
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Saya berkomitmen untuk terus mengembangkan diri dan mengikuti
            perkembangan teknologi terbaru dalam industri pengembangan web.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
