import { FaSmile, FaLeaf, FaUserTie } from "react-icons/fa";

const levels = [
  {
    level: "Easy",
    emoji: <FaSmile />,
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    title: "Perfect for Beginners",
    description:
      "These plants tolerate neglect, irregular watering, and low light. Great for busy lifestyles.",
    examples: ["Snake Plant", "Pothos", "ZZ Plant", "Aloe Vera"],
  },
  {
    level: "Medium",
    emoji: <FaLeaf />,
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    title: "Some Attention Needed",
    description:
      "These plants have specific light or watering needs but reward you with beautiful growth.",
    examples: ["Monstera", "Peace Lily", "Rubber Plant", "Jade Plant"],
  },
  {
    level: "Hard",
    emoji: <FaUserTie />,
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    title: "For Experienced Growers",
    description:
      "These plants need consistent humidity, light, and careful watering schedules.",
    examples: ["Fiddle Leaf Fig", "Calathea Orbifolia"],
  },
];

const CareLevelGuide = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Care Guide
          </span>
          <h2
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Find Your Level
          </h2>
          <p className="text-green-800/60 mt-3 max-w-md mx-auto">
            Not sure where to start? We have grouped plants by how much care
            they need.
          </p>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {levels.map((l) => (
            <div
              key={l.level}
              className={`rounded-2xl border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-md ${l.color}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{l.emoji}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${l.badge}`}
                >
                  {l.level}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-green-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {l.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {l.description}
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {l.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-xs bg-white/70 border border-green-200 text-green-700 px-3 py-1 rounded-full"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareLevelGuide;
