import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import sidebarItems from './sidebarItems';

function Sidebar() {
  const location = useLocation();

  return (
    <List>
      {sidebarItems.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={{
            '.MuiListItemText-root': {
              ...location.pathname === item.url && {
                opacity: 1,
              },
            },
            ':hover': {
              '.MuiListItemText-root': {
                opacity: 1,
              },
              '.MuiListItemIcon-root svg': {
                color: 'white',
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
              {item.icon({
                sx: {
                  color: location.pathname === item.url ? 'white' : '#6A6A6A',
                },
              })}
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={{ opacity: 0 }}
              primaryTypographyProps={{ fontSize: '12px' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
