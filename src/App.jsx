import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import '@fontsource/inter';

import ErrorPage from './views/ErrorPage';
import AppContainer from './views/AppContainer';
// import Home from './views/Home';
// import FeaturePage from './views/FeaturePage';
// import DataTable from './views/DataTable';
import { navigationData } from './data/navigationData';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          // 300, 400, ..., 800,
          900: '#78350f',
        },
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Inter, var(--joy-fontFamily-fallback)',
  },
});

const routes = [
  {
    element: <AppContainer />,
    errorElement: <ErrorPage />,
    handle: { crumb: () => <span>Home</span> },
    children: navigationData.map(nav => {
      return {
        index: nav.path === '/' ? true : false,
        path: nav.path,
        element: nav.element,
      }
    })
  }
];

export default function App() {
  const router = createBrowserRouter(routes);

  return <CssVarsProvider theme={theme}><RouterProvider router={router} /></CssVarsProvider>;

}

