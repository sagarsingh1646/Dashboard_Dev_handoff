import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../data/sidebarLinks";

const Sidebar = ({ userName, profilePhoto }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div className="h-screen w-64 bg-white  border-r border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-inter font-normal text-sm leading-5 text-gray-900  truncate">
          {userName}
        </span>
      </div>

      {/* Sidebar Sections */}
      <div>
        <div className="flex justify-between">
        <span className="text-[rgba(28,28,28,0.4)]">Favorites</span>
        <span className="px-10 text-[rgba(28,28,28,0.2)]">Recently</span>
        </div>
        <div>
            <ul className="pt-2 list-disc marker:text-gray-400 pl-5 space-y-2">
                <li>Overview</li>
                <li>Projects</li>
            </ul>
        </div>
      </div>
      <div className="pt-10 space-y-8">
        {sidebarLinks.map((section, index) => (
          <div key={index}>
            {/* Section Title */}
            <h2 className="font-inter font-normal text-sm leading-5 text-[rgba(28,28,28,0.4)]">
              {section.title}
            </h2>

            {/* Section Links */}
            <ul className="">
              {section.links.map((link, idx) => {
                if (link.children) {
                  return (
                    <div key={idx}>
                      {/* Parent Menu */}
                      <button
                        onClick={() => toggleMenu(link.label)}
                        className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-sm font-medium transition-colors ${
                          openMenu === link.label
                            ? "bg-gray-100 dark:bg-gray-800"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2 font-inter">
                          <span>{link.icon}</span>
                          {link.label}
                        </span>
                        <span className="text-gray-500">
                          {openMenu === link.label ? "▲" : "▼"}
                        </span>
                      </button>

                      {/* Submenu */}
                      {openMenu === link.label && (
                        <ul className="mt-1 pl-8 space-y-1">
                          {link.children.map((child, childIdx) => (
                            <li key={childIdx}>
                              <Link
                                to={child.path}
                                className={`block px-2 py-1 text-sm rounded-md transition-colors ${
                                  location.pathname === child.path
                                    ? "bg-gray-100 dark:bg-gray-800 font-medium"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
                      <span>{link.icon}</span>
                      {link.label}
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

export default Sidebar;
