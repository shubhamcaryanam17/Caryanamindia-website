

// import { motion } from 'framer-motion'
// import {
//   ArrowRight,
//   Cloud,
//   Cpu,
//   Layout,
//   MessageCircle,
//   Monitor,
//   Smartphone,
//   Settings,
//   Globe,
// } from 'lucide-react'

// const services = [
//   {
//     title: 'Web Development',
//     description:
//       'Custom web platforms, SaaS applications, and responsive design systems.',
//     icon: Monitor,
//   },
//   {
//     title: 'Mobile App Development',
//     description:
//       'End-to-end mobile experiences that feel native and polished.',
//     icon: Smartphone,
//   },
//   {
//     title: 'Cloud Solutions',
//     description:
//       'Architecture, migration, and automation for resilient cloud operations.',
//     icon: Cloud,
//   },
//   {
//     title: 'AI & Analytics',
//     description:
//       'Data-driven workflows, machine learning prototypes, and business intelligence.',
//     icon: Cpu,
//   },
//   {
//     title: 'Digital Marketing',
//     description:
//       'SEO, social media growth, lead generation, and digital brand visibility.',
//     icon: Globe,
//   },
//   {
//     title: 'IT Consulting',
//     description:
//       'Technology strategy, platform reviews, and modernization roadmaps.',
//     icon: MessageCircle,
//   },
//   {
//     title: 'UI/UX Design',
//     description:
//       'Delightful interfaces, brand systems, and conversion-focused interactions.',
//     icon: Layout,
//   },
//   {
//     title: 'Managed IT Services',
//     description:
//       'Ongoing support, monitoring, and service management for enterprise teams.',
//     icon: Settings,
//   },
// ]

// export default function Services() {
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
//           <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//             Services
//           </p>

//           <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//             Enterprise IT services for every stage of digital growth.
//           </h1>

//           <p className="max-w-3xl text-base leading-8 text-slate-600">
//             We deliver modern product engineering, cloud migration, managed
//             services, digital marketing, and business solutions with a premium
//             focus on design, performance, and scalability.
//           </p>
//         </motion.div>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//           {services.map((item, index) => (
//             <motion.article
//               key={item.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{ duration: 0.55, delay: index * 0.08 }}
//               whileHover={{ y: -6 }}
//               className="group rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//             >
//               <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-200 transition-all duration-300 group-hover:scale-110">
//                 <item.icon className="h-6 w-6" />
//               </div>

//               <h2 className="mt-6 text-xl font-semibold text-slate-950">
//                 {item.title}
//               </h2>

//               <p className="mt-4 text-sm leading-7 text-slate-600">
//                 {item.description}
//               </p>

//               <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-cyan-600">
//                 Learn more
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const services = [
  {
    icon: '💻',
    title: 'Web & App Development',
    short: 'Custom, scalable web and mobile solutions.',
    description:
      'We build high-performance web apps, portals, and mobile applications tailored to your business goals using modern stacks.',
    features: [
      'React/Next.js, Node.js, Python',
      'iOS/Android cross-platform',
      'API-first architecture',
      'Secure, scalable deployments',
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    short: 'AWS, Azure, and Google Cloud expertise.',
    description:
      'We help businesses migrate, optimize, and manage cloud infrastructure with secure and scalable architecture.',
    features: [
      'Cloud migration',
      'AWS, Azure, Google Cloud',
      'DevOps automation',
      'Backup and monitoring',
    ],
  },
  {
    icon: '🧠',
    title: 'AI & Data Analytics',
    short: 'Insights and automation from your data.',
    description:
      'We turn raw data into smart dashboards, automation workflows, and AI-powered business insights.',
    features: [
      'Business intelligence dashboards',
      'Machine learning prototypes',
      'Data visualization',
      'Automation workflows',
    ],
  },
  // {
  //   icon: '🔒',
  //   title: 'Cybersecurity',
  //   short: 'Protect your business with 24/7 coverage.',
  //   description:
  //     'We secure your systems, applications, and data with modern cybersecurity practices and continuous monitoring.',
  //   features: [
  //     'Security audits',
  //     'Threat monitoring',
  //     'Data protection',
  //     'Risk assessment',
  //   ],
  // },
  {
    icon: '🤝',
    title: 'IT Consulting',
    short: 'Strategy, architecture, and roadmaps.',
    description:
      'We provide expert technology consulting to plan, improve, and scale your digital business systems.',
    features: [
      'Technology strategy',
      'System architecture',
      'Platform modernization',
      'Growth roadmaps',
    ],
  },
]

const workSteps = [
  {
    number: '1',
    title: 'Discovery',
    text: 'We understand goals, users, and constraints.',
  },
  {
    number: '2',
    title: 'Solution Design',
    text: 'Architecture and success metrics aligned to ROI.',
  },
  {
    number: '3',
    title: 'Build & Test',
    text: 'Iterative development with quality gates.',
  },
  {
    number: '4',
    title: 'Deploy',
    text: 'Secure, monitored, and scalable release.',
  },
  {
    number: '5',
    title: 'Support',
    text: '24/7 monitoring and continuous improvements.',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const selected = services[active]

  return (
    <section className="min-h-screen w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-black md:text-5xl">
            Our IT Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From engineering to operations, Caryanam India delivers secure,
            scalable, and ROI-focused technology services.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-orange-500" />
        </motion.div>

        {/* Services */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`flex w-full items-center gap-6 rounded-xl border p-7 text-left transition-all duration-300 ${
                  active === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-slate-200 bg-slate-50 hover:border-orange-300 hover:bg-white'
                }`}
              >
                <span className="text-3xl">{item.icon}</span>

                <span>
                  <span
                    className={`block text-lg font-bold ${
                      active === index ? 'text-orange-600' : 'text-black'
                    }`}
                  >
                    {item.title}
                  </span>

                  <span className="mt-2 block text-base text-slate-600">
                    {item.short}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={selected.title}
            className="min-h-[560px] rounded-2xl border border-slate-200 bg-slate-50 p-9 shadow-md"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-4xl">{selected.icon}</div>

            <h2 className="mt-7 text-2xl font-extrabold text-black">
              {selected.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              {selected.description}
            </p>

            <h3 className="mt-8 text-base font-bold text-orange-600">
              Key Features:
            </h3>

            <ul className="mt-5 space-y-4">
              {selected.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 text-base text-slate-700"
                >
                  <span className="font-bold text-orange-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* How We Work */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-extrabold text-black">
            How We Work
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {workSteps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-black">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[190px] text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-12 text-center shadow-md">
          <h2 className="text-3xl font-extrabold text-black">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-4 text-base text-slate-700">
            Speak to our experts to modernize your systems and accelerate
            growth.
          </p>

          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-9 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105"
          >
            Contact Our Team
          </NavLink>
        </div>
      </div>

      {/* Scroll Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-2xl text-white shadow-lg transition-all duration-300 hover:bg-orange-600"
      >
        ↑
      </button>
    </section>
  )
}