"use client";

import Link from "next/link";
import { FiBookmark, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        bg-white transition-shadow duration-300
        ${scrolled ? "shadow-md" : "shadow-sm"}
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Kinsley
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black relative">
            Home
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-400"></span>
          </Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/rooms" className="hover:text-black">Rooms</Link>
          <Link href="/restaurant" className="hover:text-black">Restaurant</Link>
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Book Now */}
          <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            <FiBookmark className="text-lg" />
            Book now
          </button>

          {/* Cart */}
          <div className="relative text-xl text-gray-700">
            <FiShoppingBag />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/rooms" onClick={() => setOpen(false)}>Rooms</Link>
            <Link href="/restaurant" onClick={() => setOpen(false)}>Restaurant</Link>
            <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-full">
              <FiBookmark />
              Book now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
