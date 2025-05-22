import { useState } from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import { navigationData } from '../data/navigationData';

/**
 * Main container of the app, responsible for page layout.
 * All pages being navigated are rendered here, using <Outlet />.
 */
export default function AppContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}

      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Header />
        </Layout.Header>

        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        
        <Layout.Main>
          <Outlet />
        </Layout.Main>
        
      </Layout.Root>
    </>
  );
}