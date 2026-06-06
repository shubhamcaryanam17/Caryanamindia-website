import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Laptop, ShieldCheck, Layers } from 'lucide-react'

const highlights = [
  { label: 'Trusted by enterprise teams', value: 'Global delivery', icon: Sparkles },
  { label: 'Secure architecture', value: 'Built for scale', icon: ShieldCheck },
  { label: 'Design-led solutions', value: 'Premium experience', icon: Layers },
]

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden bg-white text-navy-900 transition-colors duration-300 dark:bg-navy-950 dark:text-white"
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-[520px] dark:block dark:bg-[radial-gradient(circle_at_top_right,_rgba(61,95,143,0.22),_transparent_36%),radial-gradient(circle_at_20%_20%,_rgba(30,58,95,0.16),_transparent_28%)]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 0.95, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm text-navy-800 shadow-sm dark:shadow-glow transition-colors duration-300 dark:bg-navy-800/60 dark:text-navy-200">
            <Sparkles className="h-4 w-4 text-navy-700 dark:text-navy-300" />
            Enterprise IT services with premium SaaS design
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="space-y-6"
          >
            <h1 className="max-w-xl text-5xl font-semibold leading-tight text-navy-900 sm:text-6xl dark:text-white">
              Empowering Businesses with Cutting-Edge IT Solutions
            </h1>
            <p className="max-w-xl text-base leading-8 text-navy-600 sm:text-lg dark:text-navy-200">
              Caryanamindia blends strategic consulting, secure engineering, and polished digital experiences to help teams scale faster, innovate smarter, and operate with confidence.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-600/20 transition duration-300 hover:shadow-navy-600/35"
            >
              Start your project
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-navy-700 transition-colors duration-300 hover:border-navy-500/40 hover:text-navy-900 dark:border-navy-700/70 dark:bg-navy-900/80 dark:text-navy-300 dark:hover:border-navy-500/60 dark:hover:text-white"
            >
              Explore services
            </motion.a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:shadow-glow transition-colors duration-300 hover:border-navy-500/20 dark:border-navy-800/80 dark:bg-navy-900/70"
                >
                  <div className="flex items-center gap-3 text-navy-700 dark:text-navy-300">
                    <Icon className="h-5 w-5" />
                    <p className="text-sm font-medium text-navy-600 dark:text-navy-200">{item.label}</p>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-navy-900 dark:text-white">{item.value}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="relative grid place-items-center">
          <div className="absolute -right-8 top-10 hidden h-44 w-44 rounded-full bg-navy-600/10 blur-3xl dark:block" />
          <div className="absolute -bottom-10 left-8 hidden h-36 w-36 rounded-full bg-navy-700/5 blur-3xl dark:block" />
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/80 dark:shadow-[0_40px_120px_rgba(15,23,42,0.55)]">
            <div className="absolute inset-x-0 top-0 hidden h-20 bg-gradient-to-b from-navy-700/20 to-transparent dark:block" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-950/95 dark:shadow-[0_20px_80px_rgba(15,23,42,0.4)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-navy-700 dark:text-navy-300">Platform architecture</p>
                    <h2 className="mt-4 text-2xl font-semibold text-navy-900 dark:text-white">Digital ecosystems built for growth</h2>
                  </div>
                  <div className="rounded-3xl bg-white border border-gray-200 p-3 text-navy-700 dark:bg-navy-800/80 dark:text-navy-300">
                    <Laptop className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-navy-600 dark:text-navy-300">
                  Design systems, secure infrastructure, and seamless workflows tailored for enterprise adoption.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel rounded-[1.8rem] border border-gray-200 p-5 shadow-xl transition-colors duration-300 hover:-translate-y-1 dark:border-white/10">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-navy-700 dark:text-navy-300">Innovation</p>
                  <p className="mt-4 text-xl font-semibold text-navy-900 dark:text-white">Future-ready systems</p>
                </div>
                <div className="glass-panel rounded-[1.8rem] border border-gray-200 p-5 shadow-xl transition-colors duration-300 hover:-translate-y-1 dark:border-white/10">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-navy-700 dark:text-navy-300">Performance</p>
                  <p className="mt-4 text-xl font-semibold text-navy-900 dark:text-white">Reliable delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
