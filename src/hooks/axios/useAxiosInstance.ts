import axios from 'axios';
import { api } from '../../static/api';

export const useAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: api.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return { axiosInstance };
};
