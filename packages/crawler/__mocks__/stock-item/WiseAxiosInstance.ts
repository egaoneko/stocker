import { AxiosRequestConfig } from 'axios';
import data from '../assets/wiseSectorIndex';

const mockAxiosInstance = jest.fn().mockImplementation((config: AxiosRequestConfig) => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve({
        data: (data as any)[config.params['sec_cd']],
      });
    }, 200)
  }));
});

export default mockAxiosInstance;