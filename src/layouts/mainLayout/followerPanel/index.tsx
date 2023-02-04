import {
  Box, Tab, Tabs, Typography,
} from '@mui/material';
import React, { ReactNode, SyntheticEvent, useState } from 'react';

interface TabPanelProps {
  children:ReactNode;
  index: number;
  value: number;
}

const tabItems = [
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
    <div
      role="tabpanel"
      hidden={value !== index}
      id={index.toString()}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function FollowerPanel() {
  const [value, setValue] = useState(tabItems[0].index);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '375px', backgroundColor: 'background.secondary' }}>
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
                fontSize: '16px',
                fontWeight: 700,
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
          {tabItem.label}
        </TabPanel>
      ))}
    </Box>
  );
}

export default FollowerPanel;
