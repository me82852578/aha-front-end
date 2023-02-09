import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Link as MuiLink,
  Container,
  useMediaQuery,
  SwipeableDrawer,
  ButtonProps,
} from '@mui/material';
import { GroupRounded } from '@mui/icons-material';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './sidebar';
import FollowerPanel from './followerPanel';
import { StyledButton } from '../../components';
import { path } from '../../configs';

function FollowerButton(props : ButtonProps) {
  return (
    <StyledButton
      variant="contained"
      sx={{
        position: 'fixed',
        top: '3%',
        right: -8,
        zIndex: 1200,
        height: '32px',
        minWidth: '0px',
        width: '32px',
        borderRadius: '45% 8px 8px 45%',
        pl: 2.9,
        pr: 3,
        ':hover': {
          transform: 'translateX(-10px)',
        },
        transition: 'all 0.1s linear',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <GroupRounded fontSize="small" />
    </StyledButton>
  );
}

export default function MainLayout() {
  const mediaQuery1440 = useMediaQuery('(min-width:1440px)');
  const [swipeableDrawerOpen, setSwipeableDrawerOpen] = useState(false);
  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      backgroundColor: 'background.main',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    }}
    >
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
        <Box sx={{
          width: '100%',
          height: '88px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <MuiLink
            underline="none"
            unselectable="on"
            component={Link}
            to={path.home}
            fontWeight={700}
            sx={{
              background: (theme) => theme.palette.gradient.main,
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            LOGO
          </MuiLink>
        </Box>
        <Sidebar />
      </Drawer>
      <Container
        fixed
        maxWidth="desktop"
        sx={{
          height: '100%',
          paddingX: { xs: '20px' },
        }}
      >
        <Outlet />
      </Container>
      {mediaQuery1440 ? (
        <Box sx={{
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
