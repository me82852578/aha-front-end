import { ButtonProps } from '@mui/material';
import React from 'react';
import { GroupRounded } from '@mui/icons-material';
import { StyledButton } from '../../../components';

function FollowerButton(props: ButtonProps) {
  return (
    <StyledButton
      variant="contained"
      sx={{
        position: 'fixed',
        top: 19,
        right: -9,
        zIndex: 1200,
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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <GroupRounded fontSize="small" />
    </StyledButton>
  );
}

export default FollowerButton;