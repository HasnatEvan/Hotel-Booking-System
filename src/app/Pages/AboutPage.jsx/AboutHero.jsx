
import Link from "next/link";
const AboutHero = () => {
   return (
    <section
      className="relative w-full bg-[#f6fbfb] mt-16 overflow-hidden
      py-20 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute -left-40 top-1/2 
          h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]
          -translate-y-1/2 rounded-full bg-white blur-3xl"
        />

        <div
          className="absolute -right-40 top-1/3 
          h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]
          rounded-full bg-white blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1
          className="font-extrabold text-[#2d3954] mb-5
          text-3xl sm:text-4xl md:text-5xl lg:text-[56px]"
        >
          Get in Touch
        </h1>

        {/* Breadcrumb */}
        <div className="bg-white rounded-full p-1 sm:p-2 shadow-sm">
          <div
            className="flex items-center gap-2
            bg-[#f4a43a] text-white rounded-full font-medium
            px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm"
          >
            <Link
              href="/"
              className="opacity-90 hover:opacity-100 transition hover:underline"
            >
              Home
            </Link>
            <span>›</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;