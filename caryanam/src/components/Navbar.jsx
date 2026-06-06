// // import { useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { NavLink } from 'react-router-dom'
// // import { ArrowRight, Menu, X } from 'lucide-react'
// // import ThemeToggle from './ThemeToggle.jsx'

// // const navItems = [
// //   { label: 'Home', to: '/' },
// //   { label: 'About', to: '/about' },
// //   { label: 'Services', to: '/services' },
// //   { label: 'Gallery', to: '/gallery' },
// //   { label: 'Events', to: '/events' },
// //   { label: 'Contact', to: '/contact' },
// // ]

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false)

// //   return (
// //     <motion.nav
// //       className="sticky top-0 z-50 border-b border-gray-200 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-navy-900/75"
// //       initial={{ y: -32, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.5, ease: 'easeOut' }}
// //     >
// //       <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
// //         <NavLink to="/" className="text-lg font-semibold uppercase tracking-[0.3em] text-navy-900 transition-colors duration-300 hover:text-navy-700 dark:text-white dark:hover:text-white">
// //           Caryanamindia
// //         </NavLink>

// //         <div className="hidden items-center gap-8 md:flex">
// //           {navItems.map((item) => (
// //             <NavLink
// //               key={item.to}
// //               to={item.to}
// //               end={item.to === '/'}
// //               className={({ isActive }) =>
// //                 `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-navy-700 dark:text-white' : 'text-navy-600 hover:text-navy-900 dark:text-navy-300 dark:hover:text-white'}`
// //               }
// //             >
// //               {item.label}
// //             </NavLink>
// //           ))}
// //         </div>

// //         <div className="hidden items-center gap-3 md:flex">
// //           <ThemeToggle />
// //           <NavLink
// //             to="/contact"
// //             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-navy-600/20 transition duration-300 hover:shadow-navy-600/30"
// //           >
// //             Get Started <ArrowRight className="h-4 w-4" />
// //           </NavLink>
// //         </div>

// //         <button
// //           type="button"
// //           className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-900 transition-colors duration-300 hover:border-navy-500/40 hover:text-navy-700 dark:border-white/10 dark:bg-navy-950/80 dark:text-white dark:hover:text-white md:hidden"
// //           onClick={() => setOpen((value) => !value)}
// //           aria-label="Toggle menu"
// //           aria-expanded={open}
// //         >
// //           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
// //         </button>
// //       </div>

// //       {open && (
// //         <motion.div
// //           className="border-t border-gray-200 bg-white px-6 py-5 transition-colors duration-300 dark:border-white/10 dark:bg-navy-950/95 md:hidden"
// //           initial={{ opacity: 0, y: -12 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -12 }}
// //           transition={{ duration: 0.25 }}
// //         >
// //           <div className="flex flex-col gap-3">
// //             {navItems.map((item) => (
// //               <NavLink
// //                 key={item.to}
// //                 to={item.to}
// //                 end={item.to === '/'}
// //                 onClick={() => setOpen(false)}
// //                 className={({ isActive }) =>
// //                   `rounded-3xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
// //                     isActive
// //                       ? 'bg-white ring-1 ring-inset ring-gray-200 text-navy-900 dark:bg-navy-900 dark:text-white'
// //                       : 'text-navy-600 hover:bg-white hover:text-navy-900 dark:text-navy-200 dark:hover:bg-navy-900/80 dark:hover:text-white'
// //                   }`
// //                 }
// //               >
// //                 {item.label}
// //               </NavLink>
// //             ))}
// //             <div className="flex items-center justify-between gap-3 pt-3">
// //               <ThemeToggle />
// //               <NavLink
// //                 to="/contact"
// //                 className="inline-flex items-center justify-center rounded-full bg-navy-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-600"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 Get Started
// //               </NavLink>
// //             </div>
// //           </div>
// //         </motion.div>
// //       )}
// //     </motion.nav>
// //   )
// // }


// // import { useState } from 'react'
// // import { motion } from 'framer-motion'
// // import { NavLink } from 'react-router-dom'
// // import { ArrowRight, Menu, X } from 'lucide-react'

// // const navItems = [
// //   { label: 'Home', to: '/' },
// //   { label: 'About', to: '/about' },
// //   { label: 'Services', to: '/services' },
// //   { label: 'Gallery', to: '/gallery' },
// //   { label: 'Events', to: '/events' },
// //   { label: 'Contact', to: '/contact' },
// // ]

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false)

// //   return (
// //     <motion.nav
// //       className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90"
// //       initial={{ y: -32, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ duration: 0.5, ease: 'easeOut' }}
// //     >
// //       <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
// //         <NavLink
// //           to="/"
// //           className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-950 transition-colors duration-300 hover:text-blue-700 dark:text-white dark:hover:text-cyan-400"
// //         >
// //           Caryanamindia
// //         </NavLink>

// //         <div className="hidden items-center gap-8 md:flex">
// //           {navItems.map((item) => (
// //             <NavLink
// //               key={item.to}
// //               to={item.to}
// //               end={item.to === '/'}
// //               className={({ isActive }) =>
// //                 `text-sm font-medium transition-colors duration-300 ${
// //                   isActive
// //                     ? 'text-blue-700 dark:text-cyan-400'
// //                     : 'text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-cyan-400'
// //                 }`
// //               }
// //             >
// //               {item.label}
// //             </NavLink>
// //           ))}
// //         </div>

// //         <div className="hidden items-center gap-3 md:flex">
// //           <NavLink
// //             to="/contact"
// //             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105 dark:shadow-cyan-950/40"
// //           >
// //             Get Started <ArrowRight className="h-4 w-4" />
// //           </NavLink>
// //         </div>

// //         <button
// //           type="button"
// //           className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-950 transition-colors duration-300 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-cyan-500 dark:hover:text-cyan-400 md:hidden"
// //           onClick={() => setOpen((value) => !value)}
// //           aria-label="Toggle menu"
// //           aria-expanded={open}
// //         >
// //           {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
// //         </button>
// //       </div>

// //       {open && (
// //         <motion.div
// //           className="border-t border-blue-100 bg-white px-6 py-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden"
// //           initial={{ opacity: 0, y: -12 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: -12 }}
// //           transition={{ duration: 0.25 }}
// //         >
// //           <div className="flex flex-col gap-3">
// //             {navItems.map((item) => (
// //               <NavLink
// //                 key={item.to}
// //                 to={item.to}
// //                 end={item.to === '/'}
// //                 onClick={() => setOpen(false)}
// //                 className={({ isActive }) =>
// //                   `rounded-3xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
// //                     isActive
// //                       ? 'bg-cyan-50 text-blue-700 ring-1 ring-inset ring-blue-100 dark:bg-slate-900 dark:text-cyan-400 dark:ring-slate-700'
// //                       : 'text-slate-600 hover:bg-cyan-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-400'
// //                   }`
// //                 }
// //               >
// //                 {item.label}
// //               </NavLink>
// //             ))}

// //             <div className="pt-3">
// //               <NavLink
// //                 to="/contact"
// //                 className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105 dark:shadow-cyan-950/40"
// //                 onClick={() => setOpen(false)}
// //               >
// //                 Get Started
// //               </NavLink>
// //             </div>
// //           </div>
// //         </motion.div>
// //       )}
// //     </motion.nav>
// //   )
// // }

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { NavLink } from 'react-router-dom'
// import { ArrowRight, Menu, X } from 'lucide-react'
// import logo from '../assets/Caryanamindialogo.jpeg'

// const navItems = [
//   { label: 'Home', to: '/' },
//   { label: 'About', to: '/about' },
//   { label: 'Services', to: '/services' },
//   { label: 'Gallery', to: '/gallery' },
//   { label: 'Events', to: '/events' },
//   { label: 'Contact', to: '/contact' },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <motion.nav
//       className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90"
//       initial={{ y: -32, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//     >
//       <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">

//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
//         >
//           <img
//             src={logo}
//             alt="Caryanam India Logo"
//             className="h-14 w-14 rounded-full object-cover border border-slate-200 dark:border-slate-700"
//           />

//           <div className="hidden sm:block">
//             <h1 className="text-lg font-bold tracking-wider text-slate-900 dark:text-white">
//               CARYANAMINDIA
//             </h1>
// {/* 
//             <p className="text-xs tracking-[0.3em] text-slate-500 dark:text-slate-400">
//               INDIA
//             </p> */}
//           </div>
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end={item.to === '/'}
//               className={({ isActive }) =>
//                 `text-sm font-medium transition-colors duration-300 ${
//                   isActive
//                     ? 'text-blue-700 dark:text-cyan-400'
//                     : 'text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-cyan-400'
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="hidden items-center gap-3 md:flex">
//           <NavLink
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105 dark:shadow-cyan-950/40"
//           >
//             Get Started
//             <ArrowRight className="h-4 w-4" />
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-950 transition-colors duration-300 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-cyan-500 dark:hover:text-cyan-400 md:hidden"
//           onClick={() => setOpen((value) => !value)}
//           aria-label="Toggle menu"
//           aria-expanded={open}
//         >
//           {open ? (
//             <X className="h-5 w-5" />
//           ) : (
//             <Menu className="h-5 w-5" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <motion.div
//           className="border-t border-blue-100 bg-white px-6 py-5 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 md:hidden"
//           initial={{ opacity: 0, y: -12 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -12 }}
//           transition={{ duration: 0.25 }}
//         >
//           <div className="flex flex-col gap-3">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 end={item.to === '/'}
//                 onClick={() => setOpen(false)}
//                 className={({ isActive }) =>
//                   `rounded-3xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
//                     isActive
//                       ? 'bg-cyan-50 text-blue-700 ring-1 ring-inset ring-blue-100 dark:bg-slate-900 dark:text-cyan-400 dark:ring-slate-700'
//                       : 'text-slate-600 hover:bg-cyan-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-400'
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}

//             <div className="pt-3">
//               <NavLink
//                 to="/contact"
//                 className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105 dark:shadow-cyan-950/40"
//                 onClick={() => setOpen(false)}
//               >
//                 Get Started
//               </NavLink>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   )
// }


import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../assets/Caryanamindialogo.jpeg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-[#071225]/10 bg-white/95 backdrop-blur-xl transition-colors duration-300"
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Caryanam India Logo"
            className="h-14 w-14 rounded-full border border-[#071225]/10 object-cover"
          />

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-wider text-[#071225]">
              CARYANAMINDIA
            </h1>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-[#ff5b00]'
                    : 'text-slate-600 hover:text-[#ff5b00]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:scale-105 hover:bg-[#e14f00]"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#071225]/10 bg-white text-[#071225] transition-colors duration-300 hover:border-[#ff5b00] hover:text-[#ff5b00] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="border-t border-[#071225]/10 bg-white px-6 py-5 md:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-orange-50 text-[#ff5b00] ring-1 ring-inset ring-orange-200'
                      : 'text-slate-600 hover:bg-orange-50 hover:text-[#ff5b00]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-3">
              <NavLink
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#ff5b00] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-[#e14f00]"
                onClick={() => setOpen(false)}
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}