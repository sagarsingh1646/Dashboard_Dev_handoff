import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueGraphCard = ({ data }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="bg-[#F7F9FB] dark:bg-[#272727] p-6 rounded-2xl min-w-100 max-w-250">
      <h2 className="dark:text-white font-semibold text-sm mb-4 font-sans">Revenue</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <Legend/>
          <CartesianGrid vertical={false} strokeDasharray="0 0" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `${value / 1000000}M`}
            domain={[0, 30000000]}
            ticks={[0, 10000000, 20000000, 30000000]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(value) => `${value / 1000000}M`} />

          {darkMode ? (
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke="#C6C7F8"
              strokeWidth={2}
              dot={false}
            />
          ) : (
            <Line
              type="monotone"
              dataKey="currentWeek"
              stroke="#000000"
              strokeWidth={2}
              dot={false}
            />
          )}
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#87CEFA"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGraphCard;
