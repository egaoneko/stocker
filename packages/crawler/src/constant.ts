import axios, { AxiosInstance } from 'axios';

export const TIMEOUT: number = 10000;
export const DEFAULT_AXIOS_INSTANCE: AxiosInstance = axios.create({
  timeout: TIMEOUT,
});