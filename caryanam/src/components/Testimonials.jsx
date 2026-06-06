import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya Shah',
    title: 'VP of Product, Delta Systems',
    quote: 'Caryanamindia guided our cloud migration with sharp execution and thoughtful design. Their team felt like an extension of ours.',
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    title: 'CTO, Lumina Labs',
    quote: 'The delivery was organized, secure, and polished. We launched faster than expected with excellent post-launch support.',
    rating: 5,
  },
  {
    name: 'Priya Das',
    title: 'Director of Operations, HexaCorp',
    quote: 'A premium digital experience combined with enterprise-grade infrastructure and transparency throughout the project.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <motion.section
      className="bg-white py-20 text-navy-900 transition-colors duration-300 dark:bg-navy-900 dark:text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mx-auto max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-navy-700 dark:text-navy-300">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-white">
            Trusted by leaders who demand high quality and operational confidence.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-navy-950/90 dark:shadow-[0_24px_60px_rgba(15,23,42,0.28)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 text-navy-700 dark:text-navy-300">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-navy-600 dark:text-navy-300">{item.title}</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1 text-amber-500 dark:text-amber-400">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-navy-600 dark:text-navy-200">"{item.quote}"</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
