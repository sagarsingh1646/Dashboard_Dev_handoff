import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const DynamicInsightCard = ({ title, value, percentage, isUp, bgColor = "bg-blue-50" }) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-4 min-2-40 max-w-64 h-28 ${bgColor} transition-shadow hover:shadow-md`}
    >
      {/* Title */}
      <h3 className="text-gray-800 text-base font-medium">{title}</h3>

      <div className="flex items-end justify-between">
        {/* Main Value */}
        <span className="text-3xl font-semibold text-gray-900">{value}</span>

        {/* Percentage Change */}
        <div
          className={`flex items-center gap-1 text-sm ${
            isUp ? "text-green-600" : "text-red-600"
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
