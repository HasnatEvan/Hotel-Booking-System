const ContactForm = () => {
  return (
    <section
      className="relative w-full bg-[#f6fbfb] overflow-hidden
      py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2
            className="font-extrabold text-[#2d3954] mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-[42px]"
          >
            Kinsley is Waiting for You!
          </h2>

          <p
            className="max-w-3xl mx-auto leading-relaxed text-[#7b7fa6]
            text-sm sm:text-base"
          >
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus,
            sed voluptatem. Laborum accusantium libero commodi id officiis itaque esse adipisci,
            necessitatibus asperiores, illo odio.
          </p>

          {/* Button */}
          <div className="mt-6 sm:mt-8">
            <button
              className="bg-[#3b5ddd] text-white font-medium rounded-full shadow-md
              px-6 py-2.5 sm:px-8 sm:py-3
              hover:bg-[#2f4fd3] transition"
            >
              More about us
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-5 sm:space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl bg-white text-[#2d3954]
              px-4 sm:px-6 py-3 sm:py-4 text-sm
              placeholder-[#7b7fa6] outline-none
              focus:ring-2 focus:ring-[#3b5ddd]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-white text-[#2d3954]
              px-4 sm:px-6 py-3 sm:py-4 text-sm
              placeholder-[#7b7fa6] outline-none
              focus:ring-2 focus:ring-[#3b5ddd]"
            />
          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full rounded-xl bg-white text-[#2d3954]
            px-4 sm:px-6 py-3 sm:py-4 text-sm
            placeholder-[#7b7fa6] outline-none resize-none
            focus:ring-2 focus:ring-[#3b5ddd]"
          />

          {/* Bottom row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="bg-[#3b5ddd] text-white font-medium rounded-full shadow-md
              px-8 sm:px-10 py-2.5 sm:py-3
              hover:bg-[#2f4fd3] transition w-fit"
            >
              Send
            </button>

            <p className="text-xs text-[#7b7fa6] sm:text-right">
              *We promise not to disclose your personal information to third parties.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
