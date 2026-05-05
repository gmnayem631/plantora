"use client";

import toast from "react-hot-toast";
import { LuLeaf } from "react-icons/lu";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    e.target.reset();
    toast.success("Message sent! We will get back to you soon.");
  };

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)" }}
    >
      <div className="max-w-xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Get in Touch
          </span>
          <h1
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Contact Us
          </h1>
          <p className="text-green-800/60 mt-3 text-sm leading-relaxed">
            Have a question about a plant or need help with your collection? We
            would love to hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                Your Name
              </label>
              <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                <FiUser size={18} className="text-green-400 shrink-0" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                Email Address
              </label>
              <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                <FiMail size={18} className="text-green-400 shrink-0" />
                <input
                  type="email"
                  name="email"
                  placeholder="john@email.com"
                  className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                Message
              </label>
              <div className="flex items-start gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                <FiMessageSquare
                  size={18}
                  className="text-green-400 shrink-0 mt-0.5"
                />
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-3.5 rounded-full cursor-pointer transition-colors duration-200 mt-1"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-green-500">
          <LuLeaf size={14} />
          <p>We usually respond within 24 hours.</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
