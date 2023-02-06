import React, { useState } from 'react';
import {
  Box, Slider, SliderProps, styled,
} from '@mui/material';

const StyledSlider = styled(Slider)(({ theme }) => ({
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
    height: 24,
    width: 24,
    backgroundColor: theme.palette.background.light,
    border: '6px solid #FFD05D',
  },
  '.MuiSlider-markLabel': {
    top: '36px',
    fontSize: '16px',
  },
  '.test': {
    color: 'blue',
  },
}));

function CustomSlider({
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
    <Box>
      <StyledSlider
        // eslint-disable-next-line react/jsx-props-no-spreading
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
    </Box>
  );
}

export default CustomSlider;