import axios, { AxiosInstance } from 'axios';

export const TIMEOUT: number = 10000;
export const DEFAULT_AXIOS_INSTANCE: AxiosInstance = axios.create({
  timeout: TIMEOUT,
});

const {
  DART_API_KEY,
} = process.env as { [key: string]: string };

export {
  DART_API_KEY,
}
export const OPEN_DART_API: string = 'https://opendart.fss.or.kr/api';