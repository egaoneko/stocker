import data from '../assets/naverSiseDeposit';
import * as iconv from 'iconv-lite';

function convertUtf8ToEucKr(html: string): Buffer {
  return iconv.encode(html, 'euc-kr');
}

const mockAxiosInstance = jest.fn().mockImplementation(() => {
  return new Promise((resolve => {
    setTimeout(() => {
      let result: any = convertUtf8ToEucKr(data) || '';

      resolve({
        data: result
      });
    }, 200)
  }));
});

export default mockAxiosInstance;