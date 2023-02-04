import { axiosInstance } from '../axiosInstance';

export const sourceUrl = '/users';

export const getData = async () => {
  const res = await axiosInstance({
    method: 'get',
    url: `${sourceUrl}`,
  });
  return res.data;
};
