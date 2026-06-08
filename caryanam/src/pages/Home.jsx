

// import { motion } from 'framer-motion'
// import {
//   ArrowRight,
//   Cloud,
//   Cpu,
//   Layers,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   TrendingUp,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import StatsSection from '../components/StatsSection.jsx'

// const features = [
//   {
//     title: 'Innovation',
//     description: 'Future-ready systems that adapt with your business.',
//     icon: Sparkles,
//   },
//   {
//     title: 'Reliability',
//     description: 'Secure delivery and resilient infrastructure.',
//     icon: ShieldCheck,
//   },
//   {
//     title: 'Security',
//     description: 'Data protection and compliance built into every layer.',
//     icon: Cloud,
//   },
//   {
//     title: 'Scalability',
//     description: 'Cloud architecture designed to grow with demand.',
//     icon: Layers,
//   },
// ]

// const serviceHighlights = [
//   {
//     title: 'Web Development',
//     description: 'Modern web platforms with polished UI and fast performance.',
//     icon: Cpu,
//   },
//   {
//     title: 'AI & Analytics',
//     description: 'Automate workflows and surface the insights that matter.',
//     icon: TrendingUp,
//   },
//   // {
//   //   title: 'Cybersecurity',
//   //   description: 'Protect systems with a security-first engineering posture.',
//   //   icon: ShieldCheck,
//   // },
// ]

// const testimonials = [
//   {
//     name: 'Maya Shah',
//     role: 'VP of Product, Delta Systems',
//     quote:
//       'Caryanamindia turned our digital roadmap into a polished launch with remarkable speed and clarity.',
//   },
//   {
//     name: 'Rohan Mehta',
//     role: 'CTO, Lumina Labs',
//     quote:
//       'Their team delivered enterprise-ready systems with excellent collaboration and security practices.',
//   },
//   {
//     name: 'Priya Das',
//     role: 'Director of Operations, HexaCorp',
//     quote:
//       'The modern design and operational rigor gave our customers a premium experience from day one.',
//   },
// ]

// export default function Home() {
//   return (
//     <div className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50 pb-20">
//       <section className="relative mx-auto max-w-7xl px-6 pt-24 lg:pt-32">
//         <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
//           <div className="space-y-8">
//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-cyan-50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-700">
//                 Premium enterprise IT services
//               </span>

//               <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
//                 Empowering businesses with cutting-edge IT solutions.
//               </h1>

//               <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
//                 From cloud computing to AI-driven automation, we deliver
//                 technology that drives growth, reliability, and secure digital
//                 transformation.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="flex flex-col gap-4 sm:flex-row"
//             >
//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:scale-105"
//               >
//                 Explore Services
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>

//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:border-blue-300 hover:text-blue-700"
//               >
//                 Contact Us
//               </Link>
//             </motion.div>

//             <div className="grid gap-6 sm:grid-cols-3">
//               {serviceHighlights.map((item, index) => (
//                 <motion.article
//                   key={item.title}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.6, delay: index * 0.08 }}
//                   className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//                 >
//                   <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-200">
//                     <item.icon className="h-6 w-6" />
//                   </div>

//                   <h3 className="mt-6 text-xl font-semibold text-slate-950">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </motion.article>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 24 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.75, ease: 'easeOut' }}
//               className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
//             >
//               <div className="relative space-y-6">
//                 <div className="rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 shadow-sm">
//                   <div className="flex items-center justify-between gap-4">
//                     <div>
//                       <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                         Digital platform
//                       </p>

//                       <h2 className="mt-4 text-2xl font-semibold text-slate-950">
//                         Modern SaaS stack
//                       </h2>
//                     </div>

//                     <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-3 text-white shadow-lg shadow-cyan-200">
//                       <Layers className="h-5 w-5" />
//                     </div>
//                   </div>

//                   <p className="mt-5 text-sm leading-7 text-slate-600">
//                     Design systems, cloud automation, and enterprise workflow
//                     orchestration in one polished package.
//                   </p>
//                 </div>

//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div className="rounded-[1.8rem] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
//                     <p className="text-xs uppercase tracking-[0.24em] text-blue-600">
//                       Innovation
//                     </p>

//                     <p className="mt-3 text-lg font-semibold text-slate-950">
//                       Future-ready products
//                     </p>
//                   </div>

//                   <div className="rounded-[1.8rem] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
//                     <p className="text-xs uppercase tracking-[0.24em] text-blue-600">
//                       Performance
//                     </p>

//                     <p className="mt-3 text-lg font-semibold text-slate-950">
//                       Secure operations
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <StatsSection />

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.65 }}
//             >
//               <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//                 Company overview
//               </p>

//               <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
//                 Enterprise-grade technology with a premium service experience.
//               </h2>

//               <p className="mt-6 text-base leading-8 text-slate-600">
//                 Caryanamindia partners with growth-focused organizations to
//                 build secure digital systems, launch modern apps, and operate
//                 cloud platforms with rigor.
//               </p>
//             </motion.div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {features.map((item, index) => (
//                 <motion.article
//                   key={item.title}
//                   initial={{ opacity: 0, y: 24 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                   transition={{ duration: 0.55, delay: index * 0.08 }}
//                   className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//                 >
//                   <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-200">
//                     <item.icon className="h-6 w-6" />
//                   </div>

//                   <h3 className="mt-5 text-xl font-semibold text-slate-950">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>
//                 </motion.article>
//               ))}
//             </div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.65 }}
//             className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
//           >
//             <div className="relative rounded-[1.8rem] border border-blue-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                     Trusted by teams
//                   </p>

//                   <h3 className="mt-4 text-2xl font-semibold text-slate-950">
//                     Strategic delivery
//                   </h3>
//                 </div>

//                 <div className="rounded-[1.8rem] border border-blue-100 bg-white p-6 shadow-sm">
//                   <p className="text-sm uppercase tracking-[0.24em] text-blue-600">
//                     Secure by design
//                   </p>

//                   <h3 className="mt-4 text-2xl font-semibold text-slate-950">
//                     Governance and resilience
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 pb-20">
//         <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
//           <div className="space-y-6">
//             <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
//               Trusted reviews
//             </p>

//             <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
//               What our partners say.
//             </h2>
//           </div>

//           <div className="grid gap-6 md:grid-cols-3">
//             {testimonials.map((item, index) => (
//               <motion.article
//                 key={item.name}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.55, delay: index * 0.08 }}
//                 className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
//               >
//                 <div className="flex items-center justify-between gap-4">
//                   <div>
//                     <p className="font-semibold text-slate-950">{item.name}</p>

//                     <p className="mt-1 text-sm text-slate-600">
//                       {item.role}
//                     </p>
//                   </div>

//                   <div className="flex items-center gap-1 text-amber-500">
//                     {Array.from({ length: 5 }).map((_, starIndex) => (
//                       <Star key={starIndex} className="h-4 w-4" />
//                     ))}
//                   </div>
//                 </div>

//                 <p className="mt-6 text-sm leading-7 text-slate-600">
//                   "{item.quote}"
//                 </p>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


// import { motion } from 'framer-motion'
// import {
//   ArrowRight,
//   Bot,
//   Cloud,
//   Code2,
//   Palette,
//   Shield,
//   UserRound,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const aboutPoints = [
//   '🚀 03+ Successful Projects',
//   '🌐 Global Client Base',
//   '🧠 10+ Skilled Professionals',
//   '⭐ 98% Client Satisfaction',
//   '🏆 Award-Winning Solutions',
//   '💡 Innovative Approach',
// ]

// const aboutImages = [
//   'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
// ]

// const services = [
//   {
//     title: 'Web & App Development',
//     description:
//       'Custom, scalable solutions for web and mobile applications using latest technologies.',
//     icon: Code2,
//   },
//   {
//     title: 'Cloud Solutions',
//     description: 'Secure and scalable infrastructure on AWS, Azure, GCP with 24/7 monitoring.',
//     icon: Cloud,
//   },
//   {
//     title: 'AI & Analytics',
//     description: 'Insights and automation with intelligent algorithms and machine learning.',
//     icon: Bot,
//   },
//   {
//     title: 'Cybersecurity',
//     description: 'End-to-end protection, vulnerability assessment and 24/7 security monitoring.',
//     icon: Shield,
//   },
//   {
//     title: 'IT Consulting',
//     description: 'Strategic guidance to optimize cost, performance and digital transformation.',
//     icon: UserRound,
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'User-first experiences that drive engagement and improve conversion rates.',
//     icon: Palette,
//   },
// ]

// const projects = [
//   {
//     title: 'Cloud Migration for FinTech',
//     image:
//       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'E-commerce Platform Development',
//     image:
//       'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'AI Chatbot for Healthcare',
//     image:
//       'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'Enterprise Cybersecurity Enhancement',
//     image:
//       'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80',
//   },
// ]

// const testimonials = [
//   {
//     name: 'Rajesh Kumar',
//     // image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     quote:
//       'Caryanamindia transformed our outdated systems into a robust, cloud-based platform. Their team was professional, knowledgeable, and delivered beyond our expectations. Highly recommend!',
//   },
//   {
//     name: 'Vidya Phatak',
//     // image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     quote:
//       'Their cybersecurity team is outstanding. We had concerns about our data security, but Caryanamindia implemented a comprehensive security framework that made us feel completely secure.',
//   },
// ]

// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-white text-[#071225]">
//       <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#071225] px-6 py-24 text-center text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2400&q=90')",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/45" />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 mx-auto max-w-6xl"
//         >
//           <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//             Empowering Businesses with Cutting-Edge IT Solutions
//           </h1>
//           <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
//             From cloud computing to AI-driven automation, we deliver technology that drives growth.
//           </p>
//           <Link
//             to="/services"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e94f00]"
//           >
//             Our Services <ArrowRight className="h-4 w-4" />
//           </Link>
//         </motion.div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Who We Are</h2>
//             <p className="mt-5 text-base leading-8 text-slate-700">
//               Caryanamindia is a leading IT service provider specializing in software development,
//               cloud infrastructure, and digital transformation. We help businesses leverage technology
//               to achieve their strategic goals and stay ahead in the digital era.
//             </p>
//             <p className="mt-5 text-base leading-8 text-slate-700">
//               Our team of experts combines technical excellence with business acumen to deliver
//               solutions that drive real results and create lasting value for our clients.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {aboutPoints.map((point) => (
//                 <p key={point} className="text-sm font-medium text-[#071225]">
//                   {point}
//                 </p>
//               ))}
//             </div>

//             <Link
//               to="/about"
//               className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ff5b00] px-6 py-3 text-sm font-semibold text-[#ff5b00] transition hover:bg-[#ff5b00] hover:text-white"
//             >
//               Learn More <ArrowRight className="h-4 w-4" />
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid grid-cols-2 gap-5"
//           >
//             {aboutImages.map((image, index) => (
//               <img
//                 key={image}
//                 src={image}
//                 alt="Caryanamindia team"
//                 className={`h-40 w-full rounded-2xl object-cover shadow-sm sm:h-44 ${
//                   index === 1 || index === 2 ? 'mt-8' : ''
//                 }`}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Our Services</h2>
//             <p className="mt-5 text-base leading-7 text-slate-700">
//               We offer a comprehensive suite of IT services designed to meet your business needs and drive digital transformation.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service, index) => (
//               <motion.article
//                 key={service.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="rounded-xl border border-[#071225] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <service.icon className="h-9 w-9 text-[#ff5b00]" />
//                 <h3 className="mt-7 text-xl font-bold text-[#071225]">{service.title}</h3>
//                 <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
//                 <Link
//                   to="/services"
//                   className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5b00]"
//                 >
//                   Learn more <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Our Recent Projects</h2>
//           <p className="mt-5 text-base leading-7 text-slate-700">
//             Explore some of our successful projects that have helped businesses transform and grow.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {projects.map((project) => (
//             <article key={project.title} className="group relative h-56 overflow-hidden rounded-xl shadow-sm">
//               <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
//               <h3 className="absolute bottom-6 left-5 right-5 text-lg font-bold text-white">{project.title}</h3>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-5xl">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">What Our Clients Say</h2>
//             <p className="mt-5 text-base text-slate-700">
//               Don't just take our word for it. Here's what our clients have to say about working with us.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-2">
//             {testimonials.map((item) => (
//               <article key={item.name} className="rounded-xl border border-[#071225] bg-white p-8 shadow-sm">
//                 <div className="text-xl tracking-widest text-[#ff5b00]">★★★★★</div>
//                 <p className="mt-5 text-lg leading-8 text-[#071225]">&quot;{item.quote}&quot;</p>
//                 <div className="mt-8 flex items-center gap-4">
//                   <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
//                   <p className="font-bold text-[#071225]">{item.name}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Link
//         to="#"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5b00] text-white shadow-lg transition hover:bg-[#e94f00]"
//         aria-label="Back to top"
//       >
//         ↑
//       </Link>
//     </main>
//   )
// }




// import { motion } from 'framer-motion'
// import {
//   ArrowRight,
//   Bot,
//   Cloud,
//   Code2,
//   Palette,
//   Shield,
//   UserRound,
// } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const aboutPoints = [
//   '🚀 03+ Successful Projects',
//   '🌐 Global Client Base',
//   '🧠 10+ Skilled Professionals',
//   '⭐ 98% Client Satisfaction',
//   '🏆 Award-Winning Solutions',
//   '💡 Innovative Approach',
// ]

// const aboutImages = [
//   'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
// ]

// const services = [
//   {
//     title: 'Web & App Development',
//     description:
//       'Custom, scalable solutions for web and mobile applications using latest technologies.',
//     icon: Code2,
//   },
//   {
//     title: 'Cloud Solutions',
//     description: 'Secure and scalable infrastructure on AWS, Azure, GCP with 24/7 monitoring.',
//     icon: Cloud,
//   },
//   {
//     title: 'AI & Analytics',
//     description: 'Insights and automation with intelligent algorithms and machine learning.',
//     icon: Bot,
//   },
//   {
//     title: 'Cybersecurity',
//     description: 'End-to-end protection, vulnerability assessment and 24/7 security monitoring.',
//     icon: Shield,
//   },
//   {
//     title: 'IT Consulting',
//     description: 'Strategic guidance to optimize cost, performance and digital transformation.',
//     icon: UserRound,
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'User-first experiences that drive engagement and improve conversion rates.',
//     icon: Palette,
//   },
// ]

// const projects = [
//   {
//     title: 'Cloud Migration for FinTech',
//     image:
//       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'E-commerce Platform Development',
//     image:
//       'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'AI Chatbot for Healthcare',
//     image:
//       'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
//   },
//   {
//     title: 'Enterprise Cybersecurity Enhancement',
//     image:
//       'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80',
//   },
// ]

// const testimonials = [
//   {
//     name: 'Rajesh Kumar',
//     // image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     quote:
//       'Caryanamindia transformed our outdated systems into a robust, cloud-based platform. Their team was professional, knowledgeable, and delivered beyond our expectations. Highly recommend!',
//   },
//   {
//     name: 'Vidya Phatak',
//     // image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     quote:
//       'Their cybersecurity team is outstanding. We had concerns about our data security, but Caryanamindia implemented a comprehensive security framework that made us feel completely secure.',
//   },
// ]

// export default function Home() {
//   return (
//     <main className="overflow-hidden bg-white text-[#071225]">
//       <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#071225] px-6 py-24 text-center text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2400&q=90')",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/45" />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="relative z-10 mx-auto max-w-6xl"
//         >
//           <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//             Empowering Businesses with Cutting-Edge IT Solutions
//           </h1>
//           <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
//             From cloud computing to AI-driven automation, we deliver technology that drives growth.
//           </p>
//           <Link
//             to="/services"
//             className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e94f00]"
//           >
//             Our Services <ArrowRight className="h-4 w-4" />
//           </Link>
//         </motion.div>
//       </section>

//       <section className="bg-white px-6 py-20">
//         <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#071225]/10 bg-gradient-to-br from-[#071225] via-[#0d1f39] to-[#071225] p-8 text-white shadow-2xl sm:p-12">
//           <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="inline-flex rounded-full bg-[#ff5b00]/20 px-4 py-2 text-sm font-bold text-[#ffb27d]">
//                 🚀 Startup Special Offer
//               </span>

//               <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
//                 Build Your Startup Without Heavy Upfront Costs
//               </h2>

//               <p className="mt-6 text-lg leading-8 text-white/85">
//                 Is your startup less than 6 months old? Caryanam India Pvt Ltd helps
//                 startups build and grow with affordable monthly payment plans instead of
//                 heavy upfront costs.
//               </p>

//               <p className="mt-4 text-base leading-7 text-white/75">
//                 Focus on growing your business while we take care of your technology needs.
//                 Contact us today for a customized startup package.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e94f00]"
//                 >
//                   Get Startup Package <ArrowRight className="h-4 w-4" />
//                 </Link>

//                 <Link
//                   to="/services"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071225]"
//                 >
//                   View Services <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 24 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="rounded-3xl bg-white p-6 text-[#071225] shadow-xl sm:p-8"
//             >
//               <h3 className="text-2xl font-extrabold text-[#071225]">Our Startup Services</h3>

//               <div className="mt-6 grid gap-3">
//                 {[
//                   'Website Development',
//                   'Mobile App Development (Android & iOS)',
//                   'Custom Software Solutions',
//                   'UI/UX Design',
//                   'Hosting & Cloud Setup',
//                   'Technical Support & Maintenance',
//                   'Digital Marketing Support',
//                 ].map((item) => (
//                   <p
//                     key={item}
//                     className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
//                   >
//                     ✅ {item}
//                   </p>
//                 ))}
//               </div>

//               <div className="mt-8 border-t border-slate-200 pt-6">
//                 <h4 className="font-bold text-[#071225]">Why Choose Us?</h4>

//                 <div className="mt-4 grid gap-3 sm:grid-cols-2">
//                   {[
//                     'Low Monthly Payments',
//                     'Fast Development',
//                     'Dedicated Support Team',
//                     'Scalable Solutions',
//                   ].map((item) => (
//                     <p
//                       key={item}
//                       className="rounded-xl border border-[#ff5b00]/30 px-4 py-3 text-sm font-bold text-[#ff5b00]"
//                     >
//                       ✔ {item}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Who We Are</h2>
//             <p className="mt-5 text-base leading-8 text-slate-700">
//               Caryanamindia is a leading IT service provider specializing in software development,
//               cloud infrastructure, and digital transformation. We help businesses leverage technology
//               to achieve their strategic goals and stay ahead in the digital era.
//             </p>
//             <p className="mt-5 text-base leading-8 text-slate-700">
//               Our team of experts combines technical excellence with business acumen to deliver
//               solutions that drive real results and create lasting value for our clients.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               {aboutPoints.map((point) => (
//                 <p key={point} className="text-sm font-medium text-[#071225]">
//                   {point}
//                 </p>
//               ))}
//             </div>

//             <Link
//               to="/about"
//               className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ff5b00] px-6 py-3 text-sm font-semibold text-[#ff5b00] transition hover:bg-[#ff5b00] hover:text-white"
//             >
//               Learn More <ArrowRight className="h-4 w-4" />
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="grid grid-cols-2 gap-5"
//           >
//             {aboutImages.map((image, index) => (
//               <img
//                 key={image}
//                 src={image}
//                 alt="Caryanamindia team"
//                 className={`h-40 w-full rounded-2xl object-cover shadow-sm sm:h-44 ${
//                   index === 1 || index === 2 ? 'mt-8' : ''
//                 }`}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Our Services</h2>
//             <p className="mt-5 text-base leading-7 text-slate-700">
//               We offer a comprehensive suite of IT services designed to meet your business needs and drive digital transformation.
//             </p>
//           </div>

//           <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {services.map((service, index) => (
//               <motion.article
//                 key={service.title}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 className="rounded-xl border border-[#071225] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <service.icon className="h-9 w-9 text-[#ff5b00]" />
//                 <h3 className="mt-7 text-xl font-bold text-[#071225]">{service.title}</h3>
//                 <p className="mt-4 text-base leading-7 text-slate-700">{service.description}</p>
//                 <Link
//                   to="/services"
//                   className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5b00]"
//                 >
//                   Learn more <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Our Recent Projects</h2>
//           <p className="mt-5 text-base leading-7 text-slate-700">
//             Explore some of our successful projects that have helped businesses transform and grow.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {projects.map((project) => (
//             <article key={project.title} className="group relative h-56 overflow-hidden rounded-xl shadow-sm">
//               <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
//               <h3 className="absolute bottom-6 left-5 right-5 text-lg font-bold text-white">{project.title}</h3>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-5xl">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">What Our Clients Say</h2>
//             <p className="mt-5 text-base text-slate-700">
//               Don't just take our word for it. Here's what our clients have to say about working with us.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 md:grid-cols-2">
//             {testimonials.map((item) => (
//               <article key={item.name} className="rounded-xl border border-[#071225] bg-white p-8 shadow-sm">
//                 <div className="text-xl tracking-widest text-[#ff5b00]">★★★★★</div>
//                 <p className="mt-5 text-lg leading-8 text-[#071225]">&quot;{item.quote}&quot;</p>
//                 <div className="mt-8 flex items-center gap-4">
//                   <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
//                   <p className="font-bold text-[#071225]">{item.name}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Link
//         to="#"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5b00] text-white shadow-lg transition hover:bg-[#e94f00]"
//         aria-label="Back to top"
//       >
//         ↑
//       </Link>
//     </main>
//   )
// }




import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Palette,
  Shield,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const aboutPoints = [
  '🚀 03+ Successful Projects',
  '🌐 Global Client Base',
  '🧠 10+ Skilled Professionals',
  '⭐ 98% Client Satisfaction',
  '🏆 Award-Winning Solutions',
  '💡 Innovative Approach',
]

const aboutImages = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
]

const services = [
  {
    title: 'Web & App Development',
    description:
      'Custom, scalable solutions for web and mobile applications using latest technologies.',
    icon: Code2,
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable infrastructure on AWS, Azure, GCP with 24/7 monitoring.',
    icon: Cloud,
  },
  {
    title: 'AI & Analytics',
    description: 'Insights and automation with intelligent algorithms and machine learning.',
    icon: Bot,
  },
  {
    title: 'Cybersecurity',
    description: 'End-to-end protection, vulnerability assessment and 24/7 security monitoring.',
    icon: Shield,
  },
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to optimize cost, performance and digital transformation.',
    icon: UserRound,
  },
  {
    title: 'UI/UX Design',
    description: 'User-first experiences that drive engagement and improve conversion rates.',
    icon: Palette,
  },
]

const projects = [
  {
    title: 'Cloud Migration for FinTech',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'E-commerce Platform Development',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'AI Chatbot for Healthcare',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Enterprise Cybersecurity Enhancement',
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    quote:
      'Caryanamindia transformed our outdated systems into a robust, cloud-based platform. Their team was professional, knowledgeable, and delivered beyond our expectations. Highly recommend!',
  },
  {
    name: 'Vidya Phatak',
    quote:
      'Their cybersecurity team is outstanding. We had concerns about our data security, but Caryanamindia implemented a comprehensive security framework that made us feel completely secure.',
  },
]

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#071225]">
      <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center bg-[#071225] px-6 py-24 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2400&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-6xl"
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Empowering Businesses with Cutting-Edge IT Solutions
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            From cloud computing to AI-driven automation, we deliver technology that drives growth.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e94f00]"
          >
            Our Services <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#071225]/10 bg-gradient-to-br from-[#071225] via-[#0d1f39] to-[#071225] p-8 text-white shadow-2xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex rounded-full bg-[#ff5b00]/20 px-4 py-2 text-sm font-bold text-[#ffb27d]">
                🚀 Startup Special Offer
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Build Your Startup Without Heavy Upfront Costs
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/85">
                Is your startup less than 6 months old? Caryanam India Pvt Ltd helps
                startups build and grow with affordable monthly payment plans instead of
                heavy upfront costs.
              </p>

              <p className="mt-4 text-base leading-7 text-white/75">
                Focus on growing your business while we take care of your technology needs.
                Contact us today for a customized startup package.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff5b00] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#e94f00]"
                >
                  Get Startup Package <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071225]"
                >
                  View Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white p-6 text-[#071225] shadow-xl sm:p-8"
            >
              <h3 className="text-2xl font-extrabold text-[#071225]">Our Startup Services</h3>

              <div className="mt-6 grid gap-3">
                {[
                  'Website Development',
                  'Mobile App Development (Android & iOS)',
                  'Custom Software Solutions',
                  'UI/UX Design',
                  'Hosting & Cloud Setup',
                  'Technical Support & Maintenance',
                  'Digital Marketing Support',
                ].map((item) => (
                  <p
                    key={item}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    ✅ {item}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="font-bold text-[#071225]">Why Choose Us?</h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Low Monthly Payments',
                    'Fast Development',
                    'Dedicated Support Team',
                    'Scalable Solutions',
                  ].map((item) => (
                    <p
                      key={item}
                      className="rounded-xl border border-[#ff5b00]/30 px-4 py-3 text-sm font-bold text-[#ff5b00]"
                    >
                      ✔ {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">Who We Are</h2>

            <p className="mt-5 text-base leading-8 text-slate-700">
              Caryanamindia is a leading IT service provider specializing in software development,
              cloud infrastructure, and digital transformation. We help businesses leverage technology
              to achieve their strategic goals and stay ahead in the digital era.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700">
              Our team of experts combines technical excellence with business acumen to deliver
              solutions that drive real results and create lasting value for our clients.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutPoints.map((point) => (
                <p key={point} className="text-sm font-medium text-[#071225]">
                  {point}
                </p>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ff5b00] px-6 py-3 text-sm font-semibold text-[#ff5b00] transition hover:bg-[#ff5b00] hover:text-white"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {aboutImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Caryanamindia team"
                className={`h-40 w-full rounded-2xl object-cover shadow-sm sm:h-44 ${
                  index === 1 || index === 2 ? 'mt-8' : ''
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 px-6 py-20">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: 'easeInOut',
          }}
          className="absolute left-10 top-20 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-[#071225]/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#ff5b00]/10 px-4 py-2 text-sm font-bold text-[#ff5b00]">
              What We Provide
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-[#071225] sm:text-4xl">
              Our Services
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-700">
              We offer a comprehensive suite of IT services designed to meet your business needs and drive digital transformation.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 120,
                }}
                className="group relative overflow-hidden rounded-2xl border border-[#071225]/20 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#ff5b00]/60 hover:shadow-[0_20px_50px_rgba(255,91,0,0.25)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#ff5b00] opacity-0 transition duration-500 group-hover:opacity-100" />

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff5b00]/10 text-[#ff5b00] transition duration-500 group-hover:bg-[#ff5b00] group-hover:text-white"
                >
                  <service.icon className="h-9 w-9" />
                </motion.div>

                <h3 className="mt-7 text-xl font-bold text-[#071225]">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-700">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff5b00]"
                >
                  Learn more
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700">
            Explore some of our successful projects that have helped businesses transform and grow.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative h-56 overflow-hidden rounded-xl shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <h3 className="absolute bottom-6 left-5 right-5 text-lg font-bold text-white">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#071225] sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-5 text-base text-slate-700">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-[#071225] bg-white p-8 shadow-sm"
              >
                <div className="text-xl tracking-widest text-[#ff5b00]">★★★★★</div>
                <p className="mt-5 text-lg leading-8 text-[#071225]">
                  &quot;{item.quote}&quot;
                </p>
                <div className="mt-8">
                  <p className="font-bold text-[#071225]">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Link
        to="#"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5b00] text-white shadow-lg transition hover:bg-[#e94f00]"
        aria-label="Back to top"
      >
        ↑
      </Link>
    </main>
  )
}