import DynamicInsightCard from "../dashboard/DynamicInsightCard";
import ProjectionCard from "../dashboard/ProjectionCard";
import RevenueGraphCard from "../dashboard/RevenueGraphCard";
import RevenueByLocationCard from "../dashboard/RevenueByLocationCard";
import TopSellingProductsCard from "../dashboard/TopSellingProductsCard";
import TotalSalesCard from "../dashboard/TotalSalesCard";

import {
  insightData,
  projectionsData,
  revenueGraphData,
  revenueByLocationData,
  topSellingProductsData,
  totalSalesData,
} from "../../data/eCommerceData";

const Ecommerce = () => {
  return (
    <div className="dark:bg-dark bg-white">
    <div>
      <span className="font-sans dark:text-white text-black">eCommerce</span>
    </div>
      <div className="grid grid-cols-12 gap-6 p-6">
      {/* Row 1 */}
      <div className="col-span-6">
        <div className="grid grid-cols-2 gap-4">
          {insightData.map((item, idx) => (
            <DynamicInsightCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className=" col-span-6">
        <ProjectionCard data={projectionsData} />
      </div>

      {/* Row 2 */}
      <div className="col-span-8">
        <RevenueGraphCard data={revenueGraphData} />
      </div>
      <div className="col-span-4">
        <div className="flex justify-end">
          <RevenueByLocationCard data={revenueByLocationData} />
        </div>
      </div>

      {/* Row 3 */}
      <div className="col-span-8">
        <TopSellingProductsCard data={topSellingProductsData} />
      </div>
      <div className="col-span-4">
        <div className="flex justify-end">
          <TotalSalesCard data={totalSalesData} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Ecommerce;
