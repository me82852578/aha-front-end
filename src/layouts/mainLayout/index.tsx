import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Container,
  useMediaQuery,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import Sidebar from './sidebar';
import { FollowerButton, GoBackButton, SwipeableDrawer } from '../../components';
import { path } from '../../configs';
import Logo from './logo';
import { FollowerPanel } from '../../containers';

interface MainLayoutProps {
  disableStyleWrapped? : boolean
}

const topBarHeight = 70;

export default function MainLayout({ disableStyleWrapped = false } : MainLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const mediaQuery1440 = useMediaQuery('(min-width:1440px)');
  const [swipeableDrawerOpen, setSwipeableDrawerOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        backgroundColor: 'background.main',
        height: '100%',
        overflowY: 'overlay',
        overflowX: 'hidden',
      }}
    >
      <AppBar
        sx={{
          display: { xs: 'flex', md: 'none', boxShadow: 'none' },
        }}
      >
        <Toolbar sx={{ paddingX: '21px', height: topBarHeight, backgroundColor: 'background.main' }}>
          {location.pathname !== path.home ? (
            <GoBackButton
              label="Home page"
              slotsProp={{ iconButton: { sx: { paddingLeft: 0 } } }}
              onClick={() => navigate(path.home)}
            />
          ) : (
            <Logo />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          width: 80,
          '& .MuiDrawer-paper': {
            width: 80,
            backgroundColor: 'background.light',
            borderRight: 'none',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '88px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Logo />
        </Box>
        <Sidebar />
      </Drawer>
      {disableStyleWrapped ? <Outlet /> : (
        <>
          <Container
            fixed
            maxWidth="desktop"
            sx={{
              height: {
                xs: `calc(100% - ${topBarHeight}px)`,
                md: '100%',
              },
              paddingX: { xs: '20px' },
            }}
          >
            <Toolbar sx={{
              height: topBarHeight,
              display: { xs: 'flex', md: 'none' },
            }}
            />
            <Outlet />
          </Container>
          <FollowerButton onClick={() => setSwipeableDrawerOpen(true)} />
          <SwipeableDrawer
            open={swipeableDrawerOpen}
            onClose={() => setSwipeableDrawerOpen(false)}
            onOpen={() => setSwipeableDrawerOpen(true)}
            variant={mediaQuery1440 ? 'permanent' : 'temporary'}
            PaperProps={{
              sx: {
                position: mediaQuery1440 ? 'relative' : 'fixed',
              },
            }}
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 1101,
            }}
          >
            <FollowerPanel />
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
