"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    q: "How busy is your lifestyle?",
    opts: ["Rarely home", "Moderately busy", "Always around"],
  },
  {
    q: "How much sunlight does your space get?",
    opts: ["Low — few windows", "Medium — some light", "Bright — lots of sun"],
  },
  {
    q: "What's your plant experience level?",
    opts: ["Total beginner", "Some experience", "Seasoned grower"],
  },
  {
    q: "What vibe are you going for?",
    opts: ["Cozy & minimal", "Lush & tropical", "Bold & dramatic"],
  },
  {
    q: "Do you have pets at home?",
    opts: ["Yes, pets at home", "No pets"],
  },
];

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    emoji: "🌵",
    care: "Easy",
    reason:
      "Hardy, tolerates neglect and low light perfectly — ideal for a busy lifestyle.",
  },
  {
    id: 2,
    name: "Pothos",
    emoji: "🌿",
    care: "Easy",
    reason:
      "Nearly indestructible and trails beautifully. Great for beginners and low-light spaces.",
  },
  {
    id: 3,
    name: "ZZ Plant",
    emoji: "🍃",
    care: "Easy",
    reason:
      "Thrives on neglect, stores water in its roots, and looks stunning in any space.",
  },
  {
    id: 4,
    name: "Monstera Deliciosa",
    emoji: "🌴",
    care: "Medium",
    reason:
      "Iconic split leaves bring a bold tropical vibe — perfect for a lush, dramatic space.",
  },
  {
    id: 5,
    name: "Aloe Vera",
    emoji: "🌱",
    care: "Easy",
    reason:
      "Loves bright light and minimal watering — a sunny windowsill favourite.",
  },
  {
    id: 6,
    name: "Peace Lily",
    emoji: "🌸",
    care: "Medium",
    reason:
      "Elegant and pet-friendly — thrives beautifully in low light conditions.",
  },
];

function getResult(answers) {
  const [lifestyle, light, exp, vibe, pets] = answers;
  if (pets === 0) {
    if (lifestyle === 0 || exp === 0) return plants[1];
    if (light === 2) return plants[4];
    return plants[5];
  }
  if (lifestyle === 0 && light === 0) return plants[2];
  if (vibe === 1 || light === 2) return plants[3];
  if (exp === 0) return plants[1];
  if (light === 2) return plants[4];
  return plants[0];
}

const PlantQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [result, setResult] = useState(null);

  const progress = Math.round((current / questions.length) * 100);

  function select(i) {
    const updated = [...answers];
    updated[current] = i;
    setAnswers(updated);
  }

  function next() {
    if (answers[current] === null) return;
    if (current === questions.length - 1) {
      setResult(getResult(answers));
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function prev() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function restart() {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setResult(null);
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-center text-sm tracking-[0.14em] uppercase text-[#639922] font-medium mb-4">
          Find your match
        </p>
        <h2 className="text-center font-serif text-4xl font-normal text-green-900 mb-3">
          What plant are you?
        </h2>
        <p className="text-center text-[15px] text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-10">
          Answer 5 quick questions and we will find your perfect indoor
          companion.
        </p>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
          {result ? (
            /* Result */
            <div className="text-center">
              <div className="w-18 h-18 rounded-full bg-[#EAF3DE] flex items-center justify-center text-4xl mx-auto mb-4">
                {result.emoji}
              </div>
              <h3 className="font-serif text-3xl text-gray-900 dark:text-white mb-2">
                {result.name}
              </h3>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-[#EAF3DE] text-[#3B6D11] mb-4">
                {result.care} care
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                {result.reason}
              </p>
              <Link
                href={`/plants/${result.id}`}
                className="inline-block bg-[#639922] hover:bg-[#3B6D11] transition-colors text-white text-sm font-medium px-6 py-2.5 rounded-lg"
              >
                View plant details
              </Link>
              <button
                onClick={restart}
                className="block mx-auto mt-3 text-sm text-[#639922] underline bg-transparent border-none cursor-pointer"
              >
                Retake the quiz
              </button>
            </div>
          ) : (
            /* Questions */
            <>
              {/* Progress bar */}
              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-[#639922] rounded-full transition-all duration-400"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Step label */}
              <p className="text-xs text-gray-400 mb-2">
                Question {current + 1} of {questions.length}
              </p>

              {/* Question */}
              <h3 className="font-serif text-[22px] text-gray-900 dark:text-white mb-5 leading-snug">
                {questions[current].q}
              </h3>

              {/* Options */}
              <div className="flex flex-col gap-2.5">
                {questions[current].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => select(i)}
                    className={`flex items-center gap-3 text-left px-4 py-3 rounded-lg border text-sm transition-colors ${
                      answers[current] === i
                        ? "border-[#639922] bg-[#EAF3DE] text-[#27500A]"
                        : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#639922] hover:bg-[#EAF3DE] hover:text-[#27500A]"
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border shrink-0 transition-colors ${
                        answers[current] === i
                          ? "border-[#639922] bg-[#639922]"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    />
                    {opt}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prev}
                  className={`text-sm text-gray-500 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    current === 0 ? "invisible" : ""
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={answers[current] === null}
                  className="bg-[#639922] hover:bg-[#3B6D11] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white text-sm font-medium px-5 py-2 rounded-lg"
                >
                  {current === questions.length - 1 ? "See my plant" : "Next"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlantQuiz;
