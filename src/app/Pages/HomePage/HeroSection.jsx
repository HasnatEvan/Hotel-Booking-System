import Image from "next/image";
import { FiSearch, FiTruck, FiCoffee, FiWind, FiShield } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative h-[100vh] sm:h-[95vh] md:h-[90vh] w-full">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hotel Hero"
          fill
          priority
          className="object-cover animate-zoom-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full -translate-y-12 sm:-translate-y-16 md:-translate-y-20 text-white px-4 sm:px-6 lg:px-8">
          {/* Rating */}
          <div className="flex gap-1 mb-2 sm:mb-3 text-yellow-400 text-xs sm:text-base lg:text-lg">
            ★ ★ ★ ★ ★
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-center leading-tight">
            Welcome to Kinsley
          </h1>

          {/* Subtitle */}
          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-5 sm:mb-6 md:mb-8 max-w-md sm:max-w-lg md:max-w-xl">
            Deliniti nostrum laboriosam praesentium quasi quam voluptate.
          </p>

          {/* ================= SEARCH BOX ================= */}
          <div
            className="
              bg-white text-gray-700
              rounded-2xl
              shadow-2xl
              px-3 sm:px-4 md:px-6 lg:px-8
              py-4
              flex flex-col md:flex-row
              gap-3 sm:gap-4
              w-full max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-6xl
            "
          >
            {/* Check-in */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 w-16 whitespace-nowrap">
                Check-in
              </span>
              <input
                type="date"
                className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-full w-full text-xs sm:text-sm"
              />
            </div>

            {/* Check-out */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 w-16 whitespace-nowrap">
                Check-out
              </span>
              <input
                type="date"
                className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-full w-full text-xs sm:text-sm"
              />
            </div>

            {/* Adults */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 w-14 whitespace-nowrap">
                Adults
              </span>
              <select className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-full w-full text-xs sm:text-sm">
                {Array.from({ length: 5 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div className="flex items-center gap-2 flex-1">
              <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 w-16 whitespace-nowrap">
                Children
              </span>
              <select className="bg-blue-50 px-3 py-2 sm:px-4 sm:py-3 rounded-full w-full text-xs sm:text-sm">
                {Array.from({ length: 6 }, (_, i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white h-11 sm:h-12 rounded-full flex items-center justify-center md:w-12 w-full">
              <FiSearch size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
     {/* ================= FEATURES ================= */}
<div className="relative bg-[#f6fbfb] pb-44 md:pb-10">
  {/* FLOATING CARDS – 20% LOWER */}
  <div
    className="
      absolute
      left-0
      right-0
      -top-12
      md:-top-16
      lg:-top-20
      z-20
    "
  >
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
      <Feature icon={<FiTruck />} title="Airport transfer" />
      <Feature icon={<FiCoffee />} title="All inclusive" />
      <Feature icon={<FiWind />} title="Air-conditioned" />
      <Feature icon={<FiShield />} title="Under protection" />
    </div>
  </div>

  {/* SPACE AFTER OVERLAP */}
  <div className="h-28 md:h-36"></div>
</div>

    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="bg-white rounded-2xl shadow-md min-h-[150px] sm:min-h-[160px] md:min-h-[180px] px-6 py-8 flex flex-col items-center justify-center gap-4 text-center">
    <div className="text-3xl md:text-4xl text-gray-600">{icon}</div>
    <p className="text-sm sm:text-base font-medium text-gray-700">
      {title}
    </p>
  </div>
);

export default HeroSection;
