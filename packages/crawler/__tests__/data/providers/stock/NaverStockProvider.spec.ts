import * as moment from 'moment-timezone';
import mockAxiosInstance from '../../../../__mocks__/stock/NaverAxiosInstance';
import NaverStockProvider from '../../../../src/data/providers/stock/NaverStockProvider';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';

describe('NaverStockProvider', () => {
  const provider: NaverStockProvider = new NaverStockProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('crawlLastBusinessDay', (done) => {
    provider.crawlLastBusinessDay()
      .subscribe((lastBusinessDay: LastBusinessDay) => {
        expect(lastBusinessDay.date).toEqual(moment.tz('2019-11-20', 'Asia/Seoul').toDate());
        expect(mockAxiosInstance).toBeCalledTimes(1);
        done();
      });
  });
});
