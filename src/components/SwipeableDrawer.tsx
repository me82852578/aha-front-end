import { SwipeableDrawer as MuiSwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
import React from 'react';

function SwipeableDrawer(props : SwipeableDrawerProps) {
  return (
    <MuiSwipeableDrawer
      anchor="right"
      disableSwipeToOpen={false}
      disableBackdropTransition
      minFlingVelocity={250}
      hysteresis={0.2}
      swipeAreaWidth={20}
      {...props}
    />
  );
}

export default SwipeableDrawer;
