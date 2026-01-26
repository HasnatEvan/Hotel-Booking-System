"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const reviews = [
  {
    name: "Oscar Newman",
    country: "From Poland",
    img: "/images/users/user-1.jpg",
    text: "Dequi folores dolor sit amet, consectetur adipisicing elit. Nesciunt illo, delectus totam!",
  },
  {
    name: "Emma Trueman",
    country: "From Poland",
    img: "/images/users/user-2.jpg",
    text: "Nesciunt illo, delectus totam! Delectus illo magnam voluptatem a tempora id vitae dolor.",
  },
  {
    name: "Viktoria Freeman",
    country: "From Ukraine",
    img: "/images/users/user-3.jpg",
    text: "Consectetur adipisicing elit. Quis natus iusto molestiae ab nam error vero possimus.",
  },
  {
    name: "John Carter",
    country: "From USA",
    img: "/images/users/user-4.jpg",
    text: "Voluptatem a tempora id vitae dolor, quis natus iusto molestiae.",
  },
];

export default function Feedback() {
  const [active, setActive] = useState(0);

  const total = reviews.length;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <section className="bg-[#f4fbfb] w-full py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-12 text-center">
        {/* ===== TITLE ===== */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2d3954] mb-4">
          What Our Guests Say
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#6b7cff] mb-12 md:mb-20 leading-relaxed">
          Real feedback from our happy guests. Their experiences drive us to offer
          the best services.
        </p>

        {/* ===== MOBILE SLIDER ===== */}
        <div className="md:hidden relative flex items-center justify-center">
          <button
            onClick={() => setActive(prev)}
            className="absolute left-0 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500
                       text-white flex items-center justify-center shadow-lg z-10"
          >
            <FiArrowLeft />
          </button>

          <div className="w-full mx-4">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <img
                src={reviews[active].img}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-200"
                alt={reviews[active].name}
              />
              <h4 className="font-semibold text-lg">{reviews[active].name}</h4>
              <p className="text-xs text-gray-500 mb-4">
                {reviews[active].country}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reviews[active].text}
              </p>
            </div>
          </div>

          <button
            onClick={() => setActive(next)}
            className="absolute right-0 top-1/2 -translate-y-1/2
                       w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500
                       text-white flex items-center justify-center shadow-lg z-10"
          >
            <FiArrowRight />
          </button>
        </div>

        {/* ===== DESKTOP & TABLET ===== */}
        <div className="hidden md:flex flex-col items-center w-full">
          {/* ===== PROFILES ===== */}
          <div className="relative flex items-center justify-center mb-16 w-full">
            {/* PREVIOUS */}
            <div className="absolute left-0 opacity-50 scale-90">
              <img
                src={reviews[prev].img}
                className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
                alt={reviews[prev].name}
              />
              <h4 className="mt-2 font-semibold text-sm">
                {reviews[prev].name}
              </h4>
              <p className="text-xs text-gray-500">
                {reviews[prev].country}
              </p>
            </div>

            {/* ACTIVE */}
            <div className="z-10 text-center">
              <img
                src={reviews[active].img}
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-400 p-1 shadow-xl"
                alt={reviews[active].name}
              />
              <h4 className="mt-4 font-bold text-xl">
                {reviews[active].name}
              </h4>
              <p className="text-gray-500">{reviews[active].country}</p>
            </div>

            {/* NEXT */}
            <div className="absolute right-0 opacity-50 scale-90">
              <img
                src={reviews[next].img}
                className="w-20 h-20 rounded-full mx-auto border-2 border-gray-200"
                alt={reviews[next].name}
              />
              <h4 className="mt-2 font-semibold text-sm">
                {reviews[next].name}
              </h4>
              <p className="text-xs text-gray-500">
                {reviews[next].country}
              </p>
            </div>
          </div>

          {/* ===== ARROWS (INSIDE max-w-6xl) ===== */}
          <div className="flex gap-6 mb-14">
            <button
              onClick={() => setActive(prev)}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500
                         text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={() => setActive(next)}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500
                         text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
              <FiArrowRight />
            </button>
          </div>

          {/* ===== TEXT CARDS ===== */}
          <div className="grid grid-cols-3 gap-8 w-full">
            <div className="bg-white p-6 rounded-3xl opacity-60 shadow-sm">
              {reviews[prev].text}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl leading-relaxed">
              {reviews[active].text}
            </div>

            <div className="bg-white p-6 rounded-3xl opacity-60 shadow-sm">
              {reviews[next].text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
