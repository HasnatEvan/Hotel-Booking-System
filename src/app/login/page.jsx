"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiMail, FiLock } from "react-icons/fi";
import useAxiosPublic from "../hooks/useAxiosPublic";

export default function Page() {
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      // 🔍 Check email exists
      const checkRes = await axiosPublic.get(
        `/check-email?email=${encodeURIComponent(email)}`
      );

      if (!checkRes.data.exists) {
        toast.error("Email not found. Please register first.");
        setLoading(false);
        return;
      }

      // 🔐 Login
      const res = await axiosPublic.post("/login", {
        email,
        password,
        remember,
      });

      if (res.data?.success) {
        toast.success("Login successful");

        // ⏳ Minimum 2s loading before redirect
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message || "Invalid password";
      toast.error(msg);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f4fbfb] px-4 sm:px-6">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-200 mt-14">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-1">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400
                         disabled:bg-gray-100"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400
                         disabled:bg-gray-100"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input
                type="checkbox"
                checked={remember}
                disabled={loading}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-blue-600"
              />
              Remember me
            </label>

            <span
              onClick={() => !loading && router.push("/forgot-password")}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold
                       hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </section>
  );
}
