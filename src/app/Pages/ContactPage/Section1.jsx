import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

const Section1 = () => {
  return (
    <section className="w-full bg-[#f6fbfb] py-20 relative">
      {/* Zigzag top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[linear-gradient(135deg,transparent_75%,#eef9f8_75%),linear-gradient(225deg,transparent_75%,#eef9f8_75%)] bg-[length:20px_20px]" />

      {/* Cards wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-[#eef9f8] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4 text-[#7b7fa6] text-3xl">
                <FiMapPin />
              </div>
              <h4 className="font-semibold text-[#2d3954] mb-2">
                Welcome
              </h4>
              <p className="text-sm text-[#7b7fa6]">
                Santo Domingo 9479 Magarto st.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#eef9f8] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4 text-[#7b7fa6] text-3xl">
                <FiPhoneCall />
              </div>
              <h4 className="font-semibold text-[#2d3954] mb-2">
                Call
              </h4>
              <p className="text-sm text-[#7b7fa6]">
                +93 (736) 6X8 84 84
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#eef9f8] rounded-xl p-8 text-center">
              <div className="flex justify-center mb-4 text-[#7b7fa6] text-3xl">
                <FiMail />
              </div>
              <h4 className="font-semibold text-[#2d3954] mb-2">
                Write
              </h4>
              <p className="text-sm text-[#7b7fa6]">
                kinsley.inbox@mail.com
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Zigzag bottom */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[linear-gradient(315deg,transparent_75%,#eef9f8_75%),linear-gradient(45deg,transparent_75%,#eef9f8_75%)] bg-[length:20px_20px]" />
    </section>
  );
};

export default Section1;
