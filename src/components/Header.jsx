"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useAuth } from "../../context/AuthContext";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { TbPlant } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useAuth();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Plants", href: "/plants" },
    { label: "Care Guide", href: "/care-guide" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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

        {/* Desktop — Auth area */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            // — LOGGED IN: show user dropdown —
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 border cursor-pointer border-green-200 rounded-full px-3 py-2 hover:bg-green-50 transition-colors duration-200"
              >
                <FiUser size={16} className="text-green-600" />
                {/* Show the part of the email before the @ sign */}
                <span className="text-sm font-medium text-green-800 max-w-32 truncate">
                  {user.displayName || user.email.split("@")[0]}
                </span>
                <FiChevronDown
                  size={14}
                  className={`text-green-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-green-100 rounded-2xl shadow-lg overflow-hidden z-50">
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-green-100">
                    <p className="text-xs text-green-500 font-medium">
                      Signed in as
                    </p>
                    <p className="text-sm font-semibold text-green-900 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>

                  {/* Dropdown Links */}
                  <div className="py-2">
                    <Link
                      href="/plants/add-plant"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                    >
                      <LuLeaf size={16} className="text-green-400" />
                      Add Plant
                    </Link>
                    <Link
                      href="/plants/manage-plants"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
                    >
                      <TbPlant size={16} className="text-green-400" />
                      Manage Plants
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="border-t border-green-100 py-2">
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2.5 cursor-pointer text-sm text-red-500 hover:bg-red-50 transition-colors duration-150"
                    >
                      <MdOutlineLogout size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // — NOT LOGGED IN: show login/register —
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-green-700 hover:text-green-500 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger - Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
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

          {/* Mobile — Auth area */}
          {user ? (
            <>
              <p className="text-xs text-green-500 font-medium pt-2 border-t border-green-100">
                {user.email}
              </p>
              <Link
                href="/plants/add"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-green-600"
              >
                Add Plant
              </Link>
              <Link
                href="/plants/manage"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-green-600"
              >
                Manage Plants
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-sm font-medium text-red-500 hover:text-red-400 text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-3 pt-2">
              <Link
                href="/login"
                className="text-sm font-medium text-green-700 hover:text-green-500"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full"
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
