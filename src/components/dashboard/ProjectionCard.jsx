import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ProjectionCard = ({ data }) => {
  return (
    <div className="bg-gray-50 dark:bg-[#272727] rounded-2xl p-4 h-60">
      {/* Title */}
      <h2 className="text-lg dark:text-white font-semibold text-gray-800 mb-4">
        Projections vs Actuals
      </h2>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="75%">
        <BarChart data={data} barGap={0} barCategoryGap={30}>
          {/* Grid lines */}
          <CartesianGrid vertical={false} stroke="#E5E7EB" />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis */}
          <YAxis
            tickFormatter={(value) => `${value}M`}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 30]}
          />

          {/* Tooltip */}
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.05)" }}
            contentStyle={{ borderRadius: "10px", fontSize: "12px" }}
          />

          {/* Actuals Bar (Bottom Layer) */}
          <Bar
            dataKey="actual"
            stackId="a"
            fill="#A8C5DA"
            radius={[0, 0, 0, 0]}
          />

          {/* Projections Bar (Top Layer) */}
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#E5ECF6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionCard;
