

import { User } from '../data/userData';
import TopBar from '../components/layout/TopBar';
import LeftSidebar from '../components/layout/LeftSidebar';
import RightSideBar from '../components/layout/RightSideBar';
import OrderList from '../components/layout/orderList';

export default function Order() {
  return (
    <div>
    <div className="flex">
    <LeftSidebar
      userName={User.name}
      profilePhoto={User.profilePhoto}
    />
    
    <div>
    <TopBar/>
    
    <OrderList/>
    </div>
    <div>
      <RightSideBar/>
    </div>
    </div>
    </div>
  );
}
