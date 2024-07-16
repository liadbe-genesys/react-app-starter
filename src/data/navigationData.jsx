import DataTable from "../views/DataTable";
import Home from "../views/Home";
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import TableChartOutlined from '@mui/icons-material/TableChartOutlined';
import PagesOutlined from '@mui/icons-material/PagesOutlined';
import CloudQueueOutlined from '@mui/icons-material/CloudQueueOutlined';
import Dashboard from "../views/Dashboard";

export const navigationData = [
  { 
    displayName: 'Dashboard', 
    path: '/', 
    element: <Dashboard />, 
    icon: <DashboardOutlined />
  },
  { 
    displayName: 'Data Table', 
    path: 'data-table', 
    element: <DataTable />,
    icon: <TableChartOutlined />
  },
  { 
    displayName: 'Blog Posts', 
    path: 'blog-posts', 
    element: <Home />, 
    icon: <PagesOutlined />
  },
  { 
    displayName: 'External Resources', 
    path: 'external-resources', 
    element: <Home />, 
    icon: <CloudQueueOutlined />
  },
];