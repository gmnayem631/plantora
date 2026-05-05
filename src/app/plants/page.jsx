"use client";

import { useState } from "react";
import plants from "../../../lib/plants";
import { FiSearch } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import PlantCard from "@/components/PlantCard";

const careLevels = ["All", "Easy", "Medium", "Hard"];
const types = [
  "All",
  "Succulent",
  "Vine",
  "Foliage",
  "Tropical",
  "Grass-like",
  "Flowering",
  "Tree",
];

const Items = () => {
  const [search, setSearch] = useState("");
  const [selectedCare, setSelectedCare] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = plants.filter((plant) => {
    const matchesSearch = plant.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCare =
      selectedCare === "All" || plant.careLevel === selectedCare;
    const matchesType = selectedType === "All" || plant.type === selectedType;
    return matchesSearch && matchesCare && matchesType;
  });

  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Browse
          </span>
          <h1
            className="text-4xl font-bold text-green-900 mt-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            All Plants
          </h1>
          <p className="text-green-800/60 mt-3 max-w-md mx-auto">
            Explore our full indoor plant collection. Filter by care level or
            type to find your perfect match.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2.5 flex-1 shadow-sm">
            <FiSearch size={16} className="text-green-400 shrink-0" />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-green-900 placeholder-green-400 outline-none w-full"
            />
          </div>

          {/* Care Level Filter */}
          <div className="flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2.5 shadow-sm">
            <LuLeaf size={16} className="text-green-400 shrink-0" />
            <select
              value={selectedCare}
              onChange={(e) => setSelectedCare(e.target.value)}
              className="bg-transparent text-sm text-green-900 outline-none cursor-pointer"
            >
              {careLevels.map((level) => (
                <option key={level} value={level}>
                  {level === "All" ? "Care Level" : level}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2.5 shadow-sm">
            <MdOutlineWaterDrop size={16} className="text-green-400 shrink-0" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-transparent text-sm text-green-900 outline-none cursor-pointer"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === "All" ? "Plant Type" : type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((plant) => (
              <PlantCard key={plant.id} plant={plant}></PlantCard>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <LuLeaf size={48} className="text-green-200" />
            <h3
              className="text-lg font-semibold text-green-800"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              No plants found
            </h3>
            <p className="text-sm text-gray-400">
              Try adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCare("All");
                setSelectedType("All");
              }}
              className="mt-2 text-sm font-medium text-green-600 hover:text-(--primary-hover) border border-green-300 px-5 py-2 cursor-pointer rounded-full transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Items;
