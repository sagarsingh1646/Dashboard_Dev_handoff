import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";
import { useSelector } from "react-redux";

const TotalSalesCard = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const darkMode = useSelector((state) => state.theme.darkMode);

  const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-[#F7F9FB] w-70 dark:bg-[#272727] p-4 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Total Sales</h2>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            innerRadius={50}
            paddingAngle={4} 
            onMouseEnter={onPieEnter}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
                strokeWidth={2}
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const percent = ((payload[0].value / totalValue) * 100).toFixed(1);
                return (
                  <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow text-sm">
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {payload[0].name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">{percent}%</p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <ul className="mt-4 space-y-2 text-sm">
        {data.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="flex items-center">
              <span
                className="rounded-full w-3 h-3 inline-block"
                style={{ backgroundColor: item.color }}
              />
              <span className="font-light font-sans pl-3 dark:text-white">{item.name}</span>
            </span>
            <span className="font-light font-sans dark:text-white">
              ${item.value.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalSalesCard;
