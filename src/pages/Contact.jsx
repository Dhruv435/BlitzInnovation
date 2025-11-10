import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#1B1716] text-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold mb-4">Let’s Build Something Great Together</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether you have a project in mind, a question, or just want to explore how Blitz Innovation can
            transform your business digitally — we’re here to help. Reach out and start your innovation journey today.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-[#3EA971]" />
              <p>hello@blitzinnovation.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#3EA971]" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#3EA971]" />
              <p>Surat, Gujarat, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3EA971]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3EA971]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3EA971]"
              placeholder="Write your message..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full bg-[#3EA971] text-black py-3 rounded-lg font-semibold hover:bg-[#35a267] transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
