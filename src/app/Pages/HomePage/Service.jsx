"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  { title: "Gym", img: "/images/Service/service-1.jpg", price: "Free" },
  {
    title: "Pool",
    img: "/images/Service/service-2.jpg",
    price: "€10 / Per Instance / Per Guest",
  },
  { title: "Lounge bar", img: "/images/Service/service-6.jpg", price: "Free" },
];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const wrapperRef = useRef();

  // Toggle card on click
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Close card if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-[#f2fbf9] py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Around The Hotel
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus,
          sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci,
          necessitatibus asperiores, illo odio.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition">
          Services
        </button>
      </div>

      {/* Cards */}
      <div
        ref={wrapperRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
      >
        {services.map((item, i) => {
          const isOpen = activeIndex === i;

          return (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden p-3 group"
            >
              {/* Badge */}
              <span className="absolute top-6 right-6 bg-green-500 text-white text-xs px-4 py-1 rounded z-20">
                {item.price}
              </span>

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[440px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Title (CLICK AREA) */}
              <button
                onClick={() => handleToggle(i)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2
                           bg-white w-[85%] max-w-[420px] py-5 rounded-xl shadow
                           text-lg font-semibold text-gray-800 transition hover:scale-105"
              >
                {item.title}
              </button>

              {/* Open White Card */}
              <div
                className={`
                  absolute left-6 right-6 bottom-6
                  bg-white rounded-2xl shadow-2xl
                  text-center px-8 py-10
                  transition-all duration-500 ease-out
                  ${isOpen ? "opacity-100 translate-y-0 z-50" : "opacity-0 translate-y-10 pointer-events-none z-0"}
                `}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  Image for cattle earth. May one Which life divide sea.
                  Commodi soluta minima nemo,...
                </p>

                <button className="bg-blue-600 text-white px-10 py-3 rounded-full text-sm hover:bg-blue-700 transition shadow-md hover:shadow-lg">
                  Read more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
