

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, LayoutDashboard } from 'lucide-react'

const features = [
  {
    title: 'Strategic advisory',
    description: 'Align technology with business goals across every engagement.',
    icon: Sparkles,
  },
  {
    title: 'Security-first',
    description: 'Protect data and operations with enterprise-grade cybersecurity.',
    icon: ShieldCheck,
  },
  {
    title: 'Design excellence',
    description: 'Craft intuitive interfaces that feel modern and premium.',
    icon: LayoutDashboard,
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      className="bg-[#F5F7FA] text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_0.95fr] lg:items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">
              About Caryanamindia
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl dark:text-white">
              We build secure digital platforms for teams that need enterprise
              reliability.
            </h2>

            <p className="max-w-xl text-base leading-8 text-navy-600 dark:text-navy-200">
              Our team blends technology consulting, custom engineering, and
              creative design to deliver polished applications, optimized cloud
              infrastructure, and data-driven workflows for businesses of every
              scale.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -6 }}
                    className="rounded-[1.8rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-lg transition-all duration-300 hover:border-navy-500/20 hover:shadow-xl dark:border-white/10 dark:bg-navy-900/70"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 text-navy-700 dark:text-navy-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-navy-900 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-navy-600 dark:text-navy-300">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_40px_120px_rgba(15,23,42,0.55)]">
            <div className="absolute right-0 top-4 hidden h-24 w-24 rounded-full bg-navy-600/10 blur-3xl dark:block" />
            <div className="absolute bottom-10 left-10 hidden h-32 w-32 rounded-full bg-navy-500/10 blur-3xl dark:block" />

            <div className="glass-panel relative z-10 rounded-[1.8rem] border border-slate-200 bg-white/60 p-10 text-navy-900 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-transparent dark:text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">
                Trusted delivery
              </p>

              <h3 className="mt-6 text-3xl font-semibold text-navy-900 dark:text-white">
                Modern IT experiences for growth-focused teams
              </h3>

              <p className="mt-4 text-sm leading-7 text-navy-600 dark:text-navy-200">
                We combine engineering discipline and product thinking to create
                digital systems that are secure, elegant, and easy to operate.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:bg-navy-950/90">
                  <p className="text-sm text-navy-600 dark:text-navy-300">
                    Enterprise support
                  </p>
                  <p className="mt-3 font-semibold text-navy-900 dark:text-white">
                    Dedicated success managers
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:bg-navy-950/90">
                  <p className="text-sm text-navy-600 dark:text-navy-300">
                    Cloud automation
                  </p>
                  <p className="mt-3 font-semibold text-navy-900 dark:text-white">
                    Observability & resilience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}