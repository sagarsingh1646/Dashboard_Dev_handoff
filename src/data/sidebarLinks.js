import ChartPieSlice from "../assets/sidebarAssets/ChartPieSlice.png"
export const sidebarLinks = [
  {
    title: 'Dashboards',
    links: [
      { label: 'Default', icon: '🏠', path: '/' },
      { label: 'eCommerce', icon: '🛒', path: '/ecommerce' },
      { label: 'Projects', icon: '📁', path: '/projects' },
      { label: 'Online Courses', icon: '📚', path: '/courses' },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        label: 'User Profile',
        icon: '🖼️',
        children: [
          { label: 'Overview', path: '/user/overview' },
          { label: 'Projects', path: '/user/projects' },
          { label: 'Campaigns', path: '/user/campaigns' },
          { label: 'Documents', path: '/user/documents' },
          { label: 'Followers', path: '/user/followers' },
        ],
      },
      { label: 'Account', icon: '🖼️', path: '/account' },
      { label: 'Corporate', icon: '👥', path: '/corporate' },
      { label: 'Blog', icon: '📄', path: '/blog' },
      { label: 'Social', icon: '💬', path: '/social' },
    ],
  },
];
