import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-gradient-to-r dark:from-navy-800 dark:via-navy-700 dark:to-navy-900 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="rounded-[2rem] border border-gray-200 bg-white p-10 shadow-sm sm:p-14 dark:border-white/20 dark:bg-white/10 dark:shadow-[0_40px_120px_rgba(61,95,143,0.18)] dark:backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-navy-600 dark:text-white/80">Ready to move faster?</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl dark:text-white">
            Build modern IT systems with a partner who understands enterprise scale.
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
          >
            Book a consultation
          </motion.a>
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-navy-700 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            See services
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}
