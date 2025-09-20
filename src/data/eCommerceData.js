// src/data/ecommerceData.js
export const insightData = [
  { title: "Customers", value: "3,781", percentage: "+11.01%", isUp: true },
  { title: "Orders", value: "1,219", percentage: "-0.03%", isUp: false },
  { title: "Revenue", value: "$695", percentage: "+15.03%", isUp: true },
  { title: "Growth", value: "30.1%", percentage: "+6.08%", isUp: true },
];

// export const projectionsData = [
//   { month: "Jan", value: 20000000 },
//   { month: "Feb", value: 18000000 },
//   { month: "Mar", value: 25000000 },
//   { month: "Apr", value: 28000000 },
//   { month: "May", value: 15000000 },
//   { month: "Jun", value: 22000000 },
// ];

export const projectionsData = [
  { month: "Jan", actual: 17, projection: 3 },
  { month: "Feb", actual: 20, projection: 5 },
  { month: "Mar", actual: 18, projection: 3 },
  { month: "Apr", actual: 22, projection: 4 },
  { month: "May", actual: 14, projection: 3 },
  { month: "Jun", actual: 20, projection: 4 },
];


export const revenueGraphData = [
  { month: "Jan", currentWeek: 10000000, previousWeek: 8000000 },
  { month: "Feb", currentWeek: 15000000, previousWeek: 18000000 },
  { month: "Mar", currentWeek: 13000000, previousWeek: 17000000 },
  { month: "Apr", currentWeek: 19000000, previousWeek: 14000000 },
  { month: "May", currentWeek: 21000000, previousWeek: 20000000 },
  { month: "Jun", currentWeek: 22000000, previousWeek: 25000000 },
];

export const revenueByLocationData = [
  { city: "New York", value: 72000 },
  { city: "San Francisco", value: 39000 },
  { city: "Sydney", value: 25000 },
  { city: "Singapore", value: 61000 },
];

export const topSellingProductsData = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: "6,518.18" },
  { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: "4,754.5"},
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: "2,559.36" },
  { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: "3,680.0" },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: "1,965.81" },
];

export const totalSalesData = [
  { name: "Direct", value: 300.56, color: "#1C1C1C" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];
