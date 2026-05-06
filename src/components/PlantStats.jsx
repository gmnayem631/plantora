"use client";

import { useEffect, useRef } from "react";

const stats = [
  { target: 50, suffix: "+", decimal: false, label: "Plants in our library" },
  {
    target: 1200,
    suffix: "+",
    decimal: false,
    label: "Plant lovers worldwide",
  },
  {
    target: 30,
    suffix: "+",
    decimal: false,
    label: "Countries growing with us",
  },
  { target: 4.9, suffix: "", decimal: true, label: "Average community rating" },
];

function StatItem({ target, suffix, decimal, label, showDivider }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const duration = 1800;
          const start = performance.now();

          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el.textContent = decimal ? current.toFixed(1) : Math.round(current);
            if (progress < 1) requestAnimationFrame(step);
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <div className="relative flex-1 flex flex-col items-center gap-2 px-8 py-2">
      {/* Divider line */}
      {showDivider && (
        <div className="absolute left-0 top-[10%] h-[80%] w-px bg-gray-200 dark:bg-gray-700" />
      )}

      {/* Big number */}
      <div className="font-serif text-[72px] leading-none text-gray-900 font-normal">
        <span ref={numRef}>0</span>
        {suffix && <span className="text-[40px] text-[#639922]">{suffix}</span>}
      </div>

      {/* Label */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-snug mt-3">
        {label}
      </p>
    </div>
  );
}

export default function PlantStats() {
  return (
    <section className="py-20 max-w-7xl mx-auto">
      {/* Eyebrow label */}
      <p className="text-center text-2xl md:text-4xl tracking-[0.14em] uppercase text-[#639922] font-medium">
        Plantora in numbers
      </p>

      {/* Stats row */}
      <div className="flex items-stretch justify-center mt-14">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} showDivider={i !== 0} />
        ))}
      </div>
    </section>
  );
}
