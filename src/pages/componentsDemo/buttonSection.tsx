import React from 'react';
import {
  Box, Stack, Typography, Unstable_Grid2 as Grid,
} from '@mui/material';
import { StyledButton, StyledChipButton } from '../../components';

function ButtonSection() {
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem" fontWeight={700}>
        Button
      </Typography>
      <Grid container spacing="41px" mt="37px" pb="80px">
        <Grid>
          <Typography variant="body1" fontWeight={700}>
            NORMAL
          </Typography>
          <StyledButton variant="contained">BUTTON</StyledButton>
        </Grid>
        <Grid>
          <Typography variant="body1" fontWeight={700}>
            HOVER
          </Typography>
          <StyledButton variant="outlined">BUTTON</StyledButton>
        </Grid>
      </Grid>
      <Stack spacing="25px">
        {['Outlined', 'Contained'].map((key, index) => (
          <Stack
            direction="row"
            key={key}
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Box width="114px">
              <Typography fontSize="0.875rem" fontWeight={300}>
                {key}
              </Typography>
            </Box>
            <Stack direction="row" spacing="60px">
              <Stack>
                <Typography fontSize="0.875rem" fontWeight={700} pb="10px">
                  NORMAL
                </Typography>
                <StyledChipButton
                  variant={index === 0 ? 'outlined' : 'contained'}
                >
                  Button
                </StyledChipButton>
              </Stack>
              <Stack>
                <Typography fontSize="0.875rem" fontWeight={700} pb="10px">
                  HOVER
                </Typography>
                <StyledChipButton
                  variant={index === 1 ? 'outlined' : 'contained'}
                >
                  Button
                </StyledChipButton>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default ButtonSection;
