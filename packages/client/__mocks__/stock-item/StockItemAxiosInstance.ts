import {
  AxiosRequestConfig,
} from 'axios';

const mockAxiosInstance = jest.fn().mockImplementation(({ url, method, data }: AxiosRequestConfig) => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve({
        data: []
      });
    }, 200)
  }));
});

export default mockAxiosInstance;