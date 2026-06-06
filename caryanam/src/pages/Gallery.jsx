


// import { useMemo, useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// const categories = ['All', 'Office', 'Events', 'Projects', 'Team', 'Clients']

// const galleryItems = [
//   { title: 'Boardroom launch', category: 'Office', subtitle: 'Corporate planning' },
//   { title: 'Team studio', category: 'Team', subtitle: 'Design collaboration' },
//   { title: 'Product showcase', category: 'Projects', subtitle: 'High-impact delivery' },
//   { title: 'Cloud kickoff', category: 'Events', subtitle: 'Customer workshop' },
//   { title: 'Client review', category: 'Clients', subtitle: 'Trusted partnerships' },
//   { title: 'Executive offsite', category: 'Office', subtitle: 'Strategy session' },
//   { title: 'Launch party', category: 'Events', subtitle: 'Product announcement' },
//   { title: 'Sprint planning', category: 'Team', subtitle: 'Agile rituals' },
// ]

// const filterBtnBase =
//   'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300'

// export default function Gallery() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [selectedItem, setSelectedItem] = useState(null)

//   const filteredItems = useMemo(
//     () =>
//       activeCategory === 'All'
//         ? galleryItems
//         : galleryItems.filter((item) => item.category === activeCategory),
//     [activeCategory],
//   )

//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-white via-sky-50 to-blue-50">
//       <div className="mx-auto max-w-7xl px-6 py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6"
//         >
//           <p className="text-sm uppercase tracking-[0.3em] text-blue-700">
//             Gallery
//           </p>

//           <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//             Visual stories from our office, events, and project work.
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-600">
//             Explore our gallery with dynamic filters, hover interactions,
//             and immersive previews.
//           </p>
//         </motion.div>

//         <div className="mt-10 flex flex-wrap gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               onClick={() => setActiveCategory(category)}
//               className={`${filterBtnBase} ${
//                 activeCategory === category
//                   ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200'
//                   : 'border-blue-100 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {filteredItems.map((item) => (
//             <motion.article
//               key={item.title}
//               whileHover={{ y: -8 }}
//               className="group cursor-pointer overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//               onClick={() => setSelectedItem(item)}
//             >
//               <div className="relative h-64 border-b border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-100 p-6">
//                 <div className="relative rounded-3xl border border-blue-100 bg-white/90 p-4 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                     {item.category}
//                   </p>

//                   <h2 className="mt-4 text-2xl font-semibold text-slate-950">
//                     {item.title}
//                   </h2>
//                 </div>
//               </div>

//               <div className="space-y-3 bg-white p-6">
//                 <p className="text-sm text-slate-600">{item.subtitle}</p>

//                 <p className="text-xs uppercase tracking-[0.3em] text-blue-600">
//                   Click to preview
//                 </p>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedItem && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="w-full max-w-3xl rounded-[2rem] border border-blue-100 bg-white p-8 shadow-2xl"
//               initial={{ y: 24, scale: 0.98 }}
//               animate={{ y: 0, scale: 1 }}
//               exit={{ y: 24, scale: 0.98 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                     {selectedItem.category}
//                   </p>

//                   <h2 className="mt-3 text-3xl font-semibold text-slate-950">
//                     {selectedItem.title}
//                   </h2>

//                   <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
//                     {selectedItem.subtitle}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedItem(null)}
//                   className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-100"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                 <div className="h-48 rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 to-blue-100" />
//                 <div className="h-48 rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-cyan-50 to-sky-100" />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }


import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const categories = ['All', 'Office', 'Events', 'Projects', 'Team', 'Clients']

const galleryItems = [
  { title: 'Boardroom launch', category: 'Office', subtitle: 'Corporate planning' },
  { title: 'Team studio', category: 'Team', subtitle: 'Design collaboration' },
  { title: 'Product showcase', category: 'Projects', subtitle: 'High-impact delivery' },
  { title: 'Cloud kickoff', category: 'Events', subtitle: 'Customer workshop' },
  { title: 'Client review', category: 'Clients', subtitle: 'Trusted partnerships' },
  { title: 'Executive offsite', category: 'Office', subtitle: 'Strategy session' },
  { title: 'Launch party', category: 'Events', subtitle: 'Product announcement' },
  { title: 'Sprint planning', category: 'Team', subtitle: 'Agile rituals' },
]

const filterBtnBase =
  'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section className="min-h-screen w-full bg-white text-[#071225]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
            Gallery
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#071225] sm:text-5xl">
            Visual stories from our office, events, and project work.
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-700">
            Explore our gallery with dynamic filters, hover interactions,
            and immersive previews.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`${filterBtnBase} ${
                activeCategory === category
                  ? 'border-[#ff5b00] bg-[#ff5b00] text-white shadow-lg shadow-orange-200'
                  : 'border-[#071225]/15 bg-white text-[#071225] hover:border-[#ff5b00] hover:text-[#ff5b00]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-[2rem] border border-[#071225]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#ff5b00] hover:shadow-xl hover:shadow-orange-100"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 border-b border-[#071225]/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6">
                <div className="relative rounded-3xl border border-[#071225]/10 bg-white/90 p-4 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ff5b00]">
                    {item.category}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-[#071225]">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-3 bg-white p-6">
                <p className="text-sm text-slate-700">{item.subtitle}</p>

                <p className="text-xs uppercase tracking-[0.3em] text-[#ff5b00]">
                  Click to preview
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#071225]/50 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-3xl rounded-[2rem] border border-[#071225]/10 bg-white p-8 shadow-2xl"
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
                    {selectedItem.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-[#071225]">
                    {selectedItem.title}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
                    {selectedItem.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full border border-[#ff5b00] bg-white px-4 py-2 text-sm text-[#ff5b00] transition-all duration-300 hover:bg-[#ff5b00] hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="h-48 rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-orange-50 to-orange-100" />
                <div className="h-48 rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-[#071225]/5 to-orange-100" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}