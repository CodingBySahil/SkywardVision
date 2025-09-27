import React from "react";

function ContactForm() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-sky-400 to-blue-600 overflow-hidden text-white">
      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl px-6 lg:px-12 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Contact <span className="text-yellow-300">SkywardVision</span>
        </h2>
        <p className="text-blue-100 text-lg mb-12">
          Have a project in mind? Reach out and let our experts guide you
          through the perfect marketing and advertising solutions tailored for
          your business.
        </p>

        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2"
        >
          {/* First Name */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold mb-2"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-start">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="Doe"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2 flex flex-col items-start">
            <label
              htmlFor="company"
              className="block text-sm font-semibold mb-2"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="Skyward Inc."
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2 flex flex-col items-start">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="Skyward Inc."
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2 flex flex-col items-start">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="Skyward Inc."
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2 flex flex-col items-start">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl px-4 py-3 text-white placeholder-white-400 outline-white/40 outline-1 focus:outline-none focus:ring-2 focus:ring-white-600 transition"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-yellow-300 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
