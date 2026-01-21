"use client";

import { useEffect, useRef, useState } from "react";
import { FiHome, FiGrid, FiSun, FiUsers } from "react-icons/fi";

/* ---------- Single Stat Card ---------- */
const StatCard = ({ value, label, Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const duration = 1500;
          const increment = value / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="bg-[#eefafa] rounded-2xl py-5 sm:py-6 text-center flex flex-col items-center"
    >
      {/* ICON */}
      <div className="mb-2 sm:mb-3 text-[#6b7cff]">
        <Icon size={26} strokeWidth={1.5} />
      </div>

      {/* NUMBER (ONE-TIME TICKER) */}
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2d3954] mb-1 tracking-wide">
        {count.toLocaleString()}
      </h3>

      {/* LABEL */}
      <p className="text-[#4f5d75] font-medium text-xs sm:text-sm">
        {label}
      </p>
    </div>
  );
};

/* ---------- Section ---------- */
const Section1 = () => {
  const stats = [
    { value: 4, label: "Hotels", icon: FiHome },
    { value: 127, label: "Rooms", icon: FiGrid },
    { value: 6, label: "Beaches", icon: FiSun },
    { value: 4586, label: "Guests", icon: FiUsers },
  ];

  return (
    <section className="bg-[#f6fbfb] py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                value={item.value}
                label={item.label}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
