import React, { useState } from "react";
import useDarkSide from "./hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="border-2 border-white flex items-center justify-center w-8 h-8 rounded-full bg-green-500 cursor-pointer">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={32}
        />
      </div>
    </>
  );
}
