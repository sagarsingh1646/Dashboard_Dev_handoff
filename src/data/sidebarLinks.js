// src/data/sidebarLinks.js
import PieChartIcon from "../assets/sidebarAssets/PieChartIcon.png";
import CartIcon from "../assets/sidebarAssets/CartIcon.png";
import FolderIcon from "../assets/sidebarAssets/FolderIcon.png";
import BookIcon from "../assets/sidebarAssets/BookIcon.png";
import BookIcon1 from "../assets/sidebarAssets/BookIcon1.png";
import ContactIcon from "../assets/sidebarAssets/ContactIcon.png";
import AddressIcon from "../assets/sidebarAssets/AddressIcon.png";
import GroupIcon from "../assets/sidebarAssets/GroupIcon.png";
import ChatIcon from "../assets/sidebarAssets/ChatIcon.png";

export const sidebarLinks = [
  {
    title: "Dashboards",
    links: [
      { 
        label: "Default", 
        icon: PieChartIcon,  
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/Default" 
    },
      { 
        label: "eCommerce", 
        icon: CartIcon, 
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/ecommerce" 
    },
      { 
        label: "Projects", 
        icon: FolderIcon,
                children: [
            {label: "abc", path: "abc"}
        ],
        path: "/Projects" 
    },
      { 
        label: "Online Courses", 
        icon: BookIcon, 
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
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/account" 
    },
      { 
        label: "Corporate", 
        icon: GroupIcon, 
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/corporate" 
    },
      { 
        label: "Blog", 
        icon: BookIcon1, 
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/blog" 
    },
      { 
        label: "Social", 
        icon: ChatIcon, 
        children: [
            {label: "abc", path: "abc"}
        ],
        path: "/social" 
    },
    ],
  },
];
