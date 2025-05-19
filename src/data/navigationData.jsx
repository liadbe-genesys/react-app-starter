import DataTable from "../views/DataTable";
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import TableChartOutlined from '@mui/icons-material/TableChartOutlined';
import PagesOutlined from '@mui/icons-material/PagesOutlined';
import CloudQueueOutlined from '@mui/icons-material/CloudQueueOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Dashboard from "../views/Dashboard";
import BlogPosts from "../views/BlogPosts";
import FeaturePage from "../views/FeaturePage";
import AskModel from "../views/AskModel";

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
    element: <BlogPosts />, 
    icon: <PagesOutlined />
  },
  { 
    displayName: 'Ask AI', 
    path: 'model-ask', 
    element: <AskModel />, 
    icon: <PsychologyOutlinedIcon />
  },
  { 
    displayName: 'Empty Page', 
    path: 'empty-page', 
    element: <FeaturePage />, 
    icon: <CloudQueueOutlined />
  },
];