import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RevenueGraphCard = ({ data }) => {
    const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div className="bg-[#F7F9FB] dark:bg-[#272727] p-6 rounded-2xl min-w-100 max-w-250">
      <h2 className=" dark:text-white text-semibold mb-4 font-sans">Revenue</h2>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
        <Legend />
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

         {darkMode?  <Line type="monotone" dataKey="currentWeek" stroke="#C6C7F8" strokeWidth={2} /> :  <Line type="monotone" dataKey="currentWeek" stroke="#000000" strokeWidth={2} />}
          <Line type="monotone" dataKey="previousWeek" stroke="#87CEFA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueGraphCard;
