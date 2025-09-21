import React, { useState, useMemo } from "react";
import orderData from "../../data/order";

//Light Icons
import ArrowsDownUp from "../../assets/orderListAssets/ArrowsDownUp.png"
import FunnelSimple from "../../assets/orderListAssets/FunnelSimple.png"
import PlusButton from "../../assets/orderListAssets/PlusButton.png"
import SearchIcon from "../../assets/orderListAssets/SearchIcon.png"

// Dark Icons
import ArrowsDownUpDark from "../../assets/orderListAssetsDark/ArrowsDownUpDark.png"
import FunnelSimpleDark from "../../assets/orderListAssetsDark/FunnelSimpleDark.png"
import PlusButtonDark from "../../assets/orderListAssetsDark/PlusButtonDark.png"
import SearchIconDark from "../../assets/orderListAssetsDark/SearchIconDark.png"
import { useSelector } from "react-redux";


const statusColors = {
  "In Progress": "text-[#8A8CD9]",
  "Complete": "text-[#4AA785]",
  "Pending": "text-blue-500",
  "Approved": "text-[#FFC555]",
  "Rejected": "text-gray-400",
};

const orderFontStyle = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "0%",
};

const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const darkMode = useSelector((state) => state.theme.darkMode);

  const ordersPerPage = 10;

  /*Filtering & Searching */
  const filteredOrders = useMemo(() => {
    return orderData.filter((order) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.project.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orderData, searchQuery, statusFilter]);

  /*Sorting */
  const sortedOrders = useMemo(() => {
    const sorted = [...filteredOrders];
    if (sortField) {
      sorted.sort((a, b) => {
        let valueA = a[sortField];
        let valueB = b[sortField];

        if (sortField === "date") {
          valueA = new Date(a.date);
          valueB = new Date(b.date);
        }

        if (sortOrder === "asc") return valueA > valueB ? 1 : -1;
        return valueA < valueB ? 1 : -1;
      });
    }
    return sorted;
  }, [filteredOrders, sortField, sortOrder]);

  /*Pagination */
  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  /*Toggle checkbox for each order */
  const toggleCheckbox = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id]
    );
  };

  /*Select/Deselect all on current page */
  const toggleAllCheckboxes = () => {
    if (selectedOrders.length === currentOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(currentOrders.map((order) => order.id));
    }
  };

  /*Pagination Controls */
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedOrders([]);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  /*Handle Sort Toggle */
  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-4 w-full">
      <span className="font-semibold dark:text-white" >
        Order List
      </span>

      <div className="flex justify-between items-center mb-4 bg-gray-50 dark:bg-[#272727] p-2 rounded-lg mt-5">
        {/* Left Controls */}
        <div className="flex items-center gap-3">
            <button onClick={()=> {}} className="flex items-center gap-1 text-gray-700 hover:text-black">
                {!darkMode? <img className="w-7 h-7" src={PlusButton} alt="plusButton"/> : <img className="w-7 h-7" src={PlusButtonDark} alt="plusButton"/>}
            </button>

          <button
            onClick={() => {}}
            className="flex items-center gap-1 text-gray-700 hover:text-black"
          >
          {!darkMode? <img className="w-5 h-5" src={FunnelSimple} alt="funnel"/> : <img className="w-5 h-5" src={FunnelSimpleDark} alt="funnel"/>}
          </button>

          {/* Sort by Status */}
          <button
            onClick={() => handleSort("status")}
            className="flex items-center gap-1 text-gray-700 hover:text-black"
          >

            {!darkMode? <img className="w-5 h-5" src={ArrowsDownUp} alt="arrow"/> : <img className="w-5 h-5" src={ArrowsDownUpDark} alt="arrow"/>}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          {!darkMode?         <img className="w-5 h-5 absolute right-3 top-1.5" src={SearchIcon} alt="SearchIcon"/> :         <img className="w-5 h-5 absolute right-3 top-1.5" src={SearchIconDark} alt="SearchIcon"/>}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="border dark:text-[#4F4F4F] dark:bg-[#232323] dark:border-[#393939] border-gray-300 rounded-lg px-4 py-1 text-sm w-48 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className="table-fixed w-full bg-white dark:bg-dark rounded-lg"
          style={orderFontStyle}
        >
          <thead>
            <tr className="border-b border-gray-400">
              <th className="w-5 px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={
                    selectedOrders.length === currentOrders.length &&
                    currentOrders.length > 0
                  }
                  onChange={toggleAllCheckboxes}
                  className="w-4 h-4  accent-black dark:accent-[#C6C7F8]"
                />
              </th>
              <th className="w-[100px] px-4 py-3 text-left text-gray-400 dark:text-[#777777] font-light">
                Order ID
              </th>
              <th className="min-w-[150px] px-4 py-3 text-left text-gray-400 dark:text-[#777777]  font-light">
                User
              </th>
              <th className="min-w-[180px] px-4 py-3 text-left text-gray-400 dark:text-[#777777]  font-light">
                Project
              </th>
              <th className="min-w-[80px] max-w-[400px] px-4 py-3 text-left text-gray-400 dark:text-[#777777]  font-light">
                Address
              </th>
              <th className="w-[120px] px-4 py-3 text-left text-gray-400 dark:text-[#777777]  font-light">
                Date
              </th>
              <th className="w-[120px] px-4 py-3 text-left text-gray-400 dark:text-[#777777]  font-light">
                Status
              </th>
              <th className="w-12 px-4 py-3 text-right"></th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order) => {
              const isChecked = selectedOrders.includes(order.id);

              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#272727] group"
                  style={orderFontStyle}
                >
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCheckbox(order.id)}
                      className={`w-4 h-4 accent-black dark:accent-[#C6C7F8] transition-opacity duration-200 ${
                        isChecked ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </td>
                  <td className="px-4 py-2 font-medium dark:text-white">{order.id}</td>
                  <td className="px-4 py-2 flex items-center gap-2 w-[220px] min-w-[80px] max-w-[220px]">
                    <img
                      src={order.user.avatar}
                      alt={order.user.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="truncate dark:text-white">{order.user.name}</span>
                  </td>
                  <td className="px-4 py-1 truncate dark:text-white">{order.project}</td>
                  <td className="px-4 py-1 min-h-[40px] min-w-[80px] max-w-[400px] truncate dark:text-white">
                    {order.address}
                  </td>
                  <td className="px-4 py-1 text-gray-600 dark:text-white">{order.date}</td>
                  <td className="px-4 py-1 font-medium">
                    <div className="flex items-center gap-2">
                      <span className={`${statusColors[order.status]}`}>●</span>
                      <span className={statusColors[order.status]}>{order.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-1 text-right">
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#272727] transition">
                      <span className="text-gray-600">⋯</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end mt-4 pr-4">
          <div className="flex items-center space-x-1">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-2 py-1 text-gray-600 hover:bg-gray-100 dark:bg-[#272727] rounded ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 rounded-lg transition dark:text-white ${
                  currentPage === index + 1
                    ? "bg-gray-100 text-black dark:bg-[#272727]"
                    : "text-gray-800 hover:bg-gray-100 dark:hover:bg-[#272727]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 text-gray-600  hover:bg-gray-100 dark:hover:bg-[#272727] rounded ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
