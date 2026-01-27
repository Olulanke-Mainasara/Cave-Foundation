"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else if (theme === "system") {
      // If on system, switch to the opposite of what system currently is
      setTheme(systemTheme === "dark" ? "light" : "dark");
    }
  };

  // Determine which icon to show
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button className="cursor-pointer mr-5 md:mr-0" onClick={handleThemeChange}>
      {currentTheme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggler;
