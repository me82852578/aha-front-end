import React from 'react';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { usersApi } from '../../api/source';
import { User } from '../../types';

function Home() {
  const { isSuccess, data } = useQuery({
    queryKey: [usersApi.sourceUrl],
    queryFn: usersApi.getData,
  });

  if (!isSuccess || !data) return <div>Loading...</div>;
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {data.map((user:User) => (
        <Box key={user.id} sx={{ my: 1 }}>
          {user.name}
        </Box>
      ))}

    </Box>
  );
}

export default Home;
