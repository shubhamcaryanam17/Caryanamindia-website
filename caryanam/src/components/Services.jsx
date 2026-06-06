import { motion } from 'framer-motion'
import {
  Monitor,
  Smartphone,
  Cloud,
  Cpu,
  Shield,
  MessageCircle,
  Layout,
  Settings,
} from 'lucide-react'

const services = [
  { title: 'Web Development', description: 'Full-stack products, responsive platforms, and modern web apps.', icon: Monitor },
  { title: 'Mobile App Development', description: 'Native-like mobile experiences for iOS and Android.', icon: Smartphone },
  { title: 'Cloud Solutions', description: 'Scalable cloud infrastructure, automation, and migration.', icon: Cloud },
  { title: 'AI & Analytics', description: 'Data intelligence, predictive insights, and custom ML pipelines.', icon: Cpu },
  { title: 'Cybersecurity', description: 'Protection, monitoring, and compliance for critical systems.', icon: Shield },
  { title: 'IT Consulting', description: 'Strategy, architecture reviews, and transformation roadmaps.', icon: MessageCircle },
  { title: 'UI/UX Design', description: 'Delightful interfaces that reinforce brand confidence.', icon: Layout },
  { title: 'Managed Services', description: 'Ongoing support, operations, and platform optimization.', icon: Settings },
]

export default function Services() {
  return (
    <motion.section
      id="services"
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:from-navy-950 dark:via-navy-950/95 dark:to-navy-900 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Our services</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
            End-to-end IT solutions for every stage of digital transformation.
          </h2>
          <p className="mt-6 text-base leading-8 text-navy-600 dark:text-navy-300">
            From product engineering to cloud governance, we deliver enterprise-ready solutions with modern operational excellence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-[2rem] border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-navy-500/20 dark:border-white/10 dark:bg-navy-900/85"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-gray-200 bg-white text-navy-700 transition group-hover:border-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:group-hover:bg-navy-500/15 dark:text-navy-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-600 dark:text-navy-300">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
