"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <div className="w-1/4 h-screen bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-5">
      <ul>
        <li>
          <Link href="/introduction">소개글</Link>
        </li>
        <li>
          <Link href="/experience">경력</Link>
        </li>
        <li>
          <Link href="/techstack">기술스택</Link>
        </li>
        <li>
          <Link href="/projects">프로젝트</Link>
        </li>
      </ul>
      <div className="mt-5">
        <button
          onClick={() => setTheme("light")}
          className={`p-2 rounded ${
            theme === "light"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`p-2 rounded ml-2 ${
            theme === "dark"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`p-2 rounded ml-2 ${
            theme === "system"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          System
        </button>
      </div>
    </div>
  );
}
