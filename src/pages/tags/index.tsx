import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TagType } from '../../types';
import { tagsApi } from '../../api/source';
import { FollowerButton, SwipeableDrawer } from '../../components';
import { FollowerPanel } from '../../containers';

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
        <Typography fontSize="11.17px" color="#B2B2B2">
          {count}
          {' '}
          Results
        </Typography>
      </Box>
    </Stack>
  );
}

function Tags() {
  const [swipeableDrawerOpen, setSwipeableDrawerOpen] = useState(false);
  const {
    data, isLoading, isSuccess, isFetching,
  } = useQuery({
    queryKey: [tagsApi.sourceUrl],
    queryFn: tagsApi.getData,
  });

  return (
    <>
      <Container fixed maxWidth="md">
        <Box height={{ xs: '150px', md: '140px' }} />
        <Grid
          container
          columnSpacing="24px"
          rowSpacing={{ xs: '24px', sm: '36px' }}
          justifyContent="center"
          pb="80px"
        >
          {isLoading || isFetching || !isSuccess
            ? Array.from(Array(4).keys()).map((k, index) => (
              <Grid key={k} position="relative">
                {index === 0
              && (
              <Typography
                fontSize="1.5rem"
                fontWeight={400}
                position="absolute"
                top={{ xs: '-48px', sm: '-42px' }}
                left="5px"
              >
                Tags
              </Typography>
              )}
                <Skeleton
                  variant="rounded"
                  width={150}
                  height={150}
                  sx={{ borderRadius: '8px', mb: '8px' }}
                />
                <Skeleton
                  width={100}
                  variant="text"
                  sx={{ fontSize: '0.9rem' }}
                />
                <Skeleton
                  width={50}
                  variant="text"
                  sx={{ fontSize: '0.7rem' }}
                />
              </Grid>
            ))
            : data.map((item: TagType, index:number) => (
              <Grid key={item.id} position="relative">
                {index === 0
              && (
              <Typography
                fontSize="1.5rem"
                fontWeight={400}
                position="absolute"
                top={{ xs: '-48px', sm: '-42px' }}
                left="5px"
              >
                Tags
              </Typography>
              )}
                <Tag name={item.name} count={item.count} />
              </Grid>
            ))}
          {Array.from(Array(4).keys()).map((k) => (
            <Grid
              key={k}
              height="0px"
              overflow="hidden"
              paddingY="0px"
              visibility="hidden"
            >
              <Tag name="null" count={0} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FollowerButton onClick={() => setSwipeableDrawerOpen(true)} />
      <SwipeableDrawer
        open={swipeableDrawerOpen}
        onClose={() => setSwipeableDrawerOpen(false)}
        onOpen={() => setSwipeableDrawerOpen(true)}
        variant="temporary"
      >
        <FollowerPanel />
      </SwipeableDrawer>
    </>
  );
}

export default Tags;
