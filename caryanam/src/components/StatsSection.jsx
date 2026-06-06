import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Projects delivered', value: 250, suffix: '+' },
  { label: 'Professionals', value: 100, suffix: '+' },
  { label: 'Satisfaction', value: 98, suffix: '%' },
  { label: 'Global clients', value: 40, suffix: '+' },
]

export default function StatsSection() {
  const [counts, setCounts] = useState({ projects: 0, people: 0, satisfaction: 0, clients: 0 })

  useEffect(() => {
    const duration = 1300
    const interval = 45
    const steps = Math.ceil(duration / interval)
    const target = {
      projects: 250,
      people: 100,
      satisfaction: 98,
      clients: 40,
    }

    let current = { ...counts }
    const timer = setInterval(() => {
      current = {
        projects: Math.min(target.projects, current.projects + Math.ceil(target.projects / steps)),
        people: Math.min(target.people, current.people + Math.ceil(target.people / steps)),
        satisfaction: Math.min(target.satisfaction, current.satisfaction + Math.ceil(target.satisfaction / steps)),
        clients: Math.min(target.clients, current.clients + Math.ceil(target.clients / steps)),
      }
      setCounts(current)
      if (
        current.projects === target.projects &&
        current.people === target.people &&
        current.satisfaction === target.satisfaction &&
        current.clients === target.clients
      ) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const values = [counts.projects, counts.people, counts.satisfaction, counts.clients]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_40px_120px_rgba(15,23,42,0.35)]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-[1.8rem] bg-white border border-gray-200 p-6 transition-colors duration-300 dark:bg-navy-950/90"
            >
              <p className="text-3xl font-semibold text-navy-900 dark:text-white">
                {values[index]}
                <span className="text-navy-700 dark:text-navy-400">{item.suffix}</span>
              </p>
              <p className="mt-3 text-sm text-navy-600 dark:text-navy-300">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
