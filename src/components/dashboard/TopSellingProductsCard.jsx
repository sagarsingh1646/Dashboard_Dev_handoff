const TopSellingProductsCard = ({ data }) => {
  return (
    <div className="bg-[#F7F9FB] h-99 dark:bg-gray-800 p-4 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 font-sans">Top Selling Products</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-200 text-gray-300">
            <th className="pb-2 font-light font-sans">Name</th>
            <th className="pb-2 font-light font-sans">Price</th>
            <th className="pb-2 font-light font-sans">Quantity</th>
            <th className="pb-2 font-light font-sans">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, idx) => (
            <tr key={idx} className="">
              <td className="py-3 font-light font-sans">{product.name}</td>
              <td className="font-light font-sans">${product.price.toFixed(2)}</td>
              <td className="font-light font-sans">{product.quantity}</td>
              <td className="font-light font-sans">${product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProductsCard;
