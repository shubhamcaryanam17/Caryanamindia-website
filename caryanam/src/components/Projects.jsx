import { motion } from 'framer-motion'

const projects = [
  { title: 'Cloud Commerce Platform', category: 'Cloud', accent: 'from-navy-700 to-navy-500' },
  { title: 'Insight Analytics Suite', category: 'AI', accent: 'from-navy-700 to-navy-500' },
  { title: 'Secure Operations Hub', category: 'Security', accent: 'from-navy-600 to-navy-500' },
  { title: 'Mobile Marketplace App', category: 'Mobile', accent: 'from-navy-500 to-navy-600' },
]

export default function Projects() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Projects showcase</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
            Real-world digital products built for enterprise impact.
          </h2>
          <p className="mt-6 text-base leading-8 text-navy-600 dark:text-navy-300">
            Every project reflects our commitment to secure deployment, polished UI, and scalable backend architecture.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/90 dark:shadow-[0_32px_100px_rgba(15,23,42,0.35)]"
            >
              <div className="relative aspect-[16/10] border-b border-gray-200 bg-white dark:border-transparent">
                <div className={`absolute inset-0 hidden bg-gradient-to-br opacity-90 transition duration-300 group-hover:opacity-100 dark:block ${project.accent}`} />
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-white border border-gray-200 px-3 py-1 text-xs uppercase tracking-[0.33em] text-navy-800 dark:bg-white/5 dark:text-navy-300">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-navy-900 dark:text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-600 dark:text-navy-300">
                  A premium digital solution built to support modern workflows and enterprise adoption.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
