"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiBookmark, FiMenu, FiX, FiLogIn, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ======================
     SCROLL SHADOW
  ====================== */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ======================
     CHECK LOGIN USER
  ====================== */
  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get("/me", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, [axiosPublic, pathname]);

  /* ======================
     LOGOUT
  ====================== */
  const handleLogout = async () => {
    try {
      await axiosPublic.post("/logout", {}, { withCredentials: true });
      setUser(null);
      setOpen(false);
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isActive = (path) => pathname === path;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Add Rooms", path: "/add-rooms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Kinsley</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="relative hover:text-black group"
            >
              {item.name}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-orange-400 transition-all ${
                  isActive(item.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side (Desktop) */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            <FiBookmark />
            Book now
          </button>

          {!loading && (
            user ? (
              <button
                onClick={handleLogout}
                className="hidden sm:flex border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden sm:flex border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </Link>
            )
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ======================
         MOBILE MENU
      ====================== */}
      <div
        className={`md:hidden overflow-hidden border-t border-gray-200 bg-white shadow-lg transition-all duration-300 ease-in-out
          ${
            open
              ? "max-h-[600px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
      >
        <nav className="flex flex-col px-6 py-4 gap-3">

          {/* 🔲 Mobile Menu Items (CENTER text, gray border) */}
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className="
                w-full px-4 py-2.5 rounded-lg
                border border-gray-300
                text-gray-700 font-medium
                text-center
                hover:border-gray-400 hover:bg-gray-50
                transition
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Login / Logout */}
          {!loading && (
            user ? (
              <button
                onClick={handleLogout}
                className="mt-3 flex items-center justify-center gap-2 w-full bg-red-500 text-white py-2.5 rounded-lg text-base font-medium hover:bg-red-600 transition"
              >
                <FiLogOut />
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2.5 rounded-lg text-base font-medium hover:bg-blue-700 transition"
              >
                <FiLogIn />
                Login
              </Link>
            )
          )}

          {/* Mobile Book Now */}
          <button className="mt-2 flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2.5 rounded-lg text-base font-medium hover:bg-blue-700 transition">
            <FiBookmark />
            Book now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
