


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
//     <section className="min-h-screen w-full bg-white text-[#071225]">
//       <div className="mx-auto max-w-7xl px-6 py-24">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="space-y-6"
//         >
//           <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
//             Gallery
//           </p>

//           <h1 className="text-4xl font-semibold leading-tight text-[#071225] sm:text-5xl">
//             Visual stories from our office, events, and project work.
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-700">
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
//                   ? 'border-[#ff5b00] bg-[#ff5b00] text-white shadow-lg shadow-orange-200'
//                   : 'border-[#071225]/15 bg-white text-[#071225] hover:border-[#ff5b00] hover:text-[#ff5b00]'
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
//               className="group cursor-pointer overflow-hidden rounded-[2rem] border border-[#071225]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#ff5b00] hover:shadow-xl hover:shadow-orange-100"
//               onClick={() => setSelectedItem(item)}
//             >
//               <div className="relative h-64 border-b border-[#071225]/10 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6">
//                 <div className="relative rounded-3xl border border-[#071225]/10 bg-white/90 p-4 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.24em] text-[#ff5b00]">
//                     {item.category}
//                   </p>

//                   <h2 className="mt-4 text-2xl font-semibold text-[#071225]">
//                     {item.title}
//                   </h2>
//                 </div>
//               </div>

//               <div className="space-y-3 bg-white p-6">
//                 <p className="text-sm text-slate-700">{item.subtitle}</p>

//                 <p className="text-xs uppercase tracking-[0.3em] text-[#ff5b00]">
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
//             className="fixed inset-0 z-50 flex items-center justify-center bg-[#071225]/50 px-4 py-8 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="w-full max-w-3xl rounded-[2rem] border border-[#071225]/10 bg-white p-8 shadow-2xl"
//               initial={{ y: 24, scale: 0.98 }}
//               animate={{ y: 0, scale: 1 }}
//               exit={{ y: 24, scale: 0.98 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
//                     {selectedItem.category}
//                   </p>

//                   <h2 className="mt-3 text-3xl font-semibold text-[#071225]">
//                     {selectedItem.title}
//                   </h2>

//                   <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
//                     {selectedItem.subtitle}
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedItem(null)}
//                   className="rounded-full border border-[#ff5b00] bg-white px-4 py-2 text-sm text-[#ff5b00] transition-all duration-300 hover:bg-[#ff5b00] hover:text-white"
//                 >
//                   Close
//                 </button>
//               </div>

//               <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                 <div className="h-48 rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-orange-50 to-orange-100" />
//                 <div className="h-48 rounded-[1.8rem] border border-[#071225]/10 bg-gradient-to-br from-[#071225]/5 to-orange-100" />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }


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
//     <section className="relative min-h-screen w-full overflow-hidden bg-white px-6 py-10 text-[#071225]">
//       <motion.div
//         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
//         className="absolute left-10 top-24 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl"
//       />

//       <motion.div
//         animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
//         transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
//         className="absolute right-10 top-[420px] h-56 w-56 rounded-full bg-purple-200/40 blur-3xl"
//       />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <motion.div
//           className="mx-auto max-w-3xl text-center"
//           initial={{ opacity: 0, y: 22 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-500">
//             Gallery
//           </span>

//           <h1 className="mt-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
//             Visual Stories From Our Work
//           </h1>

//           <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
//             Explore our office moments, events, projects, team culture, and
//             client collaborations through an interactive gallery.
//           </p>

//           <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />
//         </motion.div>

//         <div className="mt-12 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => (
//             <button
//               key={category}
//               type="button"
//               onClick={() => setActiveCategory(category)}
//               className={`rounded-full border px-5 py-2 text-sm font-bold transition-all duration-300 ${
//                 activeCategory === category
//                   ? 'border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-200'
//                   : 'border-slate-200 bg-white text-slate-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-500'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {filteredItems.map((item, index) => (
//             <motion.article
//               key={item.title}
//               initial={{ opacity: 0, y: 35, scale: 0.96 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               whileHover={{ y: -8, scale: 1.01 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.08,
//                 type: 'spring',
//                 stiffness: 120,
//               }}
//               onClick={() => setSelectedItem(item)}
//               className="group relative cursor-pointer overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition-all duration-500 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-100"
//             >
//               <div className="absolute inset-y-0 left-0 w-1 bg-orange-500 opacity-0 transition duration-500 group-hover:opacity-100" />

//               <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 p-6">
//                 <motion.div
//                   whileHover={{ rotate: 2, scale: 1.03 }}
//                   transition={{ type: 'spring', stiffness: 180 }}
//                   className="flex h-full flex-col justify-between rounded-3xl border border-orange-100 bg-white/90 p-6 shadow-sm"
//                 >
//                   <div>
//                     <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-500">
//                       {item.category}
//                     </p>

//                     <h2 className="mt-4 text-2xl font-extrabold text-black">
//                       {item.title}
//                     </h2>
//                   </div>

//                   {/* <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 shadow-lg" /> */}
//                 </motion.div>
//               </div>

//               <div className="space-y-3 bg-white p-6">
//                 <p className="text-sm leading-7 text-slate-600">
//                   {item.subtitle}
//                 </p>

//                 <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
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
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-orange-100 bg-white p-8 shadow-2xl"
//               initial={{ y: 30, scale: 0.96 }}
//               animate={{ y: 0, scale: 1 }}
//               exit={{ y: 30, scale: 0.96 }}
//               transition={{ duration: 0.25 }}
//             >
//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-300/30 blur-3xl" />

//               <div className="relative z-10">
//                 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//                   <div>
//                     <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
//                       {selectedItem.category}
//                     </p>

//                     <h2 className="mt-3 text-3xl font-extrabold text-black">
//                       {selectedItem.title}
//                     </h2>

//                     <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
//                       {selectedItem.subtitle}
//                     </p>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedItem(null)}
//                     className="rounded-full border border-orange-500 bg-white px-5 py-2 text-sm font-bold text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white"
//                   >
//                     Close
//                   </button>
//                 </div>

//                 <div className="mt-8 grid gap-4 sm:grid-cols-2">
//                   <div className="h-48 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-purple-50" />
//                   <div className="h-48 rounded-3xl border border-orange-100 bg-gradient-to-br from-purple-50 via-white to-orange-50" />
//                 </div>

//                 <div className="mt-8 rounded-3xl border border-orange-100 bg-orange-50 p-5 text-sm text-slate-700">
//                   This gallery preview represents Caryanamindia’s modern,
//                   creative, and collaborative work culture.
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }



import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import cricket1 from "../assets/cricket1.jpg";
import cricket2 from "../assets/cricket2.jpg";
import cricket3 from "../assets/cricket3.jpg";

import funfriday1 from "../assets/fun-friday1.jpg";
import funfriday2 from "../assets/fun-friday2.jpg";
import funfriday3 from "../assets/fun-friday3.jpg";

import office1 from "../assets/office1.jpg";
import office2 from "../assets/office2.jpeg";
import office3 from "../assets/office3.jpg";

const categories = ["All", "Office", "Events", "Team"];

const galleryItems = [
  {
    id: 1,
    image: office1,
    title: "Entrance",
    category: "Office",
    subtitle: "Caryanamindia Entrance",
  },
  {
    id: 2,
    image: office2,
    title: "Premises",
    category: "Office",
    subtitle: "Caryanamindia Premises",
  },
  {
    id: 3,
    image: office3,
    title: "Modern Workspace",
    category: "Office",
    subtitle: "Our collaborative office environment",
  },
  {
    id: 4,
    image: cricket1,
    title: "Cricket Tournament",
    category: "Events",
    subtitle: "Team bonding through sports",
  },
  {
    id: 5,
    image: cricket2,
    title: "Championship Match",
    category: "Events",
    subtitle: "Competitive spirit and teamwork",
  },
  {
    id: 6,
    image: cricket3,
    title: "Winning Moments",
    category: "Events",
    subtitle: "Celebrating our achievements",
  },
  {
    id: 7,
    image: funfriday1,
    title: "Fun Friday",
    category: "Team",
    subtitle: "Creating memorable experiences",
  },
  {
    id: 8,
    image: funfriday2,
    title: "Team Activities",
    category: "Team",
    subtitle: "Building stronger connections",
  },
  {
    id: 9,
    image: funfriday3,
    title: "Office Celebration",
    category: "Team",
    subtitle: "Work hard, celebrate harder",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] bg-[#071225] px-8 py-20 text-center text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5b00]/20 via-transparent to-transparent" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-[#ff5b00]">
              Our Moments
            </p>

            <h1 className="mt-5 text-5xl font-bold md:text-7xl">
              Gallery
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Explore life at our company through office culture,
              sports events, celebrations, teamwork, and memorable
              moments.
            </p>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-[#ff5b00] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl"

              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-flex rounded-full bg-[#ff5b00] px-3 py-1 text-xs font-medium text-white">
                      {item.category}
                    </span>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-200">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>


    </section>
  );
}

