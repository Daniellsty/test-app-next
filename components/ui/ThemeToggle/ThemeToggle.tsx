"use client";

import { useTheme } from "@/Context/ContextTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme === "light" ? "dark" : "light");
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="relative w-9 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-indigo-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
      <p className="select-none ms-3 text-sm font-medium ">
        {theme === "light" ? "dark" : "light"}
      </p>
    </label>
  );
};

export default ThemeToggle;
