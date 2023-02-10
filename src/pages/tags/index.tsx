import {
  Box, Container, Unstable_Grid2 as Grid, Stack, Typography,
} from '@mui/material';
import React from 'react';

const data = [
  {
    id: '3272b6a7-1f38-4e79-a2e3-0cb847f430e9',
    name: 'Awesome Soft Fish',
    count: 150,
  },
  {
    id: 'b4aeccf0-320e-4cfe-aa0f-3c0ad33f9f9d',
    name: 'Tasty Fresh Tuna',
    count: 109,
  },
  {
    id: '283ab226-35b6-4128-8ab7-b5194aef850b',
    name: 'Gorgeous Concrete Shirt',
    count: 108,
  },
  {
    id: '386a2a0f-2508-403b-8125-aa56221829c4',
    name: 'Incredible Steel Pants',
    count: 166,
  },
  {
    id: '4e2b2524-68d0-464f-b491-25197349467d',
    name: 'Incredible Rubber Computer',
    count: 129,
  },
  {
    id: '46957bfa-cb00-4641-b0c8-ab6b9c713d2e',
    name: 'Ergonomic Soft Sausages',
    count: 200,
  },
  {
    id: '796f8c4e-7dcd-4bb8-a11b-0db747a3ef71',
    name: 'Practical Concrete Car',
    count: 61,
  },
  {
    id: 'b64544a3-c2b1-4b81-98f6-1f0c513ee6fb',
    name: 'Practical Wooden Shirt',
    count: 119,
  },
  {
    id: 'bbfa7594-251c-445d-9130-ffd960e28d67',
    name: 'Rustic Wooden Pizza',
    count: 148,
  },
  {
    id: '39a6f41d-4595-4caf-8001-89ff546910c9',
    name: 'Fantastic Soft Gloves',
    count: 99,
  },
  {
    id: '021a5ca5-4865-4d08-8146-00606e6c7ed5',
    name: 'Rustic Fresh Pants',
    count: 91,
  },
  {
    id: '61601181-f2e3-41ed-bc68-1b6756fffa24',
    name: 'Handmade Frozen Car',
    count: 158,
  },
  {
    id: '758d2741-b208-4900-af71-dfc9dde71bac',
    name: 'Practical Concrete Shoes',
    count: 163,
  },
  {
    id: '7c8f7418-cbf6-4f60-b523-ad8d1319df6b',
    name: 'Unbranded Cotton Keyboard',
    count: 103,
  },
  {
    id: 'ad41a763-0b05-4577-acd4-892f95b22062',
    name: 'Ergonomic Plastic Car',
    count: 149,
  },
  {
    id: '1750835d-a1f6-48e3-a4e4-a9029983b82b',
    name: 'Fantastic Granite Mouse',
    count: 26,
  },
  {
    id: '7d35ef4e-e816-45db-8789-720dd2e00d62',
    name: 'Handmade Concrete Car',
    count: 104,
  },
  {
    id: '0e7a9af7-8873-4607-b208-0ee6c9d2d6c0',
    name: 'Practical Fresh Shoes',
    count: 61,
  },
  {
    id: '10accf4c-e5f4-4762-af5e-1b89acca721a',
    name: 'Practical Wooden Chair',
    count: 147,
  },
  {
    id: '1085feaf-26e2-43d3-bb9a-47608006ed2d',
    name: 'Fantastic Fresh Table',
    count: 142,
  },
  {
    id: '40edbbc9-60f5-4aa8-8da4-6931c4fc0eba',
    name: 'Handcrafted Wooden Pants',
    count: 14,
  },
  {
    id: '2bd0b96b-357e-4962-a8cb-daa42a9768cb',
    name: 'Gorgeous Fresh Cheese',
    count: 146,
  },
  {
    id: '8a8ae1ab-aa9a-4ddd-b774-27118cef13c3',
    name: 'Licensed Concrete Ball',
    count: 76,
  },
  {
    id: 'a04ed28d-eaf5-420e-b9c1-0a4cf52ed234',
    name: 'Licensed Steel Chair',
    count: 118,
  },
];

interface TagProps {
  name?: string;
  count?: number;
}

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
          padding="7px 14px"
        >
          <Typography noWrap>
            {name}
          </Typography>
        </Box>
      </Stack>
      <Box pt="2px">
        <Typography fontSize="14.9px" noWrap>{name}</Typography>
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
  return (
    <Container fixed maxWidth="md">
      <Typography fontSize="30px" fontWeight={400} pb="24px" pt="80px">
        Tags
      </Typography>
      <Grid
        container
        columnSpacing="24px"
        rowSpacing="36px"
        justifyContent="center"
        pl="6px"
        pb="80px"
      >
        {data.map((item) => (
          <Grid key={item.id}>
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
            <Tag />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tags;
