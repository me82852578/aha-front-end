import {
  Box, Typography,
} from '@mui/material';
import React from 'react';
import ButtonSection from './buttonSection';
import SliderSection from './sliderSection';
import InputSection from './inputSection';

function ComponentsDemo() {
  return (
    <Box component="section" pt="88px">
      <Typography component="h1" fontSize="1.875rem" fontWeight={700} pb="89px">
        Component
      </Typography>
      <Box pb="108px">
        <ButtonSection />
      </Box>
      <Box pb="137px">
        <InputSection />
      </Box>
      <Box pb="159px">
        <SliderSection />
      </Box>
    </Box>
  );
}

export default ComponentsDemo;
