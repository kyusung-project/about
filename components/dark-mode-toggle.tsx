"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("system");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(prefersDark);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <div className="relative group">
      {/* 메인 버튼 */}
      <button className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full transition-all duration-300">
        {isDark ? "Dark" : "Light"}
      </button>

      {/* 옵션 선택 (마우스 오버 시 표시) */}
      <div className="absolute left-0 top-full mt-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top">
        <button
          className={`block w-full text-left px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${
            theme === "light" ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className={`block w-full text-left px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${
            theme === "dark" ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button
          className={`block w-full text-left px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 ${
            theme === "system" ? "bg-gray-300 dark:bg-gray-600" : ""
          }`}
          onClick={() => setTheme("system")}
        >
          System
        </button>
      </div>
    </div>
  );
}
