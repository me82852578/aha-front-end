import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { TagType } from '../../types';

interface TagProps extends Omit<TagType, 'id'> {}

function Tag({ name = '', count = 0 }: TagProps) {
  return (
    <Stack width="150px" spacing="10px">
      <Stack
        height="150px"
        width="100%"
        justifyContent="flex-end"
        borderRadius="10px"
        bgcolor="rgb(255, 255, 255, 0.06)"
        padding="14px 10px"
      >
        <Box
          width="fit-content"
          maxWidth="100%"
          border="4px solid white"
          borderRadius="8px"
          padding="3px 14px"
        >
          <Typography fontSize="1.5rem" fontWeight={700} noWrap>
            {name}
          </Typography>
        </Box>
      </Stack>
      <Box pt="1px">
        <Typography fontSize="14.9px" noWrap>
          {name}
        </Typography>
        <Typography fontSize="11.17px" color="#B2B2B2" noWrap>
          {count}
          {' '}
          Results
        </Typography>
      </Box>
    </Stack>
  );
}

export default Tag;
