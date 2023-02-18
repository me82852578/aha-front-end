import { Face5Rounded, SentimentVeryDissatisfiedRounded, SentimentVerySatisfiedRounded } from '@mui/icons-material';
import { Stack, Typography, styled } from '@mui/material';
import React from 'react';

const JumpWrappedBox = styled(Stack)({
  svg: {
    fontSize: '60px',
    position: 'relative',
    animation: 'jump 0.5s ease-out 0s infinite alternate both',
    '&:nth-of-type(2)': {
      animationDelay: '0.25s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '0.5s',
    },
  },
  '@keyframes jump': {
    '0%': {
      bottom: '0px',
    },
    '1%': {
      transform: 'scale(1.5, 1)',
    },
    '30%': {
      transform: 'scale(1, 1)',
    },
    '100%': {
      bottom: '70px',
    },
  },
});

function NotFound() {
  return (
    <Stack alignItems="center" pt={{ xs: '88px', md: '108px' }} spacing={10}>
      <Typography variant="h5">Page not found !</Typography>
      <JumpWrappedBox
        className="jump-wrapped"
        direction="row"
        spacing={3}
        alignItems="flex-end"
        sx={{ height: '150px', padding: '26px 0px' }}
      >
        <SentimentVerySatisfiedRounded />
        <Face5Rounded />
        <SentimentVeryDissatisfiedRounded />
      </JumpWrappedBox>
    </Stack>
  );
}

export default NotFound;
