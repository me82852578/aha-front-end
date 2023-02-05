import * as React from 'react';
import {
  Box,
  Container,
  Drawer,
  Link as MuiLink,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './sidebar';
import configs from '../../configs';
import FollowerPanel from './followerPanel';

export default function MainLayout() {
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: 'background.main',
      height: '100vh',
      minHeight: '-webkit-fill-available',
    }}
    >
      <Drawer
        variant="permanent"
        sx={{
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
            to={configs.path.home}
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
      <Container component="main" maxWidth="lg">
        <Outlet />
      </Container>
      <FollowerPanel />
    </Box>
  );
}
