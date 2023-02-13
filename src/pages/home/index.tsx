import React, { useState } from 'react';
import {
  Divider, Stack, Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { StyledButton, StyledSlider, StyledTextField } from '../../components';
import BottomBar from './bottomBar';
import { path } from '../../configs';
import { useHomePageSearchStore } from '../../store';

function calculateValue(value:number) {
  if (value === 20) return 50;
  return value;
}

const marks = [3, 6, 9, 12, 15, 20].map((value) => ({
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
      justifyContent="space-between"
      pt="56px"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Stack spacing="20px">
        <Typography fontSize="1.5rem" fontWeight={400}>Search</Typography>
        <StyledTextField defaultValue={keyword} placeholder="Keyword" {...register('keyword')} />
        <Divider sx={{ py: '10px' }} />
        <Typography fontSize="1.5rem" fontWeight={400}># of results per page</Typography>
        <Stack direction="row" alignItems="flex-end" spacing="10px">
          <Typography fontSize="3rem" fontWeight={700}>{prePageResults}</Typography>
          <Typography fontSize="1rem" fontWeight={400} lineHeight="56px">results</Typography>
        </Stack>
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
          max={20}
          min={3}
          step={null}
        />
        <Divider sx={{ py: '10px' }} />
      </Stack>
      <StyledButton
        variant="contained"
        sx={{ marginBottom: '100px', width: { md: '343px' } }}
        type="submit"
      >
        SEARCH
      </StyledButton>
      <BottomBar />
    </Stack>
  );
}

export default Home;
