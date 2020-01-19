import {
  AxiosRequestConfig,
} from 'axios';
import { DEFAULT_STOCK_ITEM } from '@stocker/core/__mocks__/stock-item/constant';

const mockAxiosInstance = jest.fn().mockImplementation(({ url, method, data }: AxiosRequestConfig) => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      switch (method) {
        case 'GET':
          if (url === '/stock-items') {
            resolve({
              data: [DEFAULT_STOCK_ITEM]
            });
            return;
          } else if ('/count/stock-items') {
            resolve({
              data: 0
            });
            return;
          }
      }
      reject();
    }, 200)
  }));
});

export default mockAxiosInstance;