import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../features/themeSlice";

//Light Icon
import SlideBarIcon from "../../assets/topBarAssets/SlideBarIcon.png";
import StarIcon from "../../assets/topBarAssets/StarIcon.png";
import BellIcon from "../../assets/topBarAssets/BellIcon.png";
import DayIcon from "../../assets/topBarAssets/DayIcon.png";
import HistoryIcon from "../../assets/topBarAssets/HistoryIcon.png";
import ShortcutIcon from "../../assets/topBarAssets/ShortcutIcon.png";

//Dark Icon
import SideBarIconDark from "../../assets/topBarAssetsDark/SideBarIconDark.png";
import StarIconDark from "../../assets/topBarAssetsDark/StarIconDark.png";
import BellIconDark from "../../assets/topBarAssetsDark/BellIconDark.png";
import DayIconDark from "../../assets/topBarAssetsDark/DayIconDark.png";
import HistoryIconDark from "../../assets/topBarAssetsDark/HistoryIconDark.png";
import ShortcutIconDark from "../../assets/topBarAssetsDark/ShortcutIconDark.png";
import { toggleRightSidebar } from "../../features/rightSideBarSlice";

const TopBar = ({ path = "Dashboards / Default" }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  console.log(darkMode);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-between h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark">
      {/* Left side */}
      <div className="flex pl-4 gap-3">
        <button className="">
          {!darkMode ? (
            <img className="w-7 h-7" src={SlideBarIcon} />
          ) : (
            <img className="w-7 h-7" src={SideBarIconDark} />
          )}
        </button>
        <button>
          {!darkMode ? (
            <img className="w-7 h-7" src={StarIcon} />
          ) : (
            <img className="w-7 h-7" src={StarIconDark} />
          )}
        </button>
        <span className="pl-4 py-5 font-light text-gray-800 dark:text-gray-100">
          {path}
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 pr-4">
        <div className="relative">
          {!darkMode ? (
            <img
              className="w-5 h-5 absolute right-3 top-1.5"
              src={ShortcutIcon}
              alt="SearchIcon"
            />
          ) : (
            <img
              className="w-5 h-5 absolute right-3 top-1.5"
              src={ShortcutIconDark}
              alt="SearchIcon"
            />
          )}
          <input
            type="text"
            placeholder="Search"
            className="border dark:border-0 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-[#333333] dark:text-[#5C5C5C] rounded-lg px-4 py-1 text-sm w-38 focus:outline-none text-gray-800"
          />
        </div>

        {/* Day / Night toggle button */}
        <button className="cursor-pointer" onClick={() => dispatch(toggleDarkMode())}>
          {!darkMode ? (
            <img className="w-7 h-7" src={DayIcon} alt="Toggle Dark Mode" />
          ) : (
            <img className="w-7 h-7" src={DayIconDark} alt="Toggle Dark Mode" />
          )}
        </button>

        <button>
          {!darkMode ? (
            <img className="ml-3 w-7 h-7" src={HistoryIcon} />
          ) : (
            <img className="ml-3 w-7 h-7" src={HistoryIconDark} />
          )}
        </button>
        <button>
          {!darkMode ? (
            <img className="ml-3 h-7" src={BellIcon} />
          ) : (
            <img className="ml-3 h-7" src={BellIconDark} />
          )}
        </button>
        <button className="cursor-pointer" onClick={() => dispatch(toggleRightSidebar())}>
          {!darkMode ? (
            <img className="ml-3 h-7" src={SlideBarIcon} />
          ) : (
            <img className="ml-3 h-7" src={SideBarIconDark} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
