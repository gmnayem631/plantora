import Link from "next/link";
import plants from "../../lib/plants";
import { FaTint } from "react-icons/fa";

const PlantOfTheWeek = () => {
  const plant = plants.find((p) => p.id === "4");

  return (
    <section
      className="py-24 px-6"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Spotlight
          </span>
          <h2
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Plant of the Week
          </h2>
        </div>

        {/* Card */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl overflow-hidden border border-green-100 shadow-sm">
          {/* Image */}
          <div className="w-full md:w-1/2 h-72 md:h-96">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-8 md:p-12 md:w-1/2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-900 rounded-full">
                {plant.type}
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                {plant.careLevel} Care
              </span>
            </div>

            <h3
              className="text-3xl font-bold text-green-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {plant.name}
            </h3>

            <p className="text-gray-500 leading-relaxed">{plant.description}</p>

            <div className="flex items-center gap-2 text-sm text-green-900">
              <span>
                <FaTint />
              </span>
              <span>
                Watering: <strong>{plant.watering}</strong>
              </span>
            </div>

            <Link
              href={`/plants/${plant.id}`}
              className="inline-block mt-2 px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-full transition-colors duration-200 text-center"
            >
              View Plant Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
