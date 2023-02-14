import React, { useState } from 'react';
import {
  Box, Slider, SliderProps, styled,
} from '@mui/material';

export const StyledSlider = styled(Slider)(({ theme }) => ({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    background: theme.palette.gradient.main,
    color: 'red',
  },
  '.MuiSlider-rail': {
    backgroundColor: '#FFFFFF',
  },
  '.MuiSlider-mark': {
    display: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 26,
    width: 26,
    backgroundColor: theme.palette.background.light,
    border: '6px solid #FFD05D',
  },
  '.MuiSlider-markLabel': {
    top: '42px !important',
    fontSize: '1rem',
  },
  '.test': {
    color: 'blue',
  },
}));

export function CustomSlider({
  onChangeCommitted, defaultValue, value, marks, ...other
}: SliderProps) {
  const [currentVal, setCurrentVal] = useState(
    value || defaultValue || (Array.isArray(marks) && marks[0].value) || 0,
  );
  const handleOnChangeCommitted = (
    e: Event | React.SyntheticEvent<Element, Event>,
    newVal: number | number[],
  ) => {
    setCurrentVal(newVal);
    if (typeof onChangeCommitted === 'function') {
      onChangeCommitted(e, newVal);
    }
  };

  return (
    <StyledSlider
      {...other}
      defaultValue={defaultValue}
      value={value}
      onChangeCommitted={handleOnChangeCommitted}
      marks={
          Array.isArray(marks)
            ? marks.map((mark) => ({
              ...mark,
              label: (
                <Box
                  key={mark.value}
                  sx={mark.value === currentVal ? { color: 'white' } : { opacity: 0.5 }}
                >
                  {mark.label || mark.value}
                </Box>
              ),
            }))
            : marks
        }
    />
  );
}
