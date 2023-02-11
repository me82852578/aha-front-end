import React from 'react';
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../configs';

function Sidebar() {
  const location = useLocation();

  return (
    <List>
      {navItems.map((item) => (
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
              <Badge
                variant="dot"
                invisible={item.id !== '/tags'}
                color="error"
                sx={{
                  '.MuiBadge-dot': {
                    backgroundColor: '#00D1FF',
                    minWidth: '7px',
                    height: '7px',
                    top: '-2px',
                    right: '-2px',
                  },
                }}
              >
                {item.icon({
                  sx: {
                    color: location.pathname === item.url ? 'white' : '#6A6A6A',
                  },
                })}
              </Badge>
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              sx={{ opacity: 0 }}
              primaryTypographyProps={{ fontSize: '0.75rem' }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
