import { FaSeedling, FaSearch, FaTint, FaHome } from "react-icons/fa";

const features = [
  {
    icon: <FaSeedling />,
    title: "Track Your Collection",
    description:
      "Keep a personal log of every plant you own — care notes, watering schedules, and more.",
  },
  {
    icon: <FaSearch />,
    title: "Discover New Plants",
    description:
      "Browse our curated plant library filtered by type, care level, and your lifestyle.",
  },
  {
    icon: <FaTint />,
    title: "Never Miss Watering",
    description:
      "Each plant has a clear watering guide so your greens stay healthy year-round.",
  },
  {
    icon: <FaHome />,
    title: "Built for Indoors",
    description:
      "Every plant in Plantora is suited for indoor spaces — apartments, offices, and homes.",
  },
];

const WhyPlantora = () => {
  return (
    <section
      className="py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-11/12 mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Why Choose Us
          </span>
          <h2
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why Plantora?
          </h2>
          <p className="text-green-800/60 mt-3 max-w-md mx-auto">
            Everything you need to grow a thriving indoor garden — in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 shadow-sm rounded-2xl p-6 border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300 flex flex-col gap-3"
            >
              <span className="text-3xl text-green-600">{f.icon}</span>

              <h3
                className="text-lg font-bold text-green-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {f.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPlantora;
