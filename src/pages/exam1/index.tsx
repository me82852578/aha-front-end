import { Stack } from '@mui/material';
import React from 'react';
import PasswordInput from './passwordInput';
import Calendar from './calendar';

function Exam1() {
  return (
    <Stack component="section" spacing={8} height="100%">
      <Calendar />
      <PasswordInput />
    </Stack>
  );
}

export default Exam1;
