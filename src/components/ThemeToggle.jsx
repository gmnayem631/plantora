"use client";

import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 
                     transition-colors duration-300"
    >
      <BiMoon
        size={24}
        className="text-white absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <BiSun
        size={24}
        className="text-white absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
