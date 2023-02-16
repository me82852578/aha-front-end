import {
  Box,
  Unstable_Grid2 as Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { UserType } from '../../types';
import { GoBackButton, StyledButton } from '../../components';
import { useUsersInfiniteQuery } from '../../api/source/users';
import { path } from '../../configs';
import { useHomePageSearchStore } from '../../store';

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
          aspectRatio: { xs: '3 / 1.99', sm: '3 / 2' },
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

function Results() {
  const navigate = useNavigate();

  const searchParamsStore = useHomePageSearchStore(
    (state) => ({
      keyword: state.keyword,
      pageSize: state.pageSize,
      updateKeyword: state.updateKeyword,
      updatePageSize: state.updatePageSize,
    }),
    shallow,
  );

  // If enter the results page directly through the url without query, init query,
  // then setSearchParams.
  const [searchParams, setSearchParams] = useSearchParams({
    keyword: searchParamsStore.keyword,
    pageSize: searchParamsStore.pageSize.toString(),
  });
  const { keyword, pageSize } = Object.fromEntries(searchParams);

  // If enter the results page directly through the url with any different query,
  // update the store data.
  useEffect(() => {
    setSearchParams((params) => {
      const currentPageSize = params.get('pageSize');
      const currentKeyword = params.get('keyword');
      if (currentPageSize && currentPageSize !== searchParamsStore.pageSize.toString()) {
        searchParamsStore.updatePageSize(parseInt(currentPageSize, 10));
      }
      if (currentKeyword && currentKeyword !== searchParamsStore.keyword) {
        searchParamsStore.updateKeyword(currentKeyword);
      }
      return params;
    });
  }, [searchParamsStore, setSearchParams]);

  const pageSizeInt = parseInt(pageSize, 10);
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useUsersInfiniteQuery({ type: 'followers', pageSize: pageSizeInt, keyword });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  const renderGoBackButton = () => (
    <GoBackButton
      label="Results"
      position="absolute"
      top={{ xs: '-41px', sm: '-52px' }}
      left={{ xs: '-43px', md: '-34px' }}
      spacing={2}
      slotsProp={{
        typography: {
          fontSize: { xs: '1.5rem', md: '1.875rem' },
          pl: '4px',
        },
        iconButton: {
          sx: { visibility: { xs: 'hidden', md: 'visible' } },
        },
      }}
      onClick={() => navigate(path.home)}
    />
  );

  return (
    <Box>
      <Box height={{ xs: '80px', md: '160px' }} />
      <Grid
        container
        columnSpacing="34px"
        rowSpacing={{ xs: '40px', md: '31px' }}
        justifyContent="center"
        pb={{ xs: '44px', md: '37px' }}
      >
        {data
          && isSuccess
          && data.pages.map((group) => group.data.map((item: UserType, index: number) => (
            <>
              <Grid key={item.id} position="relative" xs={12} sm={6} md={4}>
                {group.page === 1 && index === 0 && renderGoBackButton()}
                <Result
                  name={item.name}
                  username={item.username}
                  avater={item.avater}
                />
              </Grid>
              {index % 6 === 5 && (
              <Grid
                xs={12}
                sx={{
                  display: { sx: 'none', md: 'block' },
                  py: 0,
                }}

              >
                <Box height="16px" />
              </Grid>
              )}
            </>

          )))}
        {isSuccess && !data.pages[0].total && (
        <Grid position="relative" xs={12} sm={6} md={4}>
          {renderGoBackButton()}
        </Grid>
        )}
        {(isFetchingNextPage || !isSuccess)
          && Array.from(Array(pageSizeInt).keys()).map((k, index) => (
            <Grid key={k} position="relative" xs={12} sm={6} md={4}>
              {index === 0 && !data && renderGoBackButton()}
              <Skeleton
                variant="rounded"
                width="100%"
                height="auto"
                sx={{
                  borderRadius: '8px',
                  mb: '8px',
                  aspectRatio: { xs: '3 / 2', sm: '3 / 2' },
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
    </Box>
  );
}

export default Results;
