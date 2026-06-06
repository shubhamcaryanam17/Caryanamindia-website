

// import { useMemo, useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import { CalendarDays, MapPin, Sparkles, Ticket } from 'lucide-react'

// const eventCategories = ['All', 'Conferences', 'Workshops', 'Meetups']

// const events = [
//   {
//     title: 'AI Innovation Summit',
//     type: 'Conferences',
//     date: 'Aug 12, 2026',
//     time: '09:00 AM - 05:00 PM',
//     location: 'Mumbai Conference Center',
//     description:
//       'A deep dive into enterprise AI, automation, and practical innovation programs.',
//     tag: 'Upcoming',
//   },
//   {
//     title: 'Cloud Transformation Workshop',
//     type: 'Workshops',
//     date: 'Sep 8, 2026',
//     time: '10:00 AM - 03:00 PM',
//     location: 'Virtual classroom',
//     description:
//       'Hands-on cloud architecture and migration planning for modern enterprises.',
//     tag: 'Upcoming',
//   },
//   {
//     title: 'Cyber Security Conference',
//     type: 'Conferences',
//     date: 'Oct 21, 2026',
//     time: '09:30 AM - 04:30 PM',
//     location: 'Bangalore Tech Hub',
//     description:
//       'Security best practices, zero trust design, and risk management for enterprise systems.',
//     tag: 'Upcoming',
//   },
//   {
//     title: 'Digital Business Meetup',
//     type: 'Meetups',
//     date: 'Jul 14, 2026',
//     time: '06:00 PM - 08:00 PM',
//     location: 'Mumbai Innovation Loft',
//     description:
//       'Community conversation on digital transformation strategies for modern teams.',
//     tag: 'Past',
//   },
// ]

// const filterBtnBase =
//   'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300'

// export default function Events() {
//   const [activeCategory, setActiveCategory] = useState('All')
//   const [search, setSearch] = useState('')
//   const [selectedEvent, setSelectedEvent] = useState(null)

//   const filteredEvents = useMemo(() => {
//     return events.filter((event) => {
//       const categoryMatch =
//         activeCategory === 'All' || event.type === activeCategory

//       const searchMatch = event.title
//         .toLowerCase()
//         .includes(search.toLowerCase())

//       return categoryMatch && searchMatch
//     })
//   }, [activeCategory, search])

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
//             Events
//           </p>

//           <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//             Upcoming and past experiences for modern teams.
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-600">
//             Discover our signature events, workshops, and summits designed to
//             help organizations accelerate with technology.
//           </p>
//         </motion.div>

//         <div className="mt-10 flex flex-wrap items-center gap-4">
//           <div className="flex flex-wrap gap-3">
//             {eventCategories.map((category) => (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => setActiveCategory(category)}
//                 className={`${filterBtnBase} ${
//                   activeCategory === category
//                     ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200'
//                     : 'border-blue-100 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="ml-auto min-w-[220px] flex-1">
//             <label className="relative block text-sm text-slate-600">
//               <span className="sr-only">Search events</span>

//               <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//                 placeholder="Search events"
//                 className="w-full rounded-full border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
//               />
//             </label>
//           </div>
//         </div>

//         <div className="mt-10 grid gap-6 xl:grid-cols-2">
//           {filteredEvents.map((event, index) => (
//             <motion.article
//               key={event.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{ duration: 0.55, delay: index * 0.08 }}
//               whileHover={{ y: -6 }}
//               className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//             >
//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                     {event.tag}
//                   </p>

//                   <h2 className="mt-4 text-2xl font-semibold text-slate-950">
//                     {event.title}
//                   </h2>
//                 </div>

//                 <div className="rounded-full border border-blue-100 bg-cyan-50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-blue-700">
//                   {event.type}
//                 </div>
//               </div>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2">
//                 <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4 text-sm text-slate-600">
//                   <div className="flex items-center gap-2">
//                     <CalendarDays className="h-4 w-4 text-blue-600" />
//                     <span>{event.date}</span>
//                   </div>

//                   <div className="mt-3 flex items-center gap-2 text-slate-500">
//                     <Ticket className="h-4 w-4 text-blue-600" />
//                     <span>{event.time}</span>
//                   </div>
//                 </div>

//                 <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-4 text-sm text-slate-600">
//                   <div className="flex items-center gap-2">
//                     <MapPin className="h-4 w-4 text-blue-600" />
//                     <span>{event.location}</span>
//                   </div>
//                 </div>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-600">
//                 {event.description}
//               </p>

//               <button
//                 type="button"
//                 onClick={() => setSelectedEvent(event)}
//                 className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-[1.03]"
//               >
//                 View details
//               </button>
//             </motion.article>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedEvent && (
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
//               transition={{ duration: 0.25 }}
//             >
//               <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                     {selectedEvent.type}
//                   </p>

//                   <h2 className="mt-3 text-3xl font-semibold text-slate-950">
//                     {selectedEvent.title}
//                   </h2>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedEvent(null)}
//                   className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-700 transition-colors duration-300 hover:border-blue-300 hover:bg-blue-100"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 text-slate-900">
//                   <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                     When
//                   </p>
//                   <p className="mt-4 text-lg font-semibold">
//                     {selectedEvent.date}
//                   </p>
//                   <p className="mt-2 text-sm text-slate-600">
//                     {selectedEvent.time}
//                   </p>
//                 </div>

//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-6 text-slate-900">
//                   <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                     Where
//                   </p>
//                   <p className="mt-4 text-lg font-semibold">
//                     {selectedEvent.location}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-6 text-sm leading-7 text-slate-600">
//                 {selectedEvent.description}
//               </p>

//               <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-r from-cyan-50 to-sky-50 p-4 text-sm text-slate-700">
//                   <Sparkles className="inline h-4 w-4 text-blue-600" />
//                   <span className="ml-2">
//                     Premium experiences for enterprise teams
//                   </span>
//                 </div>

//                 <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-[1.03]">
//                   Register now
//                 </button>
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
import { CalendarDays, MapPin, Sparkles, Ticket } from 'lucide-react'

const eventCategories = ['All', 'Conferences', 'Workshops', 'Meetups']

const events = [
  {
    title: 'AI Innovation Summit',
    type: 'Conferences',
    date: 'Aug 12, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Mumbai Conference Center',
    description:
      'A deep dive into enterprise AI, automation, and practical innovation programs.',
    tag: 'Upcoming',
  },
  {
    title: 'Cloud Transformation Workshop',
    type: 'Workshops',
    date: 'Sep 8, 2026',
    time: '10:00 AM - 03:00 PM',
    location: 'Virtual classroom',
    description:
      'Hands-on cloud architecture and migration planning for modern enterprises.',
    tag: 'Upcoming',
  },
  {
    title: 'Cyber Security Conference',
    type: 'Conferences',
    date: 'Oct 21, 2026',
    time: '09:30 AM - 04:30 PM',
    location: 'Bangalore Tech Hub',
    description:
      'Security best practices, zero trust design, and risk management for enterprise systems.',
    tag: 'Upcoming',
  },
  {
    title: 'Digital Business Meetup',
    type: 'Meetups',
    date: 'Jul 14, 2026',
    time: '06:00 PM - 08:00 PM',
    location: 'Mumbai Innovation Loft',
    description:
      'Community conversation on digital transformation strategies for modern teams.',
    tag: 'Past',
  },
]

const filterBtnBase =
  'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300'

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const categoryMatch =
        activeCategory === 'All' || event.type === activeCategory

      const searchMatch = event.title
        .toLowerCase()
        .includes(search.toLowerCase())

      return categoryMatch && searchMatch
    })
  }, [activeCategory, search])

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
            Events
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[#071225] sm:text-5xl">
            Upcoming and past experiences for modern teams.
          </h1>

          <p className="max-w-3xl text-base leading-8 text-slate-700">
            Discover our signature events, workshops, and summits designed to
            help organizations accelerate with technology.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap gap-3">
            {eventCategories.map((category) => (
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

          <div className="ml-auto min-w-[220px] flex-1">
            <label className="relative block text-sm text-slate-700">
              <span className="sr-only">Search events</span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search events"
                className="w-full rounded-full border border-[#071225]/15 bg-white px-4 py-3 text-[#071225] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#ff5b00] focus:ring-2 focus:ring-orange-100"
              />
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {filteredEvents.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#071225]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#ff5b00] hover:shadow-xl hover:shadow-orange-100"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
                    {event.tag}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold text-[#071225]">
                    {event.title}
                  </h2>
                </div>

                <div className="rounded-full border border-[#ff5b00]/20 bg-orange-50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#ff5b00]">
                  {event.type}
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#071225]/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-4 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#ff5b00]" />
                    <span>{event.date}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-slate-600">
                    <Ticket className="h-4 w-4 text-[#ff5b00]" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-[#071225]/10 bg-gradient-to-br from-[#071225]/5 via-white to-orange-50 p-4 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#ff5b00]" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-700">
                {event.description}
              </p>

              <button
                type="button"
                onClick={() => setSelectedEvent(event)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-[#e14f00] hover:scale-[1.03]"
              >
                View details
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
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
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
                    {selectedEvent.type}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-[#071225]">
                    {selectedEvent.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="rounded-full border border-[#ff5b00] bg-white px-4 py-2 text-sm text-[#ff5b00] transition-all duration-300 hover:bg-[#ff5b00] hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 text-[#071225]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ff5b00]">
                    When
                  </p>
                  <p className="mt-4 text-lg font-semibold">
                    {selectedEvent.date}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {selectedEvent.time}
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-[#071225]/5 via-white to-orange-50 p-6 text-[#071225]">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#ff5b00]">
                    Where
                  </p>
                  <p className="mt-4 text-lg font-semibold">
                    {selectedEvent.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-700">
                {selectedEvent.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-r from-orange-50 to-white p-4 text-sm text-slate-700">
                  <Sparkles className="inline h-4 w-4 text-[#ff5b00]" />
                  <span className="ml-2">
                    Premium experiences for enterprise teams
                  </span>
                </div>

                <button className="inline-flex items-center justify-center rounded-full bg-[#ff5b00] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-[#e14f00] hover:scale-[1.03]">
                  Register now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}