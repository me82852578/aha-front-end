import * as React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MuiLink,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import sidebarItems from './sidebarItems';

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        color="blue"
        sx={{
          width: 80,
          '& .MuiDrawer-paper': {
            width: 80,
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
            component={Link}
            to={sidebarItems[0].url}
          >
            LOGO
          </MuiLink>
        </Box>
        <List>
          {sidebarItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                ':hover': {
                  '.MuiListItemText-root': {
                    opacity: 1,
                  },
                },
              }}
            >
              <ListItemButton
                component={Link}
                to={item.url}
                sx={{
                  flexDirection: 'column',
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  {item.icon()}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet />
    </Box>
  );
}
