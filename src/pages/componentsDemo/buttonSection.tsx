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
      <Grid container spacing="41px" mt="12px" pb="77px">
        <Grid>
          <Stack spacing="9px">
            <Typography fontSize="0.875rem" fontWeight={700}>
              NORMAL
            </Typography>
            <StyledButton variant="contained">BUTTON</StyledButton>
          </Stack>
        </Grid>
        <Grid>
          <Stack spacing="9px">
            <Typography fontSize="0.875rem" fontWeight={700}>
              HOVER
            </Typography>
            <StyledButton variant="outlined" sx={{ width: '343px' }}>BUTTON</StyledButton>
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing="23px">
        {['Outlined', 'Contained'].map((key, index) => (
          <Stack
            direction="row"
            key={key}
            alignItems="flex-end"
            flexWrap="wrap"
            spacing="0px"
          >
            <Box width="108px">
              <Typography lineHeight={2} fontSize="0.875rem" fontWeight={300}>
                {key}
              </Typography>
            </Box>
            <Stack direction="row" spacing="53px">
              <Stack>
                <Typography fontSize="0.875rem" fontWeight={700} pb="8px">
                  NORMAL
                </Typography>
                <StyledChipButton
                  variant={index === 0 ? 'outlined' : 'contained'}
                >
                  Button
                </StyledChipButton>
              </Stack>
              <Stack>
                <Typography fontSize="0.875rem" fontWeight={700} pb="8px">
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
