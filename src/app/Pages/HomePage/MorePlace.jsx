"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const places = [
  { img: "/images/MorePlace/about-1.jpg", label: "View from the sea" },
  { img: "/images/MorePlace/about-2.jpg", label: "East terrace" },
  { img: "/images/MorePlace/about-3.jpg", label: "Luxury bedroom" },
  { img: "/images/MorePlace/about-4.jpg", label: "Private pool" },
];

export default function MorePlacesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-[#f2fbf9]">
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2d3954] mb-4">
            Kinsley is Waiting for You!
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
            ea delectus, sed voluptatem. Laborum accusantium libero commodi id
            officiis itaque esse adipisci.
          </p>

          <Link
            href="/places"
            className="inline-block bg-[#4c6ef5] hover:bg-blue-700 transition text-white px-10 py-3.5 rounded-full text-sm font-semibold shadow-md"
          >
            More our places
          </Link>
        </div>

        {/* ===== SLIDER ===== */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 sm:gap-6 lg:gap-8"
          >
            <div className="hidden lg:block min-w-[15%]" />

            {places.map((place, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[60%] md:min-w-[48%] lg:min-w-[36%] snap-start "
              >
                <div
                  className="relative rounded-xl overflow-hidden border-[6px] border-white shadow-md group bg-white
                             aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[16/9]"
                >
                  {/* IMAGE */}
                  <Image
                    src={place.img}
                    alt={place.label}
                    fill
                    priority={index === 0}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold px-4 py-2 bg-black/50 rounded-md">
                      {place.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== ARROWS ===== */}
          <div className="absolute -bottom-14 sm:-bottom-16 -right-0 -sm:right-10 flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4c6ef5] text-white shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4c6ef5] text-white shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
