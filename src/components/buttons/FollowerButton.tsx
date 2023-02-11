import { ButtonProps } from '@mui/material';
import React from 'react';
import { GroupRounded } from '@mui/icons-material';
import StyledButton from './StyledButton';

function FollowerButton(props: ButtonProps) {
  return (
    <StyledButton
      variant="contained"
      sx={{
        position: 'fixed',
        top: 25,
        right: 0,
        zIndex: 1100,
        height: '32px',
        minWidth: '0px',
        width: '32px',
        borderRadius: '45% 8px 8px 45%',
        pl: 2.9,
        pr: 3,
        ':hover': {
          transform: 'translateX(-10px)',
        },
        transition: 'all 0.1s linear',
      }}
      {...props}
    >
      <GroupRounded fontSize="small" />
    </StyledButton>
  );
}

export default FollowerButton;
