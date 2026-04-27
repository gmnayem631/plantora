import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #f7fee7 100%)",
      }}
    >
      <div className="max-w-1/2 mx-auto text-center flex flex-col items-center gap-6">
        {/* Eyebrow label */}
        <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
          Your Indoor Garden
        </span>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold text-green-900 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Grow, Track & <span className="text-green-500">Love</span> Your Plants
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-green-800/70 max-w-xl leading-relaxed">
          Plantora helps you manage your indoor plant collection track care
          schedules, discover new plants, and keep your green space thriving.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link
            href="/items"
            className="px-8 py-3.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-sm"
          >
            Explore Plants
          </Link>
          <Link
            href="/about"
            className="px-8 py-3.5 text-green-700 hover:text-green-500 text-sm font-semibold border border-green-300 hover:border-green-400 rounded-full transition-all duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Decorative floating leaves */}
        <div className="relative w-full mt-8 select-none pointer-events-none">
          <span className="absolute left-0 -top-4 text-5xl opacity-20 rotate-12">
            🌿
          </span>
          <span className="absolute right-0 -top-4 text-5xl opacity-20 -rotate-12">
            🍃
          </span>
          <span className="absolute left-1/4 top-0 text-3xl opacity-10 rotate-45">
            🌱
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
