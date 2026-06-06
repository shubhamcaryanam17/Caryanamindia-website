import { motion } from 'framer-motion'

const steps = [
  { title: 'Discovery', description: 'Understand business goals, users, and technical landscape.' },
  { title: 'Planning', description: 'Define roadmap, architecture, and delivery milestones.' },
  { title: 'Development', description: 'Build robust systems with clean code and secure infrastructure.' },
  { title: 'Launch', description: 'Deploy with confidence and monitor performance from day one.' },
]

export default function Process() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-900 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Working process</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
            A thoughtful process for reliable digital transformation.
          </h2>
          <p className="mt-6 text-base leading-8 text-navy-600 dark:text-navy-300">
            We move through discovery, planning, development, and launch with clarity so stakeholders stay aligned and delivery stays predictable.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-navy-500/20 dark:border-white/10 dark:bg-navy-950/80 dark:shadow-[0_24px_60px_rgba(15,23,42,0.25)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white border border-gray-200 text-xl font-semibold text-navy-700 transition-colors duration-300 dark:bg-navy-900 dark:text-navy-300">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy-900 dark:text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-navy-600 dark:text-navy-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
