"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
} from "react-icons/fi";

export default function Page() {
  const router = useRouter();
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, phone, password } = formData;

    if (!name || !email || !phone || !password) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      await axiosPublic.post("/register", {
        name,
        email,
        phone,
        password,
      });

      toast.success("Account created successfully 🎉");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      const msg =
        err.response?.data?.message || "Signup failed";
      toast.error(msg);
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6fbfb] px-4">
      <form
        onSubmit={handleSubmit}
        className="
          bg-white w-full max-w-md
          p-6 sm:p-8 mt-14
          rounded-2xl shadow-lg border border-gray-200
        "
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to get started
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Inputs */}
        <div className="space-y-4">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full mt-6 bg-blue-600 text-white py-2.5 rounded-lg
            hover:bg-blue-700 transition
            disabled:opacity-60
          "
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
