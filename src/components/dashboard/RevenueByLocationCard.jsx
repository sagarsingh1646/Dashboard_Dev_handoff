import { useSelector } from "react-redux";
// Light Icons
import WorldMap from "../../assets/eCommerceAssets/WorldMap.png";
// Dark Icons
import WorldMapDark from "../../assets/eCommerceAssetsDark/WorldMapDark.png";

const RevenueByLocationCard = ({ data }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Find the maximum value to calculate percentage
  const maxValue = 100;

  return (
    <div className="bg-[#F7F9FB] h-100 w-70 dark:bg-[#272727] p-4 rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Revenue by Location
      </h2>

      {/* Map image based on theme */}
      {!darkMode ? <img src={WorldMap} alt="World Map" /> : <img src={WorldMapDark} alt="World Map Dark" />}

      <div className="pt-6">
        <ul className="space-y-4">
          {data.map((location, index) => {
            // Calculate percentage
            const percentage = ((location.value / maxValue) * 100).toFixed(2);

            return (
              <li key={index}>
                {/* City & Value */}
                <div className="flex justify-between text-sm dark:text-white mb-1">
                  <span>{location.city}</span>
                  <span>{location.value.toLocaleString()}K</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                  <div
                    className="bg-[#A8C5DB] h-1 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RevenueByLocationCard;
