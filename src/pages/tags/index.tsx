import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Skeleton,
} from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TagType } from '../../types';
import { tagsApi } from '../../api/source';
import { FollowerButton, SwipeableDrawer } from '../../components';
import { FollowerPanel } from '../../containers';
import Tag from './tag';
import TagsPageTitle from './TagsPageTitle';

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
      <Container component="section" fixed maxWidth="md">
        <Box height={{ xs: '150px', md: '150px' }} />
        <Grid
          container
          columnSpacing="24px"
          rowSpacing={{ xs: '23px', sm: '35px' }}
          justifyContent="center"
          pb="80px"
        >
          {isLoading || isFetching || !isSuccess
            ? Array.from(Array(4).keys()).map((k, index) => (
              <Grid key={k} position="relative">
                {index === 0 && <TagsPageTitle>Tags</TagsPageTitle>}
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
            : data.map((item: TagType, index: number) => (
              <Grid key={item.id} position="relative">
                {index === 0 && <TagsPageTitle>Tags</TagsPageTitle>}
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
