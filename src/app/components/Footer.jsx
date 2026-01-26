import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      
      {/* Main Content */}
      <div
        className="
          max-w-6xl mx-auto px-4 py-16 sm:py-20
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-10 lg:gap-12
          text-center md:text-left
        "
      >
        {/* Brand */}
        <div className="md:pr-6">
          <h2 className="text-3xl font-bold mb-4">Kinsley</h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
            Premium hotel booking experience with comfort, luxury,
            and unforgettable moments for your perfect stay.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-4 text-lg">
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-500 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Menu</h3>
          <ul className="space-y-3 text-gray-400">
            {["Home", "About Us", "Rooms", "Blog", "Contact Us"].map((item) => (
              <li key={item}>
                <Link href="/" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              Dhaka, Bangladesh
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-green-500" />
              +880 1234 567 890
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-orange-400" />
              support@kinsley.com
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get special offers and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 text-center sm:text-left">
          <p>© 2026 Kinsley. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <span className="text-white font-semibold">Kinsley Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
