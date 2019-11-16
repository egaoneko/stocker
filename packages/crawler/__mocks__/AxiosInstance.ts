import { AxiosRequestConfig } from 'axios';
import data from './assets/naverSiseMarketSum';
import * as iconv from 'iconv-lite';

function convertUtf8ToEucKr(html: string): Buffer {
  return iconv.encode(html, 'euc-kr');
}

const mockAxiosInstance = jest.fn().mockImplementation((config: AxiosRequestConfig) => {
  return new Promise((resolve => {
    setTimeout(() => {
      let result: any = convertUtf8ToEucKr((data as any)[config.params['sosok']][config.params['page']]) || '';

      resolve({
        data: result
      });
    }, 200)
  }));
});

export default mockAxiosInstance;