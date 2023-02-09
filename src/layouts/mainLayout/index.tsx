import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Container,
  useMediaQuery,
  SwipeableDrawer,
  AppBar,
  Toolbar,
} from '@mui/material';
import {
  Outlet, useLocation, useNavigate,
} from 'react-router-dom';
import Sidebar from './sidebar';
import FollowerPanel from './followerPanel';
import { GoBackButton } from '../../components';
import { path } from '../../configs';
import FollowerButton from './followerPanel/followerButton';
import Logo from './logo';

const topBarHeight = 70;

export default function MainLayout() {
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
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <AppBar
        sx={{
          display: { sm: 'flex', md: 'none' },
        }}
      >
        <Toolbar sx={{ paddingX: '21px', height: topBarHeight }}>
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
      <Container
        fixed
        maxWidth="desktop"
        sx={{
          height: `calc(100% - ${topBarHeight}px)`,
          paddingX: { xs: '20px' },
        }}
      >
        <Toolbar sx={{ height: topBarHeight }} />
        <Outlet />
      </Container>
      {mediaQuery1440 ? (
        <Box
          sx={{
            position: 'sticky',
            top: '0px',
            right: '0px',
          }}
        >
          <FollowerPanel />
        </Box>
      ) : (
        <>
          <FollowerButton onClick={() => setSwipeableDrawerOpen(true)} />
          <SwipeableDrawer
            disablePortal
            open={swipeableDrawerOpen}
            anchor="right"
            onClose={() => {
              setSwipeableDrawerOpen(false);
            }}
            onOpen={() => {
              setSwipeableDrawerOpen(true);
            }}
            disableSwipeToOpen={false}
            disableBackdropTransition
            minFlingVelocity={250}
            hysteresis={0.2}
            swipeAreaWidth={20}
          >
            <FollowerPanel />
          </SwipeableDrawer>
        </>
      )}
    </Box>
  );
}
