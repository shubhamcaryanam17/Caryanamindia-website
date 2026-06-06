import { motion } from 'framer-motion'

const inputClassName =
  'w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-navy-900 outline-none transition-colors duration-300 focus:border-navy-500/70 focus:ring-2 focus:ring-navy-500/20 dark:border-navy-700/80 dark:bg-navy-950/90 dark:text-white'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div className="max-w-xl space-y-6" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Contact</p>
            <h2 className="text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
              Let's shape your next digital initiative together.
            </h2>
            <p className="text-base leading-8 text-navy-600 dark:text-navy-300">
              Share your goals, timeline, and current challenges — we'll recommend the right technology strategy, delivery model, and roadmap.
            </p>
          </motion.div>

          <motion.form
            className="space-y-6 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-navy-600 dark:text-navy-200">
                <span>Name</span>
                <input type="text" placeholder="Your name" className={inputClassName} />
              </label>
              <label className="space-y-2 text-sm text-navy-600 dark:text-navy-200">
                <span>Email</span>
                <input type="email" placeholder="you@example.com" className={inputClassName} />
              </label>
            </div>
            <label className="space-y-2 text-sm text-navy-600 dark:text-navy-200">
              <span>Phone</span>
              <input type="tel" placeholder="+91 01234 56789" className={inputClassName} />
            </label>
            <label className="space-y-2 text-sm text-navy-600 dark:text-navy-200">
              <span>Message</span>
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className={`${inputClassName} rounded-[1.5rem]`}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-navy-600 hover:to-navy-400"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}
