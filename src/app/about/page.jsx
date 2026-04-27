import Link from "next/link";
import { LuLeaf } from "react-icons/lu";
import { TbPlant, TbSunHigh } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const stats = [
  {
    icon: <TbPlant size={32} className="text-green-500" />,
    value: "12+",
    label: "Plants Listed",
  },
  {
    icon: <MdOutlineWaterDrop size={32} className="text-green-500" />,
    value: "3",
    label: "Care Levels",
  },
  {
    icon: <TbSunHigh size={32} className="text-green-500" />,
    value: "8",
    label: "Plant Types",
  },
  {
    icon: <FiUsers size={32} className="text-green-500" />,
    value: "100%",
    label: "Indoor Friendly",
  },
];

const team = [
  {
    name: "Your Name",
    role: "Creator & Plant Lover",
    avatar: "https://api.dicebear.com/7.x/thumbs/svg?seed=plantora",
  },
];

const About = () => {
  return (
    <main
      className="min-h-screen px-6 py-16"
      style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 40%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
            Our Story
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-green-900 mt-2 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            About Plantora
          </h1>
          <p className="text-green-800/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Plantora was born from a simple love of indoor plants and the desire
            to make plant care accessible to everyone — from first-time plant
            parents to seasoned green thumbs.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-10 md:p-14 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <LuLeaf size={20} className="text-green-500" />
            <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
              Our Mission
            </span>
          </div>
          <h2
            className="text-2xl font-bold text-green-900 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Bringing greenery into everyday life
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            We believe that everyone deserves a little green in their life.
            Indoor plants do not just beautify a space — they improve air
            quality, reduce stress, and bring a sense of calm to any room.
            Plantora helps you discover the right plants for your lifestyle and
            keep them thriving with simple, clear care guides.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Whether you are looking for a low-maintenance succulent or a bold
            tropical statement piece, Plantora has something for you. Browse our
            collection, track your plants, and grow your indoor garden one leaf
            at a time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-green-50 rounded-2xl border border-green-100 p-6 flex flex-col items-center gap-2 text-center hover:border-green-300 hover:shadow-md transition-all duration-300"
            >
              {s.icon}
              <span
                className="text-3xl font-bold text-green-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {s.value}
              </span>
              <span className="text-sm text-gray-400">{s.label}</span>
            </div>
          ))}
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-10 md:p-14 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <TbPlant size={20} className="text-green-500" />
            <span className="text-xs font-semibold tracking-widest text-green-500 uppercase">
              What We Offer
            </span>
          </div>
          <h2
            className="text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Everything your plant collection needs
          </h2>
          <ul className="flex flex-col gap-4">
            {[
              {
                icon: (
                  <TbPlant
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                ),
                text: "Browse a curated collection of 12+ indoor plants with detailed care guides.",
              },
              {
                icon: (
                  <MdOutlineWaterDrop
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                ),
                text: "Filter by care level and plant type to find the perfect match for your space.",
              },
              {
                icon: (
                  <LuLeaf
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                ),
                text: "Add your own plants and manage your personal indoor collection.",
              },
              {
                icon: (
                  <TbSunHigh
                    size={18}
                    className="text-green-500 shrink-0 mt-0.5"
                  />
                ),
                text: "Beginner-friendly care guides for Easy, Medium, and Hard care levels.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {item.icon}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)",
          }}
        >
          <h2
            className="text-2xl font-bold text-green-900 mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to grow your collection?
          </h2>
          <p className="text-green-800/60 mb-6 text-sm">
            Browse our plant library and start building your personal indoor
            garden today.
          </p>
          <Link
            href="/plants"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-full transition-colors duration-200"
          >
            Explore Plants
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
