import {
  Box, Tab, Tabs,
} from '@mui/material';
import React, { ReactNode, SyntheticEvent, useState } from 'react';
import UsersList from './usersList';

interface TabPanelProps {
  children:ReactNode;
  index: number;
  value: number;
}

interface TabItemProps {
  id:'followers' | 'following'
  index: number
  label:string
}

const tabItems:TabItemProps[] = [
  {
    id: 'followers',
    index: 0,
    label: 'Followers',
  },
  {
    id: 'following',
    index: 1,
    label: 'Following',
  },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={index.toString()}
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      {value === index && children}
    </Box>
  );
}

function FollowerPanel() {
  const [value, setValue] = useState(tabItems[0].index);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '375px',
      backgroundColor: 'background.light',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="inherit"
          sx={{
            color: '#929292',
            opacity: 0.87,
            '.Mui-selected': {
              color: 'white',
              opacity: 1,
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: 'white',
            },
          }}
        >
          {tabItems.map((tabItem) => (
            <Tab
              key={tabItem.id}
              label={tabItem.label}
              id={tabItem.id}
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                mt: '17px',
                pb: '9px',
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabItems.map((tabItem) => (
        <TabPanel
          key={tabItem.id}
          index={tabItem.index}
          value={value}
        >
          <UsersList type={tabItem.id} />
        </TabPanel>
      ))}
    </Box>
  );
}

export default FollowerPanel;
