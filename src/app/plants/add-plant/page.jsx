"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import PrivateRoute from "@/components/PrivateRoute";
import { LuLeaf } from "react-icons/lu";
import { TbPlant } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiImage, FiFileText, FiAlignLeft } from "react-icons/fi";

// Dropdown options
const careOptions = ["Easy", "Medium", "Hard"];
const typeOptions = [
  "Succulent",
  "Vine",
  "Foliage",
  "Tropical",
  "Grass-like",
  "Flowering",
  "Tree",
];

const AddPlant = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const newPlant = {
      name: formData.get("name"),
      description: formData.get("description"),
      fullDescription: formData.get("fullDescription"),
      careLevel: formData.get("careLevel"),
      type: formData.get("type"),
      watering: formData.get("watering"),
      image: formData.get("image"),
    };

    // Reset the form
    e.target.reset();

    // success toast
    toast.success("Plant added to your collection!");

    setLoading(false);
  };

  return (
    <PrivateRoute>
      <main
        className="min-h-screen px-6 py-16"
        style={{
          background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <h1
              className="text-4xl font-bold text-green-900 mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Add New Plant
            </h1>
            <p className="text-green-800/60 mt-2 text-sm">
              Fill in the details below to add a plant to your collection.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Plant Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Plant Name
                </label>
                <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                  <TbPlant size={18} className="text-green-900 shrink-0" />
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Monstera Deliciosa"
                    required
                    className="bg-transparent text-sm text-green-900 placeholder-green-800 outline-none w-full"
                  />
                </div>
              </div>

              {/* Short Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Short Description
                </label>
                <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                  <FiFileText size={18} className="text-green-900 shrink-0" />
                  <input
                    type="text"
                    name="description"
                    placeholder="One-line summary of the plant"
                    required
                    className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full"
                  />
                </div>
              </div>

              {/* Full Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Full Description
                </label>
                <div className="flex items-start gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                  <FiAlignLeft
                    size={18}
                    className="text-green-900 shrink-0 mt-0.5"
                  />
                  <textarea
                    name="fullDescription"
                    placeholder="Detailed description, care tips, origin..."
                    rows={4}
                    className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full resize-none"
                  />
                </div>
              </div>

              {/* Care Level + Type — side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Care Level */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                    Care Level
                  </label>
                  <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                    <LuLeaf size={18} className="text-green-900 shrink-0" />
                    <select
                      name="careLevel"
                      required
                      className="bg-transparent text-sm text-green-900 outline-none w-full cursor-pointer"
                    >
                      <option value="">Select</option>
                      {careOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Plant Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                    Plant Type
                  </label>
                  <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                    <TbPlant size={18} className="text-green-900 shrink-0" />
                    <select
                      name="type"
                      required
                      className="bg-transparent text-sm text-green-900 outline-none w-full cursor-pointer"
                    >
                      <option value="">Select</option>
                      {typeOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Watering Schedule */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Watering Schedule
                </label>
                <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                  <MdOutlineWaterDrop
                    size={18}
                    className="text-green-900 shrink-0"
                  />
                  <input
                    type="text"
                    name="watering"
                    placeholder="e.g. Every 1-2 weeks"
                    required
                    className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full"
                  />
                </div>
              </div>

              {/* Image URL — optional */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Image URL{" "}
                  <span className="normal-case text-green-400 font-normal">
                    (optional)
                  </span>
                </label>
                <div className="flex items-center gap-3 border border-green-200 rounded-2xl px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
                  <FiImage size={18} className="text-green-900 shrink-0" />
                  <input
                    type="url"
                    name="image"
                    placeholder="https://example.com/plant.jpg"
                    className="bg-transparent text-sm text-green-900 placeholder-green-900 outline-none w-full"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white text-sm font-semibold py-3.5 rounded-full cursor-pointer transition-colors duration-200 mt-2"
              >
                {loading ? "Adding..." : "Add to Collection"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </PrivateRoute>
  );
};

export default AddPlant;
