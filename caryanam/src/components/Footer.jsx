

// import { motion } from 'framer-motion'
// import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

// const links = [
//   { label: 'Home', to: '/' },
//   { label: 'About', to: '/about' },
//   { label: 'Services', to: '/services' },
//   { label: 'Gallery', to: '/gallery' },
//   { label: 'Events', to: '/events' },
//   { label: 'Contact', to: '/contact' },
// ]

// export default function Footer() {
//   return (
//     <motion.footer
//       className="border-t border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-300"
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1.4fr]">
//         <div className="max-w-xl space-y-5">
//           <div>
//             <p className="text-xl font-semibold uppercase tracking-[0.22em] text-slate-950 dark:text-white">
//               Caryanamindia
//             </p>

//             <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-300">
//               Premium enterprise IT services, secure cloud delivery, and modern
//               digital experiences designed for ambitious businesses.
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <a
//               href="#"
//               aria-label="Twitter"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 dark:hover:border-cyan-500"
//             >
//               <Twitter className="h-5 w-5" />
//             </a>

//             <a
//               href="#"
//               aria-label="LinkedIn"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 dark:hover:border-cyan-500"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>

//             <a
//               href="#"
//               aria-label="Facebook"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 dark:hover:border-cyan-500"
//             >
//               <Facebook className="h-5 w-5" />
//             </a>

//             <a
//               href="#"
//               aria-label="Instagram"
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-400 dark:hover:border-cyan-500"
//             >
//               <Instagram className="h-5 w-5" />
//             </a>
//           </div>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-3">
//           <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
//             <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-400">
//               Quick Links
//             </p>

//             <ul className="mt-6 space-y-3 text-sm">
//               {links.map((item) => (
//                 <li key={item.label}>
//                   <a
//                     href={item.to}
//                     className="text-slate-600 transition-colors duration-300 hover:text-blue-700 dark:text-slate-300 dark:hover:text-cyan-400"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
//             <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-400">
//               Contact
//             </p>

//             <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
//               <li>@caryanamindia.com</li>
//               <li>+91 9923224600</li>
//               <li>Pune, India</li>
//             </ul>
//           </div>

//           <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
//             <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-cyan-400">
//               Services
//             </p>

//             <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
//               <li>Web Development</li>
//               <li>Cloud Solutions</li>
//               <li>AI & Analytics</li>
//               <li>IT Consulting</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-blue-100 bg-white/70 py-6 text-center text-sm text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
//         © 2026 Caryanamindia. Crafted for modern enterprise growth.
//       </div>
//     </motion.footer>
//   )
// }



import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
 
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 bg-[#071225] text-slate-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1.4fr]">
        <div className="max-w-xl space-y-5">
          <div>
            <p className="text-xl font-semibold uppercase tracking-[0.22em] text-white">
              Caryanamindia
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Premium enterprise IT services, secure cloud delivery, and modern
              digital experiences designed for ambitious businesses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ff5b00] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5b00] hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a> */}
            <a
  href="https://in.linkedin.com/company/caryanamindia-pvt-ltd"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ff5b00] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5b00] hover:bg-white/10"
>
  <Linkedin className="h-5 w-5" />
</a>

            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ff5b00] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5b00] hover:bg-white/10"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ff5b00] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff5b00] hover:bg-white/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
              Quick Links
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {links.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.to}
                    className="text-slate-300 transition-colors duration-300 hover:text-[#ff5b00]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
              Contact
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>info@caryanamindia.com</li>
              <li>+91 7755994123 </li>
              <li>Pune, India</li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff5b00]">
              Services
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>Web Development</li>
              <li>Cloud Solutions</li>
              <li>AI & Analytics</li>
              <li>IT Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#06101f] py-6 text-center text-sm text-slate-400">
        © 2026 Caryanamindia. Crafted for modern enterprise growth.
      </div>
    </motion.footer>
  )
}