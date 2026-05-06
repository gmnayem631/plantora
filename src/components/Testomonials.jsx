"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Plantora completely changed how I care for my plants. I used to kill everything — now my monstera is thriving.",
    name: "Sara Rahman",
    meta: "Plant parent · Dhaka",
    initials: "SR",
  },
  {
    quote:
      "The care level filter is genius. As a beginner I found my perfect starter plants within minutes.",
    name: "James Kim",
    meta: "First-time plant owner · Seoul",
    initials: "JK",
  },
  {
    quote:
      "I love being able to manage my own collection. It feels like a little journal for my indoor garden.",
    name: "Amara Lopes",
    meta: "Hobbyist gardener · Lisbon",
    initials: "AL",
  },
  {
    quote:
      "Clean, simple, and actually useful. Most plant apps are overwhelming — Plantora is a breath of fresh air.",
    name: "Marcus Patel",
    meta: "Interior designer · London",
    initials: "MP",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-center text-2xl md:text-4xl tracking-[0.14em] uppercase text-[#639922] font-medium mb-4">
          What people say
        </p>
        <h2 className="text-center font-serif text-4xl font-normal text-gray-900 dark:text-white mb-12">
          Loved by plant lovers
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] md:mx-auto"
              >
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
                  {/* Stars */}
                  <div className="text-[#639922] text-sm tracking-wide mb-4">
                    ★★★★★
                  </div>

                  {/* Quote */}
                  <p className="font-serif italic text-xl leading-relaxed text-gray-800 dark:text-gray-100 mb-6">
                    <span className="text-[#639922] text-3xl leading-none align-[-10px] mr-1">
                      &ldquo;
                    </span>
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EAF3DE] flex items-center justify-center text-[13px] font-medium text-[#3B6D11] shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t.meta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Prev */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-green-900 flex items-center justify-center text-green-900  hover:bg-green-100 transition-colors"
          >
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === selectedIndex
                    ? "w-5 bg-[#639922]"
                    : "w-1.5 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-green-900 flex items-center justify-center text-green-900 hover:bg-green-100 transition-colors"
          >
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
