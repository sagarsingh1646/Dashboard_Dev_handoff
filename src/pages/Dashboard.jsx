import { stats, revenueTrends, projectionsVsActuals, revenueByLocation, topProducts, totalSales } from '../data/dashboardData';
// import StatsCard from '../components/dashboard/StatsCard';
import LineChartCard from '../components/dashboard/LineChartCard';
// import BarChartCard from '../components/dashboard/BarChartCard';
// import RevenueByLocation from '../components/dashboard/RevenueByLocation';
// import TopSellingProductsTable from '../components/dashboard/TopSellingProductsTable';
// import TotalSalesDonut from '../components/dashboard/TotalSalesDonut';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Stats Cards */}
      {/* {stats.map((item) => (
        <div key={item.id} className="col-span-3">
          <StatsCard {...item} />
        </div>
      ))} */}

      {/* Revenue and Projections */}
      <div className="col-span-8">
        <LineChartCard data={revenueTrends} />
      </div>
      {/* <div className="col-span-4">
        <BarChartCard data={projectionsVsActuals} />
      </div> */}

      {/* Bottom Section */}
      {/* <div className="col-span-8">
        <TopSellingProductsTable data={topProducts} />
      </div> */}
      {/* <div className="col-span-4 space-y-6">
        <RevenueByLocation data={revenueByLocation} />
        <TotalSalesDonut data={totalSales} />
      </div> */}
    </div>
  );
}
