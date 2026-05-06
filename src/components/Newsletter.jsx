"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // TODO: wire up to your email service here
    setEmail("");
    toast.success("You're in! Welcome to the Plantora family. 🌿");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-sm tracking-[0.14em] uppercase text-[#639922] font-medium mb-4">
          Stay in the loop
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl font-normal text-green-900 mb-3">
          Weekly plant care, in your inbox
        </h2>

        {/* Subtext */}
        <p className="text-base text-green-900 text-center leading-relaxed mb-10">
          Get seasonal tips, plant spotlights, and care reminders - no spam,
          just green goodness.
        </p>

        {/* Input + button */}
        <div className="flex items-center max-w-md mx-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
          <span className="pl-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
              />
            </svg>
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="your@email.com"
            className="flex-1 px-3 py-3 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#639922] hover:bg-[#3B6D11] transition-colors text-white text-sm font-medium px-5 h-11 whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>

        {/* Fine print */}
        <p className="mt-3 text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
