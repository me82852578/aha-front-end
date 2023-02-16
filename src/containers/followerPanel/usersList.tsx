import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { UserType } from '../../types';
import ListItemSkeleton from './listItemSkeleton';
import { StyledChipButton } from '../../components';
import { useUsersInfiniteQuery } from '../../api/source/users';
import ListItem from './styledListItem';

interface UsersListProps {
  type: 'followers' | 'following';
}

const pageSize = 15;

function UsersList({ type }: UsersListProps) {
  const { ref, inView } = useInView();
  const {
    data, fetchNextPage, hasNextPage, isFetchingNextPage, isSuccess,
  } = useUsersInfiniteQuery({ type, pageSize });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <List
      sx={{
        pt: '23px',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {isSuccess && data
        && data.pages.map((group) => group.data.map((item: UserType) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar
                variant="rounded"
                alt={item.name}
                src={item.avater}
                sx={{
                  border: '1px solid #F8F8F8',
                  borderRadius: '5px',
                }}
              />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.username} />
            <Box sx={{ pl: 2 }}>
              <StyledChipButton
                onClick={() => {}}
                variant={item.isFollowing ? 'contained' : 'outlined'}
              >
                {item.isFollowing ? 'Following' : 'Follow'}
              </StyledChipButton>
            </Box>
          </ListItem>
        )))}
      {(isFetchingNextPage || !isSuccess)
        && Array.from(Array(pageSize + 5).keys()).map((k) => (
          <ListItemSkeleton key={k} />
        ))}
      <div ref={ref} />
    </List>
  );
}

export default UsersList;
