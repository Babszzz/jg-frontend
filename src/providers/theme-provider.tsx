"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main>
      <button
        onClick={() => setIsDark(!isDark)}
        className={twMerge(
          "fixed top-4 right-4  text-sm grid grid-cols-2 gap-1 items-center rounded-xl w-12 h-6 px-1 cursor-pointer z-[999]",
          !isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
        )}
      >
        {!isDark ? <MdDarkMode size={20} /> : ""}
        <div
          className={twMerge(
            "w-4 h-4 rounded-full",
            isDark ? "bg-gray-800" : "bg-gray-200 "
          )}
        ></div>
        {isDark ? <MdLightMode size={20} /> : ""}
      </button>
      {children}
    </main>
  );
}
