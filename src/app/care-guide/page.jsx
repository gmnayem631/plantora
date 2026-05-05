import { LuLeaf } from "react-icons/lu";
import { TbPlant, TbSunHigh, TbDroplet } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";

const tips = {
  Easy: {
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-900",
    icon: <LuLeaf size={20} className="text-green-500" />,
    plants: [
      "Snake Plant",
      "Pothos",
      "ZZ Plant",
      "Aloe Vera",
      "Spider Plant",
      "Philodendron Heartleaf",
    ],
    tips: [
      {
        icon: <TbSunHigh size={18} className="text-green-500 shrink-0" />,
        title: "Light",
        detail:
          "Tolerates low to bright indirect light. Avoid direct harsh sunlight.",
      },
      {
        icon: (
          <MdOutlineWaterDrop size={18} className="text-green-500 shrink-0" />
        ),
        title: "Watering",
        detail:
          "Water every 1–3 weeks. Always let the soil dry out between waterings.",
      },
      {
        icon: <TbPlant size={18} className="text-green-500 shrink-0" />,
        title: "General",
        detail:
          "Perfect for beginners. These plants thrive on neglect and bounce back easily.",
      },
    ],
  },
  Medium: {
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    icon: <TbPlant size={20} className="text-yellow-500" />,
    plants: ["Monstera Deliciosa", "Peace Lily", "Rubber Plant", "Jade Plant"],
    tips: [
      {
        icon: <TbSunHigh size={18} className="text-yellow-500 shrink-0" />,
        title: "Light",
        detail: "Needs bright indirect light for at least 4–6 hours a day.",
      },
      {
        icon: (
          <MdOutlineWaterDrop size={18} className="text-yellow-500 shrink-0" />
        ),
        title: "Watering",
        detail:
          "Water every 1–2 weeks. Keep soil slightly moist but never soggy.",
      },
      {
        icon: <TbPlant size={18} className="text-yellow-500 shrink-0" />,
        title: "General",
        detail:
          "Some attention needed. Watch for yellowing leaves which usually means overwatering.",
      },
    ],
  },
  Hard: {
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-700",
    icon: <TbDroplet size={20} className="text-red-500" />,
    plants: ["Fiddle Leaf Fig", "Calathea Orbifolia"],
    tips: [
      {
        icon: <TbSunHigh size={18} className="text-red-500 shrink-0" />,
        title: "Light",
        detail:
          "Requires consistent bright indirect light. Avoid moving them around.",
      },
      {
        icon: (
          <MdOutlineWaterDrop size={18} className="text-red-500 shrink-0" />
        ),
        title: "Watering",
        detail:
          "Water carefully once a week. These plants are sensitive to overwatering and underwatering.",
      },
      {
        icon: <TbPlant size={18} className="text-red-500 shrink-0" />,
        title: "General",
        detail:
          "For experienced growers. Needs high humidity, consistent temperature, and careful attention.",
      },
    ],
  },
};

const CareGuide = () => {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Learn
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Plant Care Guide
          </h1>
          <p className="text-green-800/60 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Everything you need to know about keeping your indoor plants healthy
            and thriving — broken down by care level.
          </p>
        </div>

        {/* Care Level Sections */}
        <div className="flex flex-col gap-8">
          {Object.entries(tips).map(([level, data]) => (
            <div
              key={level}
              className={`rounded-3xl border p-8 md:p-10 ${data.color}`}
            >
              {/* Level Header */}
              <div className="flex items-center gap-3 mb-6">
                {data.icon}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${data.badge}`}
                >
                  {level} Care
                </span>
              </div>

              <h2
                className="text-2xl font-bold text-green-900 mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {level === "Easy" && "Beginner Friendly Plants"}
                {level === "Medium" && "Intermediate Plants"}
                {level === "Hard" && "Advanced Plants"}
              </h2>

              {/* Tips */}
              <div className="flex flex-col gap-4 mb-8">
                {data.tips.map((tip) => (
                  <div key={tip.title} className="flex items-start gap-3">
                    {tip.icon}
                    <div>
                      <p className="text-sm font-semibold text-green-900">
                        {tip.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                        {tip.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Plants in this level */}
              <div>
                <p className="text-xs font-semibold text-green-900 uppercase tracking-wide mb-3">
                  Plants in this category
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.plants.map((plant) => (
                    <span
                      key={plant}
                      className="text-xs bg-white/70 border border-green-200 text-green-900 px-3 py-1 rounded-full"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CareGuide;
