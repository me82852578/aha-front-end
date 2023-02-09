import React, { useState } from 'react';
import {
  Divider, Stack, Typography,
} from '@mui/material';
import { StyledButton, StyledSlider, StyledTextField } from '../../components';
import BottomBar from './bottomBar';

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

function Home() {
  const [prePageResults, setPrePageResults] = useState(15);
  return (
    <Stack height="100%" justifyContent="space-between" pt="56px">
      <Stack spacing="20px">
        <Typography fontSize="24px" fontWeight={400}>Search</Typography>
        <StyledTextField placeholder="Keyword" />
        <Divider sx={{ py: '10px' }} />
        <Typography fontSize="24px" fontWeight={400}># of results per page</Typography>
        <Stack direction="row" alignItems="flex-end" spacing="10px">
          <Typography fontSize="48px" fontWeight={700}>{prePageResults}</Typography>
          <Typography fontSize="16px" fontWeight={400} lineHeight="56px">results</Typography>
        </Stack>
        <StyledSlider
          marks={marks}
          max={20}
          min={3}
          step={null}
          value={prePageResults}
          onChange={(e, newVal) => {
            if (typeof newVal !== 'number') return;
            setPrePageResults(newVal);
          }}
        />
        <Divider sx={{ py: '10px' }} />
      </Stack>
      <StyledButton variant="contained" sx={{ marginBottom: '100px' }}>
        SEARCH
      </StyledButton>
      <BottomBar />
    </Stack>
  );
}

export default Home;
