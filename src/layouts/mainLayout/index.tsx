import * as React from 'react';
import {
  Box,
  Drawer,
  Link as MuiLink,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './sidebar';
import configs from '../../configs';

export default function MainLayout() {
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: 'background.primary',
    }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: 80,
          '& .MuiDrawer-paper': {
            width: 80,
            backgroundColor: 'background.secondary',
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
              background: (theme) => theme.palette.gradient.primary,
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            LOGO
          </MuiLink>
        </Box>
        <Sidebar />
      </Drawer>
      <Outlet />
    </Box>
  );
}
