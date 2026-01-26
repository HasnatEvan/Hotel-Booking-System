import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative bg-[#f6fbfb]  py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* MAIN WHITE FRAME */}
        <div className="relative bg-white rounded-2xl p-6 md:p-12">

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

            {/* LEFT IMAGE */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[420px] md:h-[460px] shrink-0">
              <Image
                src="/images/About/author.png"
                alt="Emma Freeman"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 relative w-full">

              {/* QUOTE BOX */}
              <div className="relative bg-white rounded-xl shadow-lg px-6 sm:px-10 md:px-12 py-8 md:py-10 max-w-full lg:max-w-[520px]">

                {/* top decoration */}
                <div className="absolute -top-4 left-6 sm:left-10 md:left-12 flex gap-1">
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                </div>

                <p className="text-[#6b7280] leading-relaxed text-[14px] sm:text-[15px]">
                  Everyone would like to be treated like at home in the hotel, and at home –
                  like in a hotel. Hospitality is a quality that is made up of primeval
                  simplicity and antique grandeur.
                </p>

                {/* bottom decoration */}
                <div className="absolute -bottom-4 right-6 sm:right-10 md:right-12 flex gap-1">
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                  <span className="w-[3px] h-6 bg-orange-400"></span>
                </div>
              </div>

              {/* NAME */}
              <div className="mt-8 md:mt-10 text-center lg:text-left">
                <h4 className="text-lg font-semibold text-[#1f2c5c]">
                  Emma Freeman
                </h4>
                <p className="text-sm text-gray-500">Top Manager</p>
              </div>

            </div>
          </div>

          {/* SIGNATURE IMAGE */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-16 w-[120px] md:w-[140px] h-[40px] md:h-[50px]">
            <Image
              src="/images/About/signature.png"
              alt="Signature"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section1;
