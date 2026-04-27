// components/Header.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Plants", href: "/plants" },
    { label: "About", href: "/about" },
    { label: "My Plants", href: "/dashboard/manage" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md border-b border-green-100">
      <div className="max-w-11/12 mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src={logo} alt="Plantora logo" width={32} height={32} />
          <span
            className="text-xl font-bold tracking-tight text-green-700 group-hover:text-green-500 transition-colors duration-200"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Plantora
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-green-700 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-green-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-green-700 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-4 border-t border-green-100 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/login"
              className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition-colors duration-200"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
