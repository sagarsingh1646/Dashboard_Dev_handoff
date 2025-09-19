import Sidebar from "./components/layout/Sidebar"
import Dashboard from "./pages/Dashboard"
import { User } from './data/userData';
import OrderList from "./components/layout/orderList";
import TopBar from "./components/layout/TopBar";

function App() {


  return (
    <>
    {/* <Dashboard/> */}
    <div className="flex">
          <Sidebar
      userName={User.userName}
      profilePhoto={User.profilePhoto}
    />
    
    <div>
    <TopBar/>
    <OrderList/>
    </div>
    </div>
    </>
  )
}

export default App
