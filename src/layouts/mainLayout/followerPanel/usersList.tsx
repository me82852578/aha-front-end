import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { User } from '../../../types';
import { usersApi } from '../../../api/source';
import ListItemSkeleton from './listItemSkeleton';
import { StyledChipButton } from '../../../components';

interface UsersListProps {
  type: 'followers' | 'following';
}

const pageSize = 15;

function UsersList({ type }: UsersListProps) {
  const { ref, inView } = useInView();

  const {
    data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess,
  } = useInfiniteQuery({
    queryKey: [usersApi.sourceUrl, type],
    queryFn:
        type === 'followers'
          ? () => usersApi.getData({ pageSize })
          : () => usersApi.getIsFollowingData({ pageSize }),
    getNextPageParam: (lastPage) => (
      lastPage.totalPages === lastPage.page
        ? undefined
        : lastPage.page + 1
    ),
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <List
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {!isSuccess
        && Array.from(Array(pageSize + 5).keys()).map((k) => (
          <ListItemSkeleton key={k} />
        ))}
      {data
        && data.pages.map((group) => group.data.map((item: User) => (
          <ListItem sx={{ px: '16px' }} key={item.id}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.avater} />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.username} />
            <Box sx={{ pl: 2 }}>
              <StyledChipButton
                onClick={() => { }}
                variant={item.isFollowing ? 'contained' : 'outlined'}
              >
                {item.isFollowing ? 'Following' : 'Follow'}
              </StyledChipButton>
            </Box>
          </ListItem>
        )))}
      {isFetchingNextPage
        && Array.from(Array(pageSize).keys()).map((k) => (
          <ListItemSkeleton key={k} />
        ))}
      <div ref={ref} />
    </List>
  );
}

export default UsersList;
