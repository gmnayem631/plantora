// app/items/[id]/page.jsx
import React from "react";
import Link from "next/link";
import plants from "../../../../lib/plants";
import { MdOutlineWaterDrop } from "react-icons/md";
import { LuLeaf } from "react-icons/lu";
import { FiArrowLeft } from "react-icons/fi";
import { TbPlant, TbSunHigh } from "react-icons/tb";

const PlantDetails = async ({ params }) => {
  const { id } = await params;

  const plant = plants.find((p) => p.id == id);

  // If plant not found
  if (!plant) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <LuLeaf size={48} className="text-green-200" />
        <h1
          className="text-2xl font-bold text-green-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Plant not found
        </h1>
        <Link
          href="/items"
          className="text-sm text-green-600 hover:text-green-500 border border-green-300 px-5 py-2 rounded-full transition-colors duration-200"
        >
          Back to Plants
        </Link>
      </main>
    );
  }

  // Related plants
  const related = plants.filter(
    (p) => p.type === plant.type && p.id !== plant.id,
  );

  const careColor =
    plant.careLevel === "Easy"
      ? "bg-green-100 text-green-700"
      : plant.careLevel === "Medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/items"
          className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-500 mb-10 transition-colors duration-200 group"
        >
          <FiArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-200"
          />
          Back to Plants
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/2 h-72 md:h-auto">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-5">
              {/* Badges */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium px-3 py-1 bg-green-50 text-green-600 border border-green-200 rounded-full">
                  {plant.type}
                </span>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${careColor}`}
                >
                  {plant.careLevel} Care
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl md:text-4xl font-bold text-green-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {plant.name}
              </h1>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {plant.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex flex-col gap-1 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-green-500">
                    <MdOutlineWaterDrop size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Watering
                    </span>
                  </div>
                  <p className="text-sm font-medium text-green-900">
                    {plant.watering}
                  </p>
                </div>

                <div className="flex flex-col gap-1 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-green-500">
                    <TbPlant size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Type
                    </span>
                  </div>
                  <p className="text-sm font-medium text-green-900">
                    {plant.type}
                  </p>
                </div>

                <div className="flex flex-col gap-1 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-green-500">
                    <LuLeaf size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Care Level
                    </span>
                  </div>
                  <p className="text-sm font-medium text-green-900">
                    {plant.careLevel}
                  </p>
                </div>

                <div className="flex flex-col gap-1 bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 text-green-500">
                    <TbSunHigh size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Category
                    </span>
                  </div>
                  <p className="text-sm font-medium text-green-900">
                    Indoor Plant
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="mt-2 w-full text-center text-sm font-semibold text-white bg-green-600 hover:bg-green-500 px-6 py-3 cursor-pointer rounded-full transition-colors duration-200">
                Add to My Collection
              </button>
            </div>
          </div>
        </div>

        {/* Related Plants */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl font-bold text-green-900 mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Related Plants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/plants/${r.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <span className="text-xs text-green-500 font-medium">
                      {r.type}
                    </span>
                    <h3
                      className="text-base font-bold text-green-900 group-hover:text-green-600 transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {r.name}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {r.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PlantDetails;
