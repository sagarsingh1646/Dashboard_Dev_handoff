src/
│
├── assets/                  # Static files (icons, images)
│
├── components/
│   ├── layout/              # Layout components
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   └── Layout.jsx
│   │
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── StatsCard.jsx
│   │   ├── BarChartCard.jsx
│   │   ├── LineChartCard.jsx
│   │   ├── RevenueByLocation.jsx
│   │   ├── TopSellingProductsTable.jsx
│   │   └── TotalSalesDonut.jsx
│   │
│   └── common/              # Reusable components (buttons, modals)
│       └── ThemeToggle.jsx
│
├── features/                # Redux slices
│   └── theme/
│       ├── themeSlice.js
│       └── ThemeToggle.jsx
│
├── pages/                    # Application pages
│   └── Dashboard.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── services/                 # API integrations
│   └── api.js
│
├── store/                     # Redux store setup
│   └── store.js
│
├── styles/
│   └── index.css
│
├── App.jsx
└── main.jsx
