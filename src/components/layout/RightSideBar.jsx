import React from "react";
import { notifications, activities, contacts } from "../../data/righSidebarData";

const RightSideBar = () => {
  return (
    <div className="w-75 h-100% p-6 bg-white dark:bg-[#1C1C1C] border-l border-gray-200 dark:border-gray-700 space-y-8">
      {/* Notifications */}
      <div>
        <h2 className="text-lg font-sans text-gray-900 dark:text-white mb-4">
          Notifications
        </h2>
        <div className="space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg ">
                <img src={n.avatar} alt="" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-800 dark:text-white">{n.message}</p>
                <p className="text-xs text-gray-500 dark:text-[#777777]">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Activities</h2>
        <div className="relative space-y-6">
          {activities.map((a, index) => (
            <div key={a.id} className="flex items-start space-x-3 relative">
              {/* Timeline line */}
              {index !== activities.length - 1 && (
                <span className="absolute left-4 top-10 h-full w-px bg-gray-200"></span>
              )}
              <img
                src={a.avatar}
                alt={a.message}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-800 dark:text-white">{a.message}</p>
                <p className="text-xs text-gray-500 dark:text-[#777777]">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4 dark:text-white">Contacts</h2>
        <div className="space-y-3">
          {contacts.map((c) => (
            <div key={c.id} className="flex items-center space-x-3">
              <img
                src={c.imgUrl}
                alt={c.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-800 dark:text-white">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
