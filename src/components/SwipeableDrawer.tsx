import { SwipeableDrawer as MuiSwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
import React from 'react';

function SwipeableDrawer({ PaperProps, ...other } : SwipeableDrawerProps) {
  return (
    <MuiSwipeableDrawer
      anchor="right"
      disableSwipeToOpen={false}
      disableBackdropTransition
      minFlingVelocity={250}
      hysteresis={0.2}
      swipeAreaWidth={20}
      PaperProps={{
        ...PaperProps,
        sx: {
          borderLeft: 'none',
          ...PaperProps?.sx,
        },
      }}
      {...other}
    />
  );
}

export default SwipeableDrawer;
