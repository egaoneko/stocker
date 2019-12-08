import mockAxiosInstance from '../../../../__mocks__/stock-item/KrxAxiosInstance';
import KrxStockItemProvider from '../../../../src/data/providers/stock-item/KrxStockItemProvider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import {
  of
} from 'rxjs';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import * as moment from 'moment-timezone';

const mockGetLastBusinessDay: any = jest.fn().mockImplementation(() => {
  return of(new LastBusinessDay(moment.tz('2019-11-20', 'Asia/Seoul').toDate()));
});

describe('KrxStockItemProvider', () => {
  (KrxStockItemProvider as any).getLastBusinessDay = mockGetLastBusinessDay;
  const provider: KrxStockItemProvider = new KrxStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
    mockGetLastBusinessDay.mockClear();
  });

  test('crawlStockItems', (done) => {
    provider.crawlStockItems()
      .subscribe((list: StockItem[]) => {
        expect(list[0].name).toEqual('동원수산');
        expect(list.length).toEqual(5);
        expect(mockAxiosInstance).toBeCalledTimes(2);
        expect(mockGetLastBusinessDay).toBeCalledTimes(1);
        done();
      });
  });
});
