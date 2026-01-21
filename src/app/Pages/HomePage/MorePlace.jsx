"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";

const places = [
  { img: "/images/MorePlace/about-1.jpg", label: "View from the sea" },
  { img: "/images/MorePlace/about-2.jpg", label: "East terrace" },
  { img: "/images/MorePlace/about-3.jpg", label: "West terrace" },
  { img: "/images/MorePlace/about-4.jpg", label: "Pool side" },
  { img: "/images/MorePlace/about-5.jpg", label: "Luxury room" },
  { img: "/images/MorePlace/about-6.jpg", label: "Restaurant" },
  { img: "/images/MorePlace/about-7.jpg", label: "Mountain view" },
  { img: "/images/MorePlace/about-8.jpg", label: "Private beach" },
];

const MorePlace = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 120;
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;

    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-[#f6fbfb] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2d3954] mb-4">
            Kinsley is Waiting for You!
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit.
          </p>

          <Link
            href="/places"
            className="inline-block bg-[#4c6ef5] hover:bg-blue-700 text-white px-8 sm:px-10 py-3.5 rounded-full text-sm font-semibold shadow-md"
          >
            More our places
          </Link>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 sm:px-6 lg:px-0"
        >
          <div className="hidden lg:block min-w-[15%]"></div>

          {places.map((place, index) => (
            <div
              key={index}
              className="min-w-[90%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[36%] snap-start"
            >
              <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[460px] rounded-xl overflow-hidden border-[8px] border-white shadow-sm group">
                <Image
                  src={place.img}
                  alt={place.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <span className="absolute top-4 right-4 bg-[#f3a44b] text-white text-[11px] px-3 py-1.5 rounded-md">
                  {place.label}
                </span>

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center">
                    <FiSearch size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS – FULL RIGHT */}
      <div className="absolute -bottom-12 sm:-bottom-16 right-0 pr-4 sm:pr-6 lg:pr-12 flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full bg-[#4c6ef5] text-white shadow-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full bg-[#4c6ef5] text-white shadow-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MorePlace;
