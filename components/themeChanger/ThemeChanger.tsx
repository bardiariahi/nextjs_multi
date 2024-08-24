import { themeColors } from "@/helpers/constance";
import { capitalizeFirstLetter } from "../../helpers/firstUpperCase";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { useLayoutEffect, useState } from "react";

const ThemeChanger = () => {
  const [themeName,setThemeName] = useState("") as any

  const handleThemeActiveChanges = () => {
    const savedTheme = localStorage.getItem('theme')
    setThemeName(savedTheme)
  }

  useLayoutEffect( ()=> {
    handleThemeActiveChanges()
  },[])

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={9} role="button" className="btn">
        <WiMoonAltWaningCrescent1 />
        <div className="hidden md:flex">
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
        </div>
      </div>
      <ul
        tabIndex={9}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
        {themeColors.map((theme: any) => {
          return (
            <li key={theme}>
              <input
                type="radio"
                name="theme-dropdown"
                className={`theme-controller btn btn-sm btn-block btn-ghost justify-start ${themeName == theme ? "bg-primary text-primary-content " : ""} `}
                aria-label={capitalizeFirstLetter(theme)}
                data-set-theme={theme}
                value={theme}
                onClick={handleThemeActiveChanges}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemeChanger;
