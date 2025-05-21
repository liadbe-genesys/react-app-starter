import DataTable from "../views/DataTable";
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import TableChartOutlined from '@mui/icons-material/TableChartOutlined';
import PagesOutlined from '@mui/icons-material/PagesOutlined';
import CloudQueueOutlined from '@mui/icons-material/CloudQueueOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Dashboard from "../views/Dashboard";
import BlogPosts from "../views/BlogPosts";
import FeaturePage from "../views/FeaturePage";
import AskModel from "../views/AskModel";
import BuildLearningPlan from "../views/BuildLearningPlan";

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
    displayName: 'Build a Plan', 
    path: 'puild-a-plan', 
    element: <BuildLearningPlan />, 
    icon: <ListAltOutlinedIcon />
  },
  // --------------------
  // TODO: Add a New Page
  // displayName - title of the page 
  // path - relative url to the page  
  // element -  the element to be rendered - <FeaturePage /> component 
  // icon - the icon to be shown <CloudQueueOutlined />
  // --------------------
  { 
    displayName: 'My New Page', 
    path: 'empty-page',  
    element: <BuildLearningPlan />, 
    icon: <CloudQueueOutlined />,
  },
];