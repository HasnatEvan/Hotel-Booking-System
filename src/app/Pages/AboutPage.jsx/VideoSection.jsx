"use client";

import Image from "next/image";
import { FaPlay, FaTimes } from "react-icons/fa";
import { useState } from "react";

const VideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#f6fbfb] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">

          {/* MAIN CONTAINER */}
          <div className="bg-white rounded-3xl p-6 md:p-10 
            flex flex-col lg:flex-row items-center gap-10">

            {/* LEFT CONTENT */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2c5c] mb-6">
                Start your Amazing <br /> Adventure!
              </h2>

              <p className="text-gray-500 leading-relaxed max-w-md mb-8">
                Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit
                ea delectus, sed voluptatem. Laborum accusantium libero commodi id
                officiis itaque esse adipisci, necessitatibus asperiores, illo odio.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-3 
                px-8 py-3 rounded-full 
                bg-[#3f5efb] text-white font-medium
                shadow-md hover:bg-[#344de8] transition"
              >
                <span className="w-6 h-6 rounded-full bg-white text-[#3f5efb] 
                  flex items-center justify-center">
                  <FaPlay className="text-xs ml-[2px]" />
                </span>
                Watch video
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div
              onClick={() => setOpen(true)}
              className="relative w-full lg:w-[520px] 
              h-[260px] sm:h-[340px] md:h-[420px] 
              rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src="/images/About/video.jpg"
                alt="Video Thumbnail"
                fill
                className="object-cover"
                priority
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full 
                  bg-[#f5b342] flex items-center justify-center 
                  shadow-lg">
                  <FaPlay className="text-white text-lg ml-[3px]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

            {/* CLOSE ICON (FIXED & CLICKABLE) */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-50 
              w-9 h-9 rounded-full bg-white/90 
              flex items-center justify-center 
              text-black hover:bg-white transition"
            >
              <FaTimes />
            </button>

            {/* YOUTUBE IFRAME */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wsq-r8lMMsk?start=14&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
