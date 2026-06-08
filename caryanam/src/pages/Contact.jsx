


// import { motion } from 'framer-motion'
// import { MapPin, Phone, Send, Sparkles } from 'lucide-react'

// const inputClassName =
//   'w-full rounded-3xl border border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'

// export default function Contact() {
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
//             Contact
//           </p>

//           <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//             Let's shape your next digital initiative together.
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-600">
//             Share your goals, timeline, and challenges — we'll recommend the
//             right technology strategy and delivery model.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65 }}
//             className="space-y-8 rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
//           >
//             <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6">
//               <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                 Quick contact
//               </p>

//               <h2 className="mt-4 text-3xl font-semibold text-slate-950">
//                 Ready to move faster?
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-slate-600">
//                 Reach out and let's discuss your enterprise needs, timelines,
//                 and growth goals.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm">
//                 <div className="flex items-center gap-3 text-slate-950">
//                   <Phone className="h-5 w-5 text-blue-600" />
//                   <span className="text-sm font-semibold">Phone</span>
//                 </div>

//                 <p className="mt-3 text-sm text-slate-600">
//                   +91 9923224600
//                 </p>
//               </div>

//               <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm">
//                 <div className="flex items-center gap-3 text-slate-950">
//                   <MapPin className="h-5 w-5 text-blue-600" />
//                   <span className="text-sm font-semibold">Office</span>
//                 </div>

//                 <p className="mt-3 text-sm text-slate-600">Kharadi, Pune</p>
//               </div>
//             </div>

//             <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 text-slate-600 shadow-sm">
//               <div className="inline-flex items-center gap-2 text-blue-600">
//                 <Sparkles className="h-5 w-5" />
//                 <span className="text-sm uppercase tracking-[0.24em]">
//                   Map preview
//                 </span>
//               </div>

//               <div className="mt-4 h-60 rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-sky-100" />
//             </div>
//           </motion.div>

//           <motion.form
//             className="space-y-6 rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65 }}
//           >
//             <div className="grid gap-6 sm:grid-cols-2">
//               <label className="space-y-2 text-sm text-slate-600">
//                 <span>Name</span>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   className={inputClassName}
//                 />
//               </label>

//               <label className="space-y-2 text-sm text-slate-600">
//                 <span>Email</span>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   className={inputClassName}
//                 />
//               </label>
//             </div>

//             <label className="space-y-2 text-sm text-slate-600">
//               <span>Phone</span>
//               <input
//                 type="tel"
//                 placeholder="+91 01234 56789"
//                 className={inputClassName}
//               />
//             </label>

//             <label className="space-y-2 text-sm text-slate-600">
//               <span>Company Name</span>
//               <input
//                 type="text"
//                 placeholder="Your company"
//                 className={inputClassName}
//               />
//             </label>

//             <label className="space-y-2 text-sm text-slate-600">
//               <span>Message</span>
//               <textarea
//                 rows="5"
//                 placeholder="Tell us about your project"
//                 className={`${inputClassName} rounded-[1.5rem]`}
//               />
//             </label>

//             <button
//               type="submit"
//               className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-[1.03]"
//             >
//               Send Message
//               <Send className="ml-2 h-4 w-4" />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   )
// }


// import { motion } from 'framer-motion'

// const inputClassName =
//   'w-full rounded-md border border-black bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'

// export default function Contact() {
//   return (
//     <section className="min-h-screen bg-[#f5f6f8] pt-24 pb-20">
//       <div className="mx-auto max-w-6xl px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 text-center text-5xl font-extrabold text-[#0f1b2d]"
//         >
//           Contact Us
//         </motion.h1>

//         <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h2 className="text-4xl font-extrabold leading-tight text-[#0f1b2d]">
//               We would love to{' '}
//               <span className="text-[#ff5b00]">connect</span>
//               <br />
//               with you!
//             </h2>

//             <p className="mt-8 max-w-xl text-base leading-7 text-slate-700">
//               Please fill out the form or email us directly at
//               <br />
//               <a
//                 href="mailto:info@caryanamindia.com"
//                 className="font-semibold text-[#ff5b00]"
//               >
//                 info@caryanamindia.com
//               </a>
//             </p>

//             <div className="mt-8 space-y-5 text-base text-slate-700">
//               {/* <p>
//                 📍 <span className="font-bold text-[#0f1b2d]">Address:</span>
//                 <br />
//                 Tower 1, World Trade Center (WTC), Kharadi, Pune, Maharashtra
//                 411014
//               </p> */}

//               <p>
//   📍 <span className="font-bold text-[#0f1b2d]">Address:</span>
//   <br />
//   Sprint Rushubh BizzBay,
//   Sr No. 13, 1A, Mundhwa - Kharadi Rd,
//   Thite Nagar, Kharadi,
//   Pune, Maharashtra 411014
// </p>

//               <p>
//                 📞 <span className="font-bold text-[#0f1b2d]">Phone:</span>{' '}
//                 <a href="tel:+919561117241" className="text-[#ff5b00]">
//                   +91-9561117241
//                 </a>
//               </p>

//               <p>
//                 📧 <span className="font-bold text-[#0f1b2d]">Email:</span>{' '}
//                 <a
//                   href="mailto:info@caryanamindia.com"
//                   className="text-[#ff5b00]"
//                 >
//                   info@caryanamindia.com
//                 </a>
//               </p>

//               <p>
//                 🔗 <span className="font-bold text-[#0f1b2d]">LinkedIn:</span>{' '}
//                 <span className="font-bold text-blue-600">in</span>{' '}
//                 <a href="#" className="text-[#ff5b00]">
//                   Caryanamindia India Pvt. Ltd.
//                 </a>
//               </p>
//             </div>

//             {/* <div className="mt-8 h-[360px] overflow-hidden rounded-sm shadow-md">
//               <iframe
//                 title="Caryanamindia Location"
//                 src="https://www.google.com/maps?q=World%20Trade%20Center%20Kharadi%20Pune&output=embed"
//                 width="100%"
//                 height="100%"
//                 loading="lazy"
//                 className="border-0"
//               />
//             </div> */}

//               <div className="mt-8 h-[360px] overflow-hidden rounded-sm shadow-md">
//   <iframe
//     title="Sprint Rushubh BizzBay"
//     src="https://maps.google.com/maps?q=Sprint%20Rushubh%20BizzBay%20Kharadi%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
//     width="100%"
//     height="100%"
//     loading="lazy"
//     className="border-0"
//   />
// </div>

//           </motion.div>

//           <motion.form
//             initial={{ opacity: 0, x: 25 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="rounded-2xl bg-white p-8 shadow-2xl shadow-gray-300/60"
//           >
//             <label className="mb-6 block text-sm font-semibold text-slate-700">
//               Name
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className={`${inputClassName} mt-1`}
//               />
//             </label>

//             <label className="mb-6 block text-sm font-semibold text-slate-700">
//               Email
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className={`${inputClassName} mt-1`}
//               />
//             </label>

//             <label className="mb-7 block text-sm font-semibold text-slate-700">
//               Message
//               <textarea
//                 rows="6"
//                 placeholder="Your Message"
//                 className={`${inputClassName} mt-1 resize-y`}
//               />
//             </label>

//             <button
//               type="submit"
//               className="w-full rounded-md bg-[#ff5b00] px-6 py-4 font-bold text-white transition hover:bg-[#e85200]"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'framer-motion'

const inputClassName =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 transition-all duration-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100'

export default function Contact() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f6f8] pt-24 pb-20">
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute left-10 top-24 h-48 w-48 rounded-full bg-orange-200/50 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-purple-200/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-center text-5xl font-extrabold text-transparent"
        >
          Contact Us
        </motion.h1>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-[#0f1b2d]">
              We would love to{' '}
              <span className="text-[#ff5b00]">connect</span>
              <br />
              with you!
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-slate-700">
              Please fill out the form or email us directly at
              <br />
              <a
                href="mailto:info@caryanamindia.com"
                className="font-semibold text-[#ff5b00]"
              >
                info@caryanamindia.com
              </a>
            </p>

            <div className="mt-8 space-y-5 text-base text-slate-700">
              {[
                {
                  icon: '📍',
                  label: 'Address:',
                  value:
                    'Sprint Rushubh BizzBay, Sr No. 13, 1A, Mundhwa - Kharadi Rd, Thite Nagar, Kharadi, Pune, Maharashtra 411014',
                },
                {
                  icon: '📞',
                  label: 'Phone:',
                  value: '+91 7755994123',
                  link: 'tel:+917755994123',
                },
                {
                  icon: '📧',
                  label: 'Email:',
                  value: 'info@caryanamindia.com',
                  link: 'mailto:info@caryanamindia.com',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-lg"
                >
                  <p>
                    <span className="mr-2">{item.icon}</span>
                    <span className="font-bold text-[#0f1b2d]">
                      {item.label}
                    </span>{' '}
                    {item.link ? (
                      <a href={item.link} className="text-[#ff5b00]">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-300 hover:shadow-lg"
              >
                <p>
                  🔗 <span className="font-bold text-[#0f1b2d]">LinkedIn:</span>{' '}
                  <span className="font-bold text-blue-600">in</span>{' '}
                  <a href="#" className="text-[#ff5b00]">
                    Caryanamindia India Pvt. Ltd.
                  </a>
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 h-[360px] overflow-hidden rounded-2xl shadow-xl"
            >
              <iframe
                title="Sprint Rushubh BizzBay"
                src="https://maps.google.com/maps?q=Sprint%20Rushubh%20BizzBay%20Kharadi%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-orange-100 bg-white p-8 shadow-2xl shadow-gray-300/60"
          >
            <label className="mb-6 block text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                placeholder="Your Name"
                className={`${inputClassName} mt-2`}
              />
            </label>

            <label className="mb-6 block text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                placeholder="Your Email"
                className={`${inputClassName} mt-2`}
              />
            </label>

            <label className="mb-7 block text-sm font-semibold text-slate-700">
              Message
              <textarea
                rows="6"
                placeholder="Your Message"
                className={`${inputClassName} mt-2 resize-y`}
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}