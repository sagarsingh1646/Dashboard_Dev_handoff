const RevenueByLocationCard = ({ data }) => {
  return (
    <div className="bg-[#F7F9FB] h-100 w-70 dark:bg-gray-800 p-4 rounded-2xl ">
      <h2 className="text-lg font-semibold mb-4">Revenue by Location</h2>
      <ul>
        {data.map((location, index) => (
          <li key={index} className="flex justify-between py-2 text-sm">
            <span>{location.city}</span>
            <span>{location.value.toLocaleString()}K</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueByLocationCard;
