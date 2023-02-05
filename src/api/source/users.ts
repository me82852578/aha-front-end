import { axiosInstance } from '../axiosInstance';

interface GetDataParamProps {
  pageParam?:number
  pageSize?:number
}

export const sourceUrl = '/users';

export const getData = async ({ pageParam = 1, pageSize = 10 }:GetDataParamProps) => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/all`,
    params: { page: pageParam, pageSize },
  });
  return res.data;
};

export const getIsFollowingData = async ({ pageParam = 1, pageSize = 10 }: GetDataParamProps) => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/friends`,
    params: { page: pageParam, pageSize },
  });
  return res.data;
};
