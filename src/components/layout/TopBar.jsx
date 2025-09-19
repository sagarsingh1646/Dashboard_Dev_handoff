import SlideBarIcon from "../../assets/topBarAssets/SlidebarIcon.png";
import StarIcon from "../../assets/topBarAssets/StarIcon.png";
import BellIcon from "../../assets/topBarAssets/BellIcon.png";
import DayIcon from "../../assets/topBarAssets/DayIcon.png";
import HistoryIcon from "../../assets/topBarAssets/HistoryIcon.png";
import ShortcutIcon from "../../assets/topBarAssets/ShortcutIcon.png";
import SearchIcon from "../../assets/orderListAssets/SearchIcon.png";

const TopBar = ({ path = "Dashboards / Default" }) => {
  return (
    <div className="flex justify-between bg-whit h-16 border-b border-gray-200">
      <div className="flex pl-4 gap-3">
        <button>
          <img className="w-7 h-7" src={SlideBarIcon} />
        </button>
        <button>
          <img className="w-7 h-7" src={StarIcon} />
        </button>
        <span className="pl-4 py-5 font-light ">{path}</span>
      </div>
      <div className="flex">
        <div className="py-4">
          <div className="relative">
            <img
              className="w-5 h-5 absolute right-3 top-1.5"
              src={ShortcutIcon}
              alt="SearchIcon"
            />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {}}
              className="border border-gray-300 bg-gray-100 rounded-lg px-4 py-1 text-sm w-38 focus:outline-none"
            />
          </div>
          
        </div>
        <div className="py-4 px-8">
        <button>
          <img className="w-7 h-7" src={DayIcon} />
        </button>
        <button>
          <img className="ml-3 w-7 h-7" src={HistoryIcon} />
        </button>
        <button>
          <img className="ml-3 h-7" src={BellIcon} />
        </button>
        <button>
          <img className="ml-3 h-7" src={SlideBarIcon} />
        </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
