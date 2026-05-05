import Link from "next/link";
import Image from "next/image";
import plants from "../../lib/plants";

const FeaturedPlants = () => {
  const featured = plants.slice(0, 4);

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Our Collection
          </span>
          <h2
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Featured Plants
          </h2>
          <p className="text-green-800/60 mt-3 max-w-md mx-auto">
            A handpicked selection from our growing indoor collection.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((plant) => (
            <Link
              key={plant.id}
              href={`/plants/${plant.id}`}
              className="group rounded-2xl overflow-hidden border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-green-500 font-medium">
                    {plant.type}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      plant.careLevel === "Easy"
                        ? "bg-green-100 text-green-900"
                        : plant.careLevel === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {plant.careLevel}
                  </span>
                </div>
                <h3
                  className="text-base font-bold text-green-900 group-hover:text-green-600 transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {plant.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {plant.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/plants"
            className="inline-block px-8 py-3 border border-green-400 text-green-900 hover:bg-green-600 hover:text-white text-sm font-semibold rounded-full transition-all duration-200"
          >
            View All Plants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;
