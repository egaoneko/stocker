import { AxiosRequestConfig } from 'axios';
import data from '../assets/krxMarketDataIndex';
import { GENERATE_OTP_URL } from '../../src/stock-item/constant';

const mockAxiosInstance = jest.fn().mockImplementation((config: AxiosRequestConfig) => {
  return new Promise((resolve => {
    setTimeout(() => {
      if (config.url === GENERATE_OTP_URL) {
        resolve({
          data: 'YeyeBwj/CIo3yI37klL7zl9iOdBuPVrnm/lPrray/pysmt+8dM2MYx18WFsYekashsoW2vFOrwA22sFa9la2/' +
            'wubQauQznFqfo40gA7BCjKQ2C3d+GvL1RidHw0Yd4SSitF3+SwbVrVGCtb9VYtaU8K+bPBG9uqhXzReSKQr6+5LbzXoHENMwOw9/' +
            'EazIkP5szxL/kiCWvfOifHlCMZjN3NKg7o8VIi8Xuwxc/' +
            'MdtLrsrdGsIdNsIaLrCKdIB3Hdlcw3oJqr88ugwG748P8utOiroY8nOUL6VZrra2vIh4w='
        });
      } else {
        resolve({
          data,
        });
      }

    }, 200)
  }));
});

export default mockAxiosInstance;