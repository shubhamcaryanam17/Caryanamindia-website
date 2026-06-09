import { motion } from 'framer-motion'
import { useState } from 'react'

const inputClassName =
  'w-full rounded-md border border-black bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setIsSubmitting(true);

    const response = await fetch('/sendmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (result.success) {
      alert('Message sent successfully');

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Failed to send message');
    }
  } catch (err) {
    console.error(err);
    alert('Error sending message');
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section className="min-h-screen bg-[#f5f6f8] pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-5xl font-extrabold text-[#0f1b2d]"
        >
          Contact Us
        </motion.h1>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
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
              <p>
                📍 <span className="font-bold text-[#0f1b2d]">Address:</span>
                <br />
                Sprint Rushubh BizzBay,
                Sr No. 13, 1A, Mundhwa - Kharadi Rd,
                Thite Nagar, Kharadi,
                Pune, Maharashtra 411014
              </p>

              <p>
                📞 <span className="font-bold text-[#0f1b2d]">Phone:</span>{' '}
                <a href="tel:+917755994123" className="text-[#ff5b00]">
                 +91-7755994123
                </a>
              </p>

              <p>
                📧 <span className="font-bold text-[#0f1b2d]">Email:</span>{' '}
                <a
                  href="mailto:info@caryanamindia.com"
                  className="text-[#ff5b00]"
                >
                  info@caryanamindia.com
                </a>
              </p>

              <p>
                🔗 <span className="font-bold text-[#0f1b2d]">LinkedIn:</span>{' '}
                
                <a href="https://in.linkedin.com/company/caryanamindia-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-[#ff5b00]">
                  Caryanamindia India Pvt. Ltd.
                </a>
              </p>
            </div>

            <div className="mt-8 h-[360px] overflow-hidden rounded-sm shadow-md">
              <iframe
                title="Sprint Rushubh BizzBay"
                src="https://maps.google.com/maps?q=Sprint%20Rushubh%20BizzBay%20Kharadi%20Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white p-8 shadow-2xl shadow-gray-300/60"
            onSubmit={handleSubmit}
          >
            <label className="mb-6 block text-sm font-semibold text-slate-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={`${inputClassName} mt-1`}
              />
            </label>

            <label className="mb-6 block text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className={`${inputClassName} mt-1`}
              />
            </label>

            <label className="mb-7 block text-sm font-semibold text-slate-700">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your Message"
                className={`${inputClassName} mt-1 resize-y`}
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-[#ff5b00] px-6 py-4 font-bold text-white transition hover:bg-[#e85200] disabled:bg-[#ff5b00]/70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}