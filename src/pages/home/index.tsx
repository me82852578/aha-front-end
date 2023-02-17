import React, { useState } from 'react';
import {
  Box, Divider, Stack, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { StyledButton, StyledSlider, StyledTextField } from '../../components';
import BottomBar from './bottomBar';
import { path } from '../../configs';
import { useHomePageSearchStore } from '../../store';

function calculateValue(value:number) {
  if (value === 19) return 50;
  return value;
}

const marks = [3, 6, 9, 12, 15, 19].map((value) => ({
  value,
  label: calculateValue(value),
}));

type FormFieldsType = {
  keyword: string;
  pageSize: number;
};

function Home() {
  const navigate = useNavigate();
  const {
    keyword, pageSize, updateKeyword, updatePageSize,
  } = useHomePageSearchStore(
    (state) => ({
      keyword: state.keyword,
      pageSize: state.pageSize,
      updateKeyword: state.updateKeyword,
      updatePageSize: state.updatePageSize,
    }),
    shallow,
  );
  const { register, handleSubmit } = useForm<FormFieldsType>({});

  const handleOnSubmit = (data : FormFieldsType) => {
    updateKeyword(data.keyword);
    updatePageSize(data.pageSize);

    const searchParams = createSearchParams(
      Object.keys(data)
        .reduce(
          (acc, curr) => ({ ...acc, [curr]: data[curr as keyof FormFieldsType].toString() }),
          {},
        ),
    ).toString();
    navigate({
      pathname: path.results,
      search: searchParams,
    });
  };

  const [prePageResults, setPrePageResults] = useState(pageSize);
  return (
    <Stack
      component="form"
      height="100%"
      pt={{ xs: '0px', sm: '54px' }}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Stack spacing={{ xs: '28px', sm: '30px' }} flexGrow={1}>
        <Stack spacing={{ xs: '16px', sm: '20px' }}>
          <Typography fontSize="1.5rem" fontWeight={400}>Search</Typography>
          <StyledTextField defaultValue={keyword} placeholder="Keyword" {...register('keyword')} />
        </Stack>
        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
        <Stack spacing={{ xs: '16px', sm: '20px' }}>
          <Typography fontSize="1.5rem" fontWeight={400}># Of Results Per Page</Typography>
          <Stack direction="row" alignItems="flex-end" spacing="10px">
            <Typography fontSize="3rem" fontWeight={700} lineHeight="50px">{prePageResults}</Typography>
            <Typography fontSize="1rem" fontWeight={400} lineHeight="200%">results</Typography>
          </Stack>
          <Box position="relative" height="50px">
            <StyledSlider
              marks={marks}
              defaultValue={pageSize}
              {...register('pageSize', {
                onChange(e) {
                  setPrePageResults(calculateValue(e.target.value));
                },
                setValueAs(v) {
                  return calculateValue(parseInt(v, 10));
                },
              })}
              max={19}
              min={3}
              step={null}
              sx={{ position: 'absolute', top: { xs: '-9px', sm: '-16px' } }}
            />
          </Box>
        </Stack>
        <Divider sx={{ flexGrow: { xs: 1, sm: 0 } }} />
      </Stack>
      <StyledButton
        variant="contained"
        sx={{
          width: { md: '343px' },
          mt: { xs: '80px', sm: '335px' },
          mb: '24px',
        }}
        type="submit"
      >
        SEARCH
      </StyledButton>
      <BottomBar height="66px" />
    </Stack>
  );
}

export default Home;
