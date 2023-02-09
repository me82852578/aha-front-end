import React from 'react';
import { Box, Stack } from '@mui/material';
import { StyledButton, StyledSlider, StyledTextField } from '../../components';
import BottomBar from './bottomBar';

function Home() {
  const marks = [
    {
      label: 3,
      value: 3,
    },
    {
      label: 6,
      value: 6,
    },
    {
      label: 9,
      value: 9,
    },
    {
      label: 12,
      value: 12,
    },
    {
      label: 15,
      value: 15,
    },
    {
      label: 50,
      value: 20,
    },
  ];

  return (
    <Box>
      <Stack spacing={2}>
        <StyledButton variant="contained">
          Search
        </StyledButton>
        <StyledTextField placeholder="Keyword" />
        <StyledSlider
          marks={marks}
          max={20}
          min={3}
          step={null}
        />
        <StyledSlider
          defaultValue={9}
          marks={marks}
          max={20}
          min={3}
          step={null}
        />
      </Stack>
      <BottomBar />
    </Box>
  );
}

export default Home;
