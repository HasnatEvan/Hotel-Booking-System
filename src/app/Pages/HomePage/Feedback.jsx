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
  const [direction, setDirection] = useState("right");

  const total = reviews.length;
  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <section className="bg-[#f4fbfb] py-10 overflow-hidden w-full">
      {/* ❌ NO max-width */}
      <div className="px-4 md:px-12 text-center w-full">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#2d3954] mb-4">
          Feedback from our Guests
        </h2>

        <p className="max-w-2xl mx-auto text-sm text-[#6b7cff] mb-12 md:mb-24">
          Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus.
        </p>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden relative w-full">

          <button
            onClick={() => {
              setDirection("left");
              setActive(prev);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-blue-500 text-white
            flex items-center justify-center shadow-lg z-10"
          >
            <FiArrowLeft />
          </button>

          <div
            key={active}
            className={`bg-white p-6 rounded-2xl shadow-xl mx-12
              ${direction === "right"
                ? "animate-card-right"
                : "animate-card-left"}
            `}
          >
            <img
              src={reviews[active].img}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt={reviews[active].name}
            />
            <h4 className="font-semibold">{reviews[active].name}</h4>
            <p className="text-xs text-gray-500 mb-4">
              {reviews[active].country}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {reviews[active].text}
            </p>
          </div>

          <button
            onClick={() => {
              setDirection("right");
              setActive(next);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full bg-blue-500 text-white
            flex items-center justify-center shadow-lg z-10"
          >
            <FiArrowRight />
          </button>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block w-full">

          {/* PROFILES */}
          <div className="relative flex items-center justify-between mb-16 w-full">

            <div className="opacity-60 text-center">
              <img
                src={reviews[prev].img}
                className="w-20 h-20 rounded-full mx-auto"
                alt={reviews[prev].name}
              />
              <h4 className="mt-4 font-semibold">{reviews[prev].name}</h4>
              <p className="text-xs text-gray-500">{reviews[prev].country}</p>
            </div>

            <button
              onClick={() => {
                setDirection("left");
                setActive(prev);
              }}
              className="absolute left-[30%] top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full bg-blue-500 text-white
              flex items-center justify-center shadow-lg"
            >
              <FiArrowLeft />
            </button>

            <div
              key={active}
              className={`text-center ${
                direction === "right"
                  ? "animate-profile-right"
                  : "animate-profile-left"
              }`}
            >
              <img
                src={reviews[active].img}
                className="w-24 h-24 rounded-full mx-auto"
                alt={reviews[active].name}
              />
              <h4 className="mt-4 font-semibold">{reviews[active].name}</h4>
              <p className="text-sm text-gray-500">{reviews[active].country}</p>
            </div>

            <button
              onClick={() => {
                setDirection("right");
                setActive(next);
              }}
              className="absolute right-[30%] top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full bg-blue-500 text-white
              flex items-center justify-center shadow-lg"
            >
              <FiArrowRight />
            </button>

            <div className="opacity-60 text-center">
              <img
                src={reviews[next].img}
                className="w-20 h-20 rounded-full mx-auto"
                alt={reviews[next].name}
              />
              <h4 className="mt-4 font-semibold">{reviews[next].name}</h4>
              <p className="text-xs text-gray-500">{reviews[next].country}</p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-3 gap-10 w-full">

            <div className="bg-white p-8 rounded-2xl opacity-60">
              <p className="text-sm">{reviews[prev].text}</p>
            </div>

            <div
              className={`bg-white p-10 rounded-2xl shadow-xl
                ${direction === "right"
                  ? "animate-card-right"
                  : "animate-card-left"}
              `}
            >
              <p className="text-sm leading-relaxed">
                {reviews[active].text}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl opacity-60">
              <p className="text-sm">{reviews[next].text}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
