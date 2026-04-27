// app/register/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";
import { LuLeaf } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { MdMailOutline, MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const router = useRouter();
  const { register, loginWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await register(email, password);
    router.push("/");
  };

  const handleGoogle = async () => {
    await loginWithGoogle();
    router.push("/");
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{
        background:
          "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 60%, #f7fee7 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 justify-center"
          >
            <LuLeaf size={24} className="text-green-500" />
            <span
              className="text-2xl font-bold text-green-800"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Plantora
            </span>
          </Link>
          <h1
            className="text-2xl font-bold text-green-900 mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Create your account
          </h1>
          <p className="text-sm text-green-800/60 mt-1">
            Start your indoor garden journey today
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-sm p-8 flex flex-col gap-5">
          {/* Google Button */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 border border-green-200 rounded-full py-3 text-sm font-medium text-green-900 hover:bg-green-50 transition-colors duration-200"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-green-100" />
            <span className="text-xs text-green-400">or</span>
            <div className="flex-1 h-px bg-green-100" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-3 border border-green-200 rounded-full px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
              <MdMailOutline size={18} className="text-green-400 shrink-0" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="bg-transparent text-sm text-green-900 placeholder-green-300 outline-none w-full"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 border border-green-200 rounded-full px-4 py-3 focus-within:border-green-400 transition-colors duration-200">
              <MdLockOutline size={18} className="text-green-400 shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                className="bg-transparent text-sm text-green-900 placeholder-green-300 outline-none w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-green-400 hover:text-green-600 transition-colors shrink-0"
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-3 rounded-full transition-colors duration-200 mt-1"
            >
              Create Account
            </button>
          </form>

          {/* Link to Login */}
          <p className="text-center text-sm text-green-800/60">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-green-600 font-semibold hover:text-green-500 transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Back link */}
        <p className="text-center text-xs text-green-600 mt-6">
          <Link
            href="/"
            className="hover:text-green-500 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
