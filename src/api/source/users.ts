import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';

interface GetDataParamProps {
  pageParam?: number;
  pageSize?: number;
  keyword?: string;
}

interface UsersInfiniteQuery
  extends Omit<GetDataParamProps, 'pageParam'>,
  UseInfiniteQueryOptions {
  type: 'followers' | 'following';
}

export const sourceUrl = '/users';

export const getData = async ({
  pageParam = 1,
  pageSize = 10,
  keyword = '',
}: GetDataParamProps) => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/all`,
    params: { page: pageParam, pageSize, keyword },
  });
  return res.data;
};

export const getIsFollowingData = async ({
  pageParam = 1,
  pageSize = 10,
  keyword = '',
}: GetDataParamProps) => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/friends`,
    params: { page: pageParam, pageSize, keyword },
  });
  return res.data;
};

export const useUsersInfiniteQuery = ({
  type,
  pageSize,
  keyword,
}: UsersInfiniteQuery) => useInfiniteQuery({
  queryKey: [{ sourceUrl, type, keyword }],
  queryFn:
      type === 'followers'
        ? ({ pageParam }) => getData({ pageParam, pageSize, keyword })
        : ({ pageParam }) => getIsFollowingData({ pageParam, pageSize, keyword }),
  getNextPageParam: (lastPage) => (lastPage.totalPages === lastPage.page
      || !lastPage.total
      || !lastPage.totalPages
    ? undefined
    : lastPage.page + 1),
});
