import { axiosInstance } from '../axiosInstance';

interface GetDataParamProps {
  page:number
  pageSize:number
}

export const sourceUrl = '/users';

export const getData = async () => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/all`,
    params: { page: 1, pageSize: 30 } as GetDataParamProps,
  });
  return res.data;
};

export const getIsFollowingData = async () => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}/friends`,
    params: { page: 1, pageSize: 30 } as GetDataParamProps,
  });
  return res.data;
};
