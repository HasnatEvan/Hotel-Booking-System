import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Hotel Booking System",
  description: "Modern hotel booking application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">

        {/* NAVBAR (native scroll) */}
        <Navbar />

        {/* MAIN CONTENT (Lenis only here) */}
        <SmoothScroll>
          <main className="flex-1">
            {children}
          </main>
        </SmoothScroll>

        {/* FOOTER */}
        <Footer />

        {/* TOASTER */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
              background: "#1f2937",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
