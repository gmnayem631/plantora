import React from "react";
import Link from "next/link";
import { MdOutlineWaterDrop } from "react-icons/md";

const PlantCard = ({ plant }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-green-500 font-medium">
            {plant.type}
          </span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              plant.careLevel === "Easy"
                ? "bg-green-100 text-green-700"
                : plant.careLevel === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {plant.careLevel}
          </span>
        </div>

        <h2
          className="text-lg font-bold text-green-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {plant.name}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {plant.description}
        </p>

        <div className="flex items-center gap-1.5 text-xs text-green-600">
          <MdOutlineWaterDrop size={14} />
          <span>{plant.watering}</span>
        </div>

        <Link
          href={`/plants/${plant.id}`}
          className="mt-1 w-full text-center text-sm font-semibold text-white bg-green-600 hover:bg-green-500 px-4 py-2.5 cursor-pointer rounded-full transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
