import React from 'react';
import { Box, Stack } from '@mui/material';
import { StyledButton, StyledTextField } from '../../components';

function Home() {
  return (
    <Box>
      <Stack spacing={2}>
        <StyledButton variant="contained">
          Search
        </StyledButton>
        <StyledTextField placeholder="Keyword" />
      </Stack>
    </Box>
  );
}

export default Home;
