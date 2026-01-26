import Image from "next/image";

const services = [
  { title: "Airport transfer", icon: "/images/About/f-1.png" },
  { title: "All inclusive", icon: "/images/About/f-2.png" },
  { title: "Air-conditioned", icon: "/images/About/f-3.png" },
  { title: "Under protection", icon: "/images/About/f-4 (1).png" },
  { title: "4 private pools", icon: "/images/About/f-5.png" },
  { title: "Free wi-fi", icon: "/images/About/f-6.png" },
  { title: "Smart TV", icon: "/images/About/f-7.png" },
  { title: "Laundry", icon: "/images/About/f-8.png" },
];

const Section2 = () => {
  return (
    <section className="bg-[#f6fbfb]  py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2c5c] mb-4">
            What We Offer For You
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
            ea delectus, sed voluptatem. Laborum accusantium libero commodi id
            officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
          </p>

          <button
            className="inline-flex items-center justify-center 
            px-8 sm:px-10 py-2.5 sm:py-3
            rounded-full bg-[#3f5efb] text-white text-sm sm:text-base
            font-medium shadow-md"
          >
            Services
          </button>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 
              flex flex-col items-center justify-center text-center 
              shadow-sm hover:shadow-md transition"
            >
              {/* ICON IMAGE */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="text-[#1f2c5c] text-sm sm:text-base font-medium">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section2;
