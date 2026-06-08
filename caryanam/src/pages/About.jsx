

// import { motion } from 'framer-motion'
// import { CloudCog, LayoutDashboard, ShieldCheck, Sparkles } from 'lucide-react'

// const features = [
//   {
//     title: 'Innovation',
//     description:
//       'Product strategy grounded in measurable impact and modern product design.',
//     icon: Sparkles,
//   },
//   {
//     title: 'Reliability',
//     description:
//       'Systems designed for uptime, monitoring, and day-to-day operational confidence.',
//     icon: LayoutDashboard,
//   },
//   {
//     title: 'Security',
//     description:
//       'Architecture, controls, and governance aligned with enterprise compliance needs.',
//     icon: ShieldCheck,
//   },
//   {
//     title: 'Scalability',
//     description:
//       'Cloud-first platforms built to grow with your customers and usage.',
//     icon: CloudCog,
//   },
// ]

// export default function About() {
//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-white via-sky-50 to-blue-50 px-6 py-24">
//       <div className="mx-auto w-full max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="w-full rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 lg:p-12"
//         >
//           <div className="grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
//             <div className="space-y-6">
//               <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                 About Caryanamindia
//               </p>

//               <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//                 Building secure digital platforms for enterprise transformation.
//               </h1>

//               <p className="max-w-2xl text-base leading-8 text-slate-600">
//                 Our team combines cloud engineering, design, and business
//                 consulting to create polished experiences that scale without
//                 sacrificing trust.
//               </p>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                     Why we exist
//                   </p>

//                   <p className="mt-4 text-sm leading-7 text-slate-600">
//                     To deliver enterprise-grade products and services that modern
//                     teams can rely on.
//                   </p>
//                 </div>

//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-6 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                     What we do
//                   </p>

//                   <p className="mt-4 text-sm leading-7 text-slate-600">
//                     Strategy, engineering, cloud operations, and design that work
//                     together for long-term growth.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               {features.map((item, index) => (
//                 <motion.article
//                   key={item.title}
//                   initial={{ opacity: 0, x: 24 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{ duration: 0.55, delay: index * 0.08 }}
//                   className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//                 >
//                   <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-200">
//                     <item.icon className="h-6 w-6" />
//                   </div>

//                   <h2 className="mt-5 text-xl font-semibold text-slate-950">
//                     {item.title}
//                   </h2>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </motion.article>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <div className="mt-16 grid gap-6 lg:grid-cols-3">
//           {[
//             {
//               title: 'Our approach',
//               description:
//                 'We begin with business outcomes, translate them into architecture, and deliver modern software with strong operational discipline.',
//             },
//             {
//               title: 'Design-led delivery',
//               description:
//                 'Every project includes polished interface systems, strong branding, and usability designed for enterprise users.',
//             },
//             {
//               title: 'Operational excellence',
//               description:
//                 'From launch to support, we keep systems stable, observable, and ready to evolve.',
//             },
//           ].map((card, index) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.65, delay: index * 0.1 }}
//               className="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//             >
//               <h3 className="text-xl font-semibold text-slate-950">
//                 {card.title}
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-slate-600">
//                 {card.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// import { motion } from 'framer-motion'
// import {
//   Bot,
//   Cloud,
//   Globe,
//   Rocket,
//   Shield,
//   Smartphone,
// } from 'lucide-react'
// import { NavLink } from 'react-router-dom'

// const services = [
//   {
//     title: 'Web Development',
//     description: 'Custom websites and web applications built with modern technologies',
//     icon: Globe,
//     box: 'bg-blue-50 border-blue-200',
//     color: 'text-blue-500',
//   },
//   {
//     title: 'Mobile Apps',
//     description: 'iOS and Android applications for seamless user experiences',
//     icon: Smartphone,
//     box: 'bg-green-50 border-green-200',
//     color: 'text-green-500',
//   },
//   {
//     title: 'Cloud Solutions',
//     description: 'Scalable cloud infrastructure and migration services',
//     icon: Cloud,
//     box: 'bg-purple-50 border-purple-200',
//     color: 'text-purple-500',
//   },
//   {
//     title: 'AI & ML',
//     description: 'Intelligent solutions powered by artificial intelligence',
//     icon: Bot,
//     box: 'bg-orange-50 border-orange-200',
//     color: 'text-orange-500',
//   },
//   {
//     title: 'Digital Strategy',
//     description: 'Comprehensive digital transformation and growth strategies',
//     icon: Rocket,
//     box: 'bg-red-50 border-red-200',
//     color: 'text-red-500',
//   },
//   {
//     title: 'Enterprise Solutions',
//     description: 'Custom enterprise software for large-scale operations',
//     icon: Shield,
//     box: 'bg-indigo-50 border-indigo-200',
//     color: 'text-indigo-500',
//   },
// ]

// const infoCards = [
//   {
//     title: 'Our Mission',
//     text: 'Deliver reliable, scalable, and secure technology solutions that enable growth and innovation.',
//     img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
//     line: 'bg-blue-500',
//   },
//   {
//     title: 'Our Vision',
//     text: 'Become a global partner of choice for digital transformation across industries.',
//     img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
//     line: 'bg-green-500',
//   },
//   {
//     title: 'Our Values',
//     text: 'Customer-first, transparency, engineering excellence, and long-term partnership.',
//     img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
//     line: 'bg-purple-500',
//   },
// ]

// const stats = [
//   { number: '01+', label: 'Years Experience' },
//   { number: '3+', label: 'Projects Delivered' },
//   { number: '18+', label: 'Experts Onboard' },
//   { number: '10AM to 7PM', label: 'Support' },
// ]

// export default function About() {
//   return (
//     <section className="min-h-screen w-full bg-white px-6 py-8">
//       <div className="mx-auto max-w-6xl">
//         {/* Header */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 22 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
//             About Caryanamindia
//           </h1>

//           <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600">
//             At <span className="font-bold text-orange-500">Caryanamindia</span>,
//             we empower businesses to achieve digital excellence through
//             cutting-edge web, mobile, and cloud solutions. Our team combines
//             innovation, design thinking, and engineering expertise to deliver
//             impactful results.
//           </p>

//           <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500" />
//         </motion.div>

//         {/* Who We Are */}
//         <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
//               'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
//               'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
//               'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
//             ].map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt="Caryanamindia Team"
//                 className="h-44 w-full rounded-xl object-cover shadow-lg"
//               />
//             ))}
//           </div>

//           <div>
//             <h2 className="text-3xl font-extrabold text-black">Who We Are</h2>

//             <p className="mt-6 text-base leading-8 text-slate-600">
//               Since our inception, we have partnered with startups and
//               enterprises alike to build technology that drives measurable
//               outcomes. We believe in creating sustainable solutions through
//               collaboration, creativity, and continuous improvement.
//             </p>

//             <p className="mt-5 text-base leading-8 text-slate-600">
//               Whether it's developing a scalable SaaS product, migrating
//               infrastructure to the cloud, or implementing AI-driven automation,
//               we take pride in helping clients stay ahead of the curve.
//             </p>
//           </div>
//         </div>

//         {/* Our Services */}
//         <div className="mt-20">
//           <h2 className="text-center text-3xl font-extrabold text-black">
//             Our Services
//           </h2>

//           <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((item) => (
//               <motion.div
//                 key={item.title}
//                 whileHover={{ y: -6 }}
//                 className={`rounded-2xl border p-8 shadow-md transition-all duration-300 ${item.box}`}
//               >
//                 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
//                   <item.icon className={`h-9 w-9 ${item.color}`} />
//                 </div>

//                 <h3 className="mt-8 text-xl font-extrabold text-slate-900">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 text-base leading-7 text-slate-600">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Mission Vision Values */}
//         <div className="mt-20 grid gap-8 lg:grid-cols-3">
//           {infoCards.map((card) => (
//             <div
//               key={card.title}
//               className="overflow-hidden rounded-2xl bg-white shadow-xl"
//             >
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-8">
//                 <div className={`h-1 w-12 rounded-full ${card.line}`} />

//                 <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
//                   {card.title}
//                 </h3>

//                 <p className="mt-5 text-lg leading-8 text-slate-600">
//                   {card.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Impact */}
//         <div className="mx-auto mt-20 max-w-5xl rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 px-8 py-12 shadow-xl">
//           <h2 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
//             Our Impact in Numbers
//           </h2>

//           <div className="mt-12 grid gap-8 md:grid-cols-4">
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-2xl border border-orange-200 bg-white p-8 text-center"
//               >
//                 <h3 className="text-5xl font-extrabold text-orange-500">
//                   {item.number}
//                 </h3>

//                 <p className="mt-4 text-base font-semibold text-slate-700">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-8 py-14 text-center shadow-2xl">
//           <h2 className="text-4xl font-extrabold text-white">
//             Ready to Transform Your Business?
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white">
//             Let's discuss how Caryanamindia can help you achieve your digital
//             goals and drive innovation.
//           </p>

//           <NavLink
//             to="/contact"
//             className="mt-9 inline-flex rounded-full bg-white px-12 py-4 text-lg font-bold text-orange-500 shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             Get Started Today
//           </NavLink>
//         </div>
//       </div>

//       {/* Scroll Top */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg transition-all duration-300 hover:bg-orange-600"
//         aria-label="Scroll to top"
//       >
//         ↑
//       </button>
//     </section>
//   )
// }


import { motion } from 'framer-motion'
import {
  Bot,
  Cloud,
  Globe,
  Rocket,
  Shield,
  Smartphone,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    icon: Globe,
    box: 'bg-blue-50 border-blue-200',
    color: 'text-blue-500',
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android applications for seamless user experiences',
    icon: Smartphone,
    box: 'bg-green-50 border-green-200',
    color: 'text-green-500',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    icon: Cloud,
    box: 'bg-purple-50 border-purple-200',
    color: 'text-purple-500',
  },
  {
    title: 'AI & ML',
    description: 'Intelligent solutions powered by artificial intelligence',
    icon: Bot,
    box: 'bg-orange-50 border-orange-200',
    color: 'text-orange-500',
  },
  {
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation and growth strategies',
    icon: Rocket,
    box: 'bg-red-50 border-red-200',
    color: 'text-red-500',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Custom enterprise software for large-scale operations',
    icon: Shield,
    box: 'bg-indigo-50 border-indigo-200',
    color: 'text-indigo-500',
  },
]

const infoCards = [
  {
    title: 'Our Mission',
    text: 'Deliver reliable, scalable, and secure technology solutions that enable growth and innovation.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    line: 'bg-blue-500',
  },
  {
    title: 'Our Vision',
    text: 'Become a global partner of choice for digital transformation across industries.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    line: 'bg-green-500',
  },
  {
    title: 'Our Values',
    text: 'Customer-first, transparency, engineering excellence, and long-term partnership.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    line: 'bg-purple-500',
  },
]

const stats = [
  { number: '01+', label: 'Years Experience' },
  { number: '3+', label: 'Projects Delivered' },
  { number: '18+', label: 'Experts Onboard' },
  { number: '10AM to 7PM', label: 'Support' },
]

export default function About() {
  return (
    <section className="min-h-screen w-full bg-white px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            About Caryanamindia
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600">
            At <span className="font-bold text-orange-500">Caryanamindia</span>,
            we empower businesses to achieve digital excellence through
            cutting-edge web, mobile, and cloud solutions. Our team combines
            innovation, design thinking, and engineering expertise to deliver
            impactful results.
          </p>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500" />
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {[
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
            ].map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt="Caryanamindia Team"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-44 w-full rounded-xl object-cover shadow-lg"
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-black">Who We Are</h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Since our inception, we have partnered with startups and
              enterprises alike to build technology that drives measurable
              outcomes.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether it's developing a scalable SaaS product, migrating
              infrastructure to the cloud, or implementing AI-driven automation,
              we help clients stay ahead of the curve.
            </p>
          </motion.div>
        </div>

        {/* Our Services */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-slate-50 px-6 py-16">
          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="absolute left-8 top-8 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            className="absolute bottom-8 right-8 h-44 w-44 rounded-full bg-purple-200/40 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-500">
              What We Provide
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-black">
              Our Services
            </h2>
          </motion.div>

          <div className="relative z-10 mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 120,
                }}
                className={`group relative overflow-hidden rounded-2xl border p-8 shadow-md transition-all duration-500 hover:shadow-2xl ${item.box}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 transition duration-500 group-hover:opacity-100" />

                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md"
                >
                  <item.icon className={`h-9 w-9 ${item.color}`} />
                </motion.div>

                <h3 className="mt-8 text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />

              <div className="p-8">
                <div className={`h-1 w-12 rounded-full ${card.line}`} />
                <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 px-8 py-12 shadow-xl"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-orange-300/30 blur-3xl"
          />

          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
            className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-purple-300/30 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-center text-4xl font-extrabold text-transparent">
              Our Impact in Numbers
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    type: 'spring',
                    stiffness: 120,
                  }}
                  className="rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:border-orange-400 hover:shadow-[0_20px_45px_rgba(249,115,22,0.25)]"
                >
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      type: 'spring',
                    }}
                    className="text-4xl font-extrabold text-orange-500 md:text-5xl"
                  >
                    {item.number}
                  </motion.h3>

                  <p className="mt-4 text-base font-semibold text-slate-700">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mx-auto mt-20 max-w-4xl rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-8 py-14 text-center shadow-2xl">
          <h2 className="text-4xl font-extrabold text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white">
            Let's discuss how Caryanamindia can help you achieve your digital
            goals and drive innovation.
          </p>

          <NavLink
            to="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-12 py-4 text-lg font-bold text-orange-500 shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </NavLink>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg transition-all duration-300 hover:bg-orange-600"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </section>
  )
}