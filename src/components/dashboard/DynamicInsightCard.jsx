import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useSelector } from "react-redux";

const DynamicInsightCard = ({ title, value, percentage, isUp, bgColor = "bg-blue-50", darkColor}) => {
    const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-4 min-2-40 max-w-64 h-28 transition-shadow hover:shadow-md ${!darkMode? bgColor : darkColor}`}
    >
      {/* Title */}
      {darkColor === "bg-[#272727]" && darkMode ? <h3 className="text-white text-base font-medium">{title}</h3> : <h3 className="text-gray-800 text-base font-medium">{title}</h3>}

      <div className="flex items-end justify-between">
        {/* Main Value */}
        {darkColor === "bg-[#272727]" && darkMode ?<span className="text-3xl font-semibold text-white">{value}</span>:<span className="text-3xl font-semibold text-gray-900">{value}</span>}

        {/* Percentage Change */}
        <div
          className={`flex items-center gap-1 text-sm ${
            darkColor === "bg-[#272727]" && darkMode  ? "text-white" : "text-black"
          }`}
        >
          <span>{percentage}</span>
          {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        </div>
      </div>
    </div>
  );
};

export default DynamicInsightCard;
