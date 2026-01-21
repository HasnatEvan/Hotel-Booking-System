import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-[#f6fbfb]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Card Wrapper */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Top Left Image */}
          <div className="relative h-72 md:h-full overflow-hidden group">
            <Image
              src="/images/about-1.jpg"
              alt="Hotel experience"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Top Right Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              We have 17+ years <br /> of Experience
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>

            <Link
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-6 py-3 rounded-full w-fit"
            >
              More about us
            </Link>
          </div>

          {/* Bottom Left Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-none">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Start your Amazing <br /> Adventure!
            </h3>

            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
              fugit ea delectus, sed voluptatem. Laborum accusantium libero
              commodi id officiis itaque esse adipisci, necessitatibus
              asperiores, illo odio.
            </p>

            <Link
              href="/rooms"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-6 py-3 rounded-full w-fit"
            >
              Choose a room
            </Link>
          </div>

          {/* Bottom Right Image */}
          <div className="relative h-72 md:h-full overflow-hidden group order-1 md:order-none">
            <Image
              src="/images/about-2.jpg"
              alt="Luxury hotel"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
