//Light Icons
import PieChartIcon from "../assets/sidebarAssets/PieChartIcon.png";
import CartIcon from "../assets/sidebarAssets/CartIcon.png";
import FolderIcon from "../assets/sidebarAssets/FolderIcon.png";
import BookIcon from "../assets/sidebarAssets/BookIcon.png";
import BookIcon1 from "../assets/sidebarAssets/BookIcon1.png";
import ContactIcon from "../assets/sidebarAssets/ContactIcon.png";
import AddressIcon from "../assets/sidebarAssets/AddressIcon.png";
import GroupIcon from "../assets/sidebarAssets/GroupIcon.png";
import ChatIcon from "../assets/sidebarAssets/ChatIcon.png";

//Dark Icons

import ChartPieSliceDark from "../assets/sidebarAssetsDark/ChartPieSliceDark.png";
import CartIconDark from "../assets/sidebarAssetsDark/CartIconDark.png";
import FolderIconDark from "../assets/sidebarAssetsDark/FolderIconDark.png";
import BookIconDark from "../assets/sidebarAssetsDark/BookIconDark.png";
import BookIcon2Dark from "../assets/sidebarAssetsDark/BookIcon2Dark.png";
import ContactIconDark from "../assets/sidebarAssetsDark/ContactIconDark.png";
import AddressIconDark from "../assets/sidebarAssetsDark/AddressIconDark.png";
import GroupIconDark from "../assets/sidebarAssetsDark/GroupIconDark.png";
import ChatIconDark from "../assets/sidebarAssetsDark/ChatIconDark.png";


export const sidebarLinks = [
  {
    title: "Dashboards",
    links: [
      { 
        label: "Default", 
        icon: PieChartIcon, 
        darkIcon: ChartPieSliceDark, 
        children: [
            {label: "Home", path: "home"}
        ],
        path: "/Default" 
    },
      { 
        label: "eCommerce", 
        icon: CartIcon, 
        darkIcon: CartIconDark,
        children: [
            {label: "Order", path: "order"}
        ],
        path: "/ecommerce" 
    },
      { 
        label: "Projects", 
        icon: FolderIcon,
        darkIcon: FolderIconDark,
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/Projects" 
    },
      { 
        label: "Online Courses", 
        icon: BookIcon,
        darkIcon: BookIconDark, 
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/courses" 
    },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        label: "User Profile",
        icon: ContactIcon,
        darkIcon: ContactIconDark,
        children: [
          { label: "Overview", path: "/user/overview" },
          { label: "Projects", path: "/user/projects" },
          { label: "Campaigns", path: "/user/campaigns" },
          { label: "Documents", path: "/user/documents" },
          { label: "Followers", path: "/user/followers" },
        ],
      },
      { label: "Account", 
        icon: AddressIcon, 
        darkIcon: AddressIconDark,
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/account" 
    },
      { 
        label: "Corporate", 
        icon: GroupIcon, 
        darkIcon: GroupIconDark,
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/corporate" 
    },
      { 
        label: "Blog", 
        icon: BookIcon1, 
        darkIcon: BookIcon2Dark,
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/blog" 
    },
      { 
        label: "Social", 
        icon: ChatIcon, 
        darkIcon: ChatIconDark,
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/social" 
    },
    ],
  },
];
