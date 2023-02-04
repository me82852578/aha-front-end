import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import { usersApi } from './api/source';
import { User } from './types';

export default function App() {
  const { isSuccess, data } = useQuery({
    queryKey: [usersApi.sourceUrl],
    queryFn: usersApi.getData,
  });

  if (!isSuccess || !data) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm">
      {data.map((user:User) => (
        <Box key={user.id} sx={{ my: 1 }}>
          {user.name}
        </Box>
      ))}
    </Container>
  );
}
