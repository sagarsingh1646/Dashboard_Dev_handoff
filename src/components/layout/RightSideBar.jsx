import React from "react";
import { notifications, activities, contacts } from "../../data/righSidebarData";

const RightSideBar = () => {
  return (
    <div className="w-75 h-100% p-6 bg-white border-l border-gray-200 space-y-8">
      {/* Notifications */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Notifications
        </h2>
        <div className="space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="flex items-start space-x-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg ">
                <img src={n.avatar} alt="" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-800">{n.message}</p>
                <p className="text-xs text-gray-500">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Activities</h2>
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
                <p className="text-sm text-gray-800">{a.message}</p>
                <p className="text-xs text-gray-500">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contacts</h2>
        <div className="space-y-3">
          {contacts.map((c) => (
            <div key={c.id} className="flex items-center space-x-3">
              <img
                src={c.imgUrl}
                alt={c.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-800">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
