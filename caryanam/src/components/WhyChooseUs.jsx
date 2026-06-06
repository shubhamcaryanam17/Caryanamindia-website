import { motion } from 'framer-motion'
import { ShieldCheck, Clock3, TrendingUp, Sparkles, Globe2, Layers } from 'lucide-react'

const reasons = [
  { title: 'Enterprise-grade security', description: 'Secure operations with industry-standard governance and monitoring.', icon: ShieldCheck },
  { title: 'Fast delivery', description: 'Accelerated launch plans without compromising quality.', icon: Clock3 },
  { title: 'Data-driven insights', description: 'Analytics that turn user feedback into product momentum.', icon: TrendingUp },
  { title: 'Design systems', description: 'Consistent experiences crafted for premium brands.', icon: Sparkles },
  { title: 'Global reach', description: 'Solutions designed for international teams and audiences.', icon: Globe2 },
  { title: 'Built for scale', description: 'Infrastructure, workflows, and support that grow with you.', icon: Layers },
]

export default function WhyChooseUs() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-white"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Why choose us</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
            The high-performance partner for enterprise IT transformation.
          </h2>
          <p className="mt-6 text-base leading-8 text-navy-600 dark:text-navy-300">
            We combine technical expertise, security-first engineering, and polished delivery to help businesses move faster with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.8rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 hover:border-navy-500/20 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_20px_80px_rgba(15,23,42,0.25)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-gray-200 bg-white text-navy-700 transition group-hover:border-navy-700 dark:border-transparent dark:bg-navy-600/10 dark:group-hover:bg-navy-500/15 dark:text-navy-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-navy-600 dark:text-navy-300">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
