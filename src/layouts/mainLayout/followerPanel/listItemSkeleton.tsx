import React from 'react';
import {
  ListItem, ListItemAvatar, ListItemText, Skeleton,
} from '@mui/material';

function ListItemSkeleton() {
  return (
    <ListItem sx={{ px: '16px' }}>
      <ListItemAvatar>
        <Skeleton variant="circular" width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primary={(
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem', maxWidth: '50%' }}
          />
              )}
        secondary={(
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem', maxWidth: '35%' }}
          />
              )}
      />
    </ListItem>
  );
}

export default ListItemSkeleton;
