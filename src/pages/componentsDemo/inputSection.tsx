import React from 'react';
import { InputLabel, Stack, Typography } from '@mui/material';
import { StyledTextField } from '../../components';

function InputSection() {
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem" fontWeight={500} pb="36px">
        Input
      </Typography>
      <Stack spacing="48px">
        <Stack>
          <InputLabel shrink htmlFor="fjsl" sx={{ cursor: 'pointer' }}>
            <Typography fontSize="0.875rem" fontWeight={700}>
              NORMAL
            </Typography>
          </InputLabel>
          <StyledTextField placeholder="Keyword" id="fjsl" />
        </Stack>
        <Stack>
          <InputLabel
            shrink
            htmlFor="focused-fdsmkl"
            sx={{ cursor: 'pointer' }}
          >
            <Typography fontSize="0.875rem" fontWeight={700}>
              FOCUSED
            </Typography>
          </InputLabel>
          <StyledTextField
            placeholder="Keyword"
            id="focused-fdsmkl"
            focused
            defaultValue="Key"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InputSection;
