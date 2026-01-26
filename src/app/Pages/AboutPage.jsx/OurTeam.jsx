import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const teamMembers = [
  { name: "Emma Newman", role: "Chief Administrator", img: "/images/About/team-1.jpg" },
  { name: "Paul Trueman", role: "Surfing coach", img: "/images/About/team-2.jpg" },
  { name: "Viktoria Freeman", role: "Masseur", img: "/images/About/team-3.jpg" },
  { name: "Sofia Oldman", role: "Maid", img: "/images/About/team-4.jpg" },
];

const OurTeam = () => {
  return (
    <section className="bg-[#f6fbfb] py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1f2c5c] mb-4">
            Our awesome Team
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
            ea delectus, sed voluptatem. Laborum accusantium libero commodi id
            officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE (Mobile full image, Desktop cover) */}
              <div
                className="
                  relative w-full 
                  aspect-[3/4]              /* keeps full image ratio on mobile */
                  sm:h-[240px]               /* tablet+ fixed height */
                  rounded-xl overflow-hidden mb-5 sm:mb-6
                "
              >
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="
                    object-contain            /* MOBILE: show full image */
                    sm:object-cover           /* DESKTOP: nice cover */
                    bg-white
                  "
                />
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-[#1f2c5c] mb-1">
                {m.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-5 sm:mb-6">
                {m.role}
              </p>

              <div className="flex justify-center gap-3">
                {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                  <span
                    key={idx}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#eef9f8]
                    flex items-center justify-center text-gray-600
                    hover:bg-[#3f5efb] hover:text-white transition cursor-pointer"
                  >
                    <Icon className="text-xs sm:text-sm" />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
