import React from 'react';
import {
  AppBar, BottomNavigation, BottomNavigationAction, Box, Stack, Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../../configs';

interface BottomBarProps {
  height? : string
}

const appBarStyles = {
  position: 'fixed',
  top: 'auto',
  bottom: 0,
};

function BackBackground({ height = '66px' } : BottomBarProps) {
  return (
    <AppBar
      sx={{
        ...appBarStyles,
        height,
        display: { sm: 'flex', md: 'none' },
        backgroundColor: 'background.dark',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          '.MuiTypography-root': {
            fontSize: '1.25rem',
            fontWeight: 700,
          },
        }}
      >
        <Stack bgcolor="background.light" justifyContent="center" sx={{ width: '155px', pl: 3 }}>
          <Typography>Weakness</Typography>
        </Stack>
        <Stack bgcolor="background.light" justifyContent="center" sx={{ width: '155px', pl: 3 }}>
          <Typography>AI Tutor</Typography>
        </Stack>
      </Stack>
    </AppBar>
  );
}

function BottomBar({ height = '66px' }:BottomBarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box position="relative" height={height}>
      <AppBar
        sx={{
          ...appBarStyles,
          height,
          zIndex: 1101,
          display: { md: 'none' },
          background: 'rgba(24, 24, 24, 0.2)',
          boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(27.1828px)',
        }}
      >
        <BottomNavigation
          value={location.pathname}
          showLabels={false}
          sx={{
            height: '100%',
            backgroundColor: 'transparent',
          }}
          onChange={(e, newVal) => navigate(newVal)}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              disableRipple
              key={item.id}
              value={item.url}
              icon={item.icon({
                sx: {
                  color: location.pathname === item.url ? 'white' : '#6A6A6A',
                },
              })}
              sx={{
                width: 'fit-content', px: '25px', flex: 0,
              }}
            />
          ))}
        </BottomNavigation>
      </AppBar>
      <BackBackground height={height} />
    </Box>
  );
}

export default BottomBar;
