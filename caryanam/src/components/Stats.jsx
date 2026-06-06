import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects', value: '250+' },
  { label: 'Professionals', value: '100+' },
  { label: 'Satisfaction', value: '98%' },
  { label: 'Global Clients', value: '12+' },
]

export default function Stats() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-950/80 dark:text-white"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-navy-500/20 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_24px_60px_rgba(15,23,42,0.26)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-navy-700 dark:text-navy-300">{item.label}</p>
              <p className="mt-5 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-6 text-navy-600 dark:text-navy-300">Enterprise-grade delivery with white-glove support and ongoing optimization.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
