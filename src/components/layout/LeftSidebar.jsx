import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/sidebarLinks";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";


const LeftSidebar = ({ userName="ByeWind", profilePhoto }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div className="w-55 min-h-screen dark:bg-[#1c1c1c] bg-white  text-white border-r border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center gap-3 mb-6">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-inter dark:text-white font-normal text-sm leading-5 text-gray-900 truncate">
          {userName}
        </span>
      </div>

      {/* Favorites Section */}
      <div>
        <div className="flex justify-between font-sans font-light text-base">
          <span className="dark:text-[#777777] text-[rgba(28,28,28,0.4)]">Favorites</span>
          <span className="px-10 dark:text-[#494949] text-[rgba(28,28,28,0.2)]">Recently</span>
        </div>
        <div className="font-sans font-light text-sm">
          <ul className="pt-2 text-black dark:text-white list-disc marker:text-gray-400 pl-5 space-y-2">
            <li>Overview</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>

      {/* Sidebar Links */}
      <div className="pt-10 space-y-8">
        {sidebarLinks.map((section, index) => (
          <div className="font-sans font-light" key={index}>
            {/* Section Title */}
            <h2 className="text-sm dark:text-[#777777]   leading-5 text-[rgba(28,28,28,0.4)] mb-2">
              {section.title}
            </h2>

            {/* Section Links */}
            <ul className="space-y-1">
              {section.links.map((link, idx) => {
                if (link.children) {
                  return (
                    <div key={idx}>
                      {/* Parent Menu */}
                      <button
                        onClick={() => toggleMenu(link.label)}
                        className={`w-full flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${
                          openMenu === link.label
                            ? "bg-gray-100 dark:bg-[#333333]"
                            : ""
                        }`}
                      >
                        {/* Arrow Icon */}
                        <span className="text-gray-500">
                          {openMenu === link.label ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </span>

                        {/* Menu Icon */}
                        {!darkMode ? <img src={link.icon} alt="" className="w-4 h-4" /> : <img src={link.darkIcon} alt="" className="w-4 h-4" />  }

                        {/* Menu Name */}
                        <span className="font-sans text-black dark:text-white">{link.label}</span>
                      </button>

                      {/* Submenu */}
                      {openMenu === link.label && (
                        <ul className="mt-1 pl-8 space-y-1">
                          {link.children.map((child, childIdx) => (
                            <li key={childIdx}>
                              <Link
                                to={child.path}
                                className={`block px-2 py-1 text-sm rounded-md text-black dark:text-white transition-colors ${
                                  location.pathname === child.path
                                    ? "bg-gray-100 dark:bg-[#333333]"
                                    : "hover:bg-gray-100 dark:hover:bg-[#333333]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }

                return (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 px-2 py-2 rounded-md text-sm transition-colors ${
                        location.pathname === link.path
                          ? "bg-gray-100 dark:bg-gray-800 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {/* No arrow for normal links without child */}
                      <img src={link.icon} alt="" className="w-4 h-4" />
                      <span className="font-inter">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
