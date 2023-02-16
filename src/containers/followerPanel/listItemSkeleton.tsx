import React from 'react';
import {
  ListItemAvatar, ListItemText, Skeleton,
} from '@mui/material';
import ListItem from './styledListItem';

function ListItemSkeleton() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Skeleton
          variant="rounded"
          width={40}
          height={40}
          sx={{
            borderRadius: '5px',
          }}
        />
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
