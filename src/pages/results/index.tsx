import {
  Box,
  Unstable_Grid2 as Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { UserType } from '../../types';
import { GoBackButton, StyledButton } from '../../components';
import { useUsersInfiniteQuery } from '../../api/source/users';

interface ResultProps extends Omit<UserType, 'id'> {}

function Result({ name = '', username = '', avater = '' }: ResultProps) {
  return (
    <Stack width="100%" spacing={{ xs: '20.33px', md: '12px' }}>
      <Box
        component="img"
        width="100%"
        alt={name}
        src={avater}
        sx={{
          objectFit: 'cover',
          aspectRatio: { xs: '3 / 1.995', sm: '3 / 2' },
        }}
        loading="lazy"
      />
      <Box pt="1px">
        <Typography fontSize="14.9px" noWrap>
          {name}
        </Typography>
        <Typography fontSize="11.17px" color="#B2B2B2" noWrap>
          by
          {' '}
          {username}
        </Typography>
      </Box>
    </Stack>
  );
}

const pageSize = 10;
const keyword = 'al';
function Results() {
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useUsersInfiniteQuery({ type: 'followers', pageSize, keyword });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

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
        {data
          && isSuccess
          && data.pages.map((group) => group.data.map((item: UserType, index: number) => (
            <Grid key={item.id} position="relative" xs={12} sm={6} md={4}>
              {group.page === 1 && index === 0 && (
              <GoBackButton
                label="Results"
                position="absolute"
                top={{ xs: '-44px', sm: '-52px' }}
                left={{ xs: '-46px', md: '-34px' }}
                spacing={2}
                slotsProp={{
                  typography: {
                    fontSize: { xs: '1.5rem', md: '1.875rem' },
                  },
                  iconButton: {
                    sx: { visibility: { xs: 'hidden', md: 'visible' } },
                  },
                }}
              />
              )}
              <Result
                name={item.name}
                username={item.username}
                avater={item.avater}
              />
            </Grid>
          )))}
        {isSuccess && !data.pages[0].total && (
        <Grid position="relative" xs={12} sm={6} md={4}>
          <GoBackButton
            label="Results"
            position="absolute"
            top={{ xs: '-44px', sm: '-52px' }}
            left={{ xs: '-46px', md: '-34px' }}
            spacing={2}
            slotsProp={{
              typography: { fontSize: { xs: '1.5rem', md: '1.875rem' } },
              iconButton: {
                sx: { visibility: { xs: 'hidden', md: 'visible' } },
              },
            }}
          />
        </Grid>
        )}
        {(isFetchingNextPage || !isSuccess)
          && Array.from(Array(pageSize).keys()).map((k, index) => (
            <Grid key={k} position="relative" xs={12} sm={6} md={4}>
              {index === 0 && !data && (
                <GoBackButton
                  label="Results"
                  position="absolute"
                  top={{ xs: '-44px', sm: '-52px' }}
                  left={{ xs: '-46px', md: '-34px' }}
                  spacing={2}
                  slotsProp={{
                    typography: { fontSize: { xs: '1.5rem', md: '1.875rem' } },
                    iconButton: {
                      sx: { visibility: { xs: 'hidden', md: 'visible' } },
                    },
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
          />
        ))}
      </Grid>
      <StyledButton
        variant="contained"
        sx={{
          width: { xs: '335px', md: '343px' },
          mb: '50px',
          visibility: { xs: !hasNextPage ? 'visible' : 'hidden', md: 'visible' },
        }}
        disabled={!hasNextPage}
        onClick={() => fetchNextPage()}
      >
        {hasNextPage ? 'MORE' : 'NO MORE'}
        <Box ref={ref} sx={{ display: { xs: 'block', md: 'none' } }} />
      </StyledButton>
    </>
  );
}

export default Results;
