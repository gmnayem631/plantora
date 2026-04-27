"use client";

import { useState } from "react";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute";
import plants from "../../../../lib/plants";
import toast from "react-hot-toast";
import { TbPlant } from "react-icons/tb";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";

const ManagePlants = () => {
  const [myPlants, setMyPlants] = useState(plants);

  const handleDelete = (id) => {
    setMyPlants((prev) => prev.filter((p) => p.id !== id));
    toast.success("Plant removed from your collection.");
  };

  return (
    <PrivateRoute>
      <main
        className="min-h-screen px-6 py-16"
        style={{
          background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)",
        }}
      >
        <div className="max-w-11/12 mx-auto">
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1
                className="text-4xl font-bold text-green-900 mt-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                My Plants
              </h1>
            </div>

            {/* Add New Plant button */}
            <Link
              href="/plants/add-plant"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 self-start sm:self-auto"
            >
              <FiPlus size={16} />
              Add New Plant
            </Link>
          </div>

          {/* Plant List */}
          {myPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {myPlants.map((plant) => (
                <div
                  key={plant.id}
                  className="bg-white rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="h-44 overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
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
                      className="text-base font-bold text-green-900"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {plant.name}
                    </h2>

                    <p className="text-xs text-gray-400 line-clamp-2 flex-1">
                      {plant.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-green-600">
                      <MdOutlineWaterDrop size={14} />
                      <span>{plant.watering}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-4 pb-4 flex gap-2">
                    <Link
                      href={`/plants/${plant.id}`}
                      className="flex-1 text-center text-xs font-semibold text-green-700 border border-green-200 hover:bg-green-50 px-3 py-2 rounded-full transition-colors duration-200"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(plant.id)}
                      className="flex items-center justify-center gap-1.5 text-xs font-semibold text-red-500 border border-red-200 hover:bg-red-50 px-3 py-2 rounded-full transition-colors duration-200"
                    >
                      <FiTrash2 size={13} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty state — when all plants are deleted
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
              <TbPlant size={48} className="text-green-200" />
              <h3
                className="text-lg font-semibold text-green-800"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                No plants yet
              </h3>
              <p className="text-sm text-gray-400">
                Your collection is empty. Add your first plant!
              </p>
              <Link
                href="/plants/add"
                className="mt-2 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                <FiPlus size={16} />
                Add Plant
              </Link>
            </div>
          )}
        </div>
      </main>
    </PrivateRoute>
  );
};

export default ManagePlants;
