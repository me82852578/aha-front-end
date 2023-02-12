import {
  Box,
  Unstable_Grid2 as Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { TagType } from '../../types';
import { tagsApi } from '../../api/source';
import { GoBackButton, StyledButton } from '../../components';

interface ResultProps extends Omit<TagType, 'id'> {}

function Result({ name = '', count = 0 }: ResultProps) {
  return (
    <Stack width="100%" spacing={{ xs: '20.33px', md: '12px' }}>
      <Box
        component="img"
        width="100%"
        alt="test"
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format"
        sx={{ objectFit: 'cover', aspectRatio: { xs: '3 / 1.995', sm: '3 / 2' } }}
      />
      <Box pt="1px">
        <Typography fontSize="14.9px" noWrap>
          {name}
        </Typography>
        <Typography fontSize="11.17px" color="#B2B2B2">
          {count}
          {' '}
          Results
        </Typography>
      </Box>
    </Stack>
  );
}

function Results() {
  const {
    data, isLoading, isSuccess, isFetching,
  } = useQuery({
    queryKey: [tagsApi.sourceUrl],
    queryFn: tagsApi.getData,
  });

  return (
    <>
      <Box height={{ xs: '80px', md: '160px' }} />
      <Grid
        container
        columnSpacing="34px"
        rowSpacing={{ xs: '40px', md: '31px' }}
        justifyContent="center"
        pb="44px"
      >
        {isLoading || isFetching || !isSuccess
          ? Array.from(Array(4).keys()).map((k, index) => (
            <Grid key={k} position="relative" xs={12} sm={6} md={4}>
              {index === 0
              && (
                <GoBackButton
                  label="Results"
                  position="absolute"
                  top={{ xs: '-44px', sm: '-52px' }}
                  left={{ xs: '-46px', md: '-34px' }}
                  spacing={2}
                  slotsProp={{
                    typography: { fontSize: { xs: '1.5rem', md: '1.875rem' } },
                    iconButton: { sx: { visibility: { xs: 'hidden', md: 'visible' } } },
                  }}
                />
              )}
              <Skeleton
                variant="rounded"
                width="100%"
                height="auto"
                sx={{
                  borderRadius: '8px',
                  mb: '8px',
                  aspectRatio: { xs: '3 / 1.995', sm: '3 / 2' },
                }}
              />
              <Skeleton
                width="60%"
                variant="text"
                sx={{ fontSize: '0.9rem' }}
              />
              <Skeleton
                width="40%"
                variant="text"
                sx={{ fontSize: '0.7rem' }}
              />
            </Grid>
          ))
          : data.map((item: TagType, index:number) => (
            <Grid key={item.id} position="relative" xs={12} sm={6} md={4}>
              {index === 0
              && (
                <GoBackButton
                  label="Results"
                  position="absolute"
                  top={{ xs: '-44px', sm: '-52px' }}
                  left={{ xs: '-46px', md: '-34px' }}
                  spacing={2}
                  slotsProp={{
                    typography: { fontSize: { xs: '1.5rem', md: '1.875rem' } },
                    iconButton: { sx: { visibility: { xs: 'hidden', md: 'visible' } } },
                  }}
                />
              )}
              <Result name={item.name} count={item.count} />
            </Grid>
          ))}
        {Array.from(Array(4).keys()).map((k) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            key={k}
            height="0px"
            overflow="hidden"
            paddingY="0px"
            visibility="hidden"
          >
            <Result name="null" count={0} />
          </Grid>
        ))}
      </Grid>
      <StyledButton variant="contained" sx={{ width: '343px', mb: '50px' }}>
        MORE
      </StyledButton>
    </>
  );
}

export default Results;
