import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(null); 

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const userPref = window.localStorage.getItem("theme");
    const systemPref = window.matchMedia(preferDarkQuery).matches ? "dark" : "light";

    const initialTheme = userPref || systemPref;
    setMode(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mode) return; 

    window.localStorage.setItem("theme", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
