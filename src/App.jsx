import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/layout/LeftSidebar";
import Dashboard from "./pages/Dashboard";
import OrderList from "./components/layout/OrderList";
import TopBar from "./components/layout/TopBar";
import { User } from "./data/userData";
import RightSidebar from "./components/layout/RightSideBar";
import { useSelector } from "react-redux";

function App() {
  const isOpen = useSelector((state) => state.rightSidebar.isOpen);
  return (
    <Router>
      <div className="flex">
        {/* Left Sidebar */}
        <LeftSidebar userName={User.name} profilePhoto={User.profilePhoto} />

        {/* Main Content Area */}
        <div className="flex-1 dark:bg-[#1c1c1c] bg-white">
          {/* Top Bar */}
          <TopBar />

          {/* Pages */}
          <div className="p-4 overflow-auto ">
            <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/order" element={<OrderList />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </div>
        </div>

        {/* Right Sidebar */}
        {isOpen ? <RightSidebar /> : <></>}
      </div>
    </Router>
  );
}

export default App;
