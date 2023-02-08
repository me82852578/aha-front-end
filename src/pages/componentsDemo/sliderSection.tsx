import { Stack, Typography } from '@mui/material';
import React from 'react';
import { StyledSlider } from '../../components';

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

function SliderSection() {
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem" fontWeight={700} mb="37px">
        Slider
      </Typography>
      <Stack spacing="48px">
        <StyledSlider
          marks={marks}
          max={20}
          min={3}
          step={null}
          defaultValue={15}
        />
        <StyledSlider
          defaultValue={50}
          marks={marks}
          max={20}
          min={3}
          step={null}
        />
      </Stack>
    </Stack>
  );
}

SliderSection.propTypes = {};

export default SliderSection;
