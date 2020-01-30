import mockAxiosInstance from '../../../../__mocks__/stock-item/WiseAxiosInstance';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import WiseStockItemProvider from '../../../../src/data/providers/stock-item/WiseStockItemProvider';
import { of } from 'rxjs';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import * as moment from 'moment-timezone';

const mockGetSectors: any = jest.fn().mockImplementation(() => {
  return ['G10', 'G15'];
});

const mockGetLastBusinessDay: any = jest.fn().mockImplementation(() => {
  return of(new LastBusinessDay(moment.tz('2019-11-20', 'Asia/Seoul').toDate()));
});

describe('WiseStockItemProvider', () => {
  (WiseStockItemProvider as any).getSectors = mockGetSectors;
  (WiseStockItemProvider as any).getLastBusinessDay = mockGetLastBusinessDay;
  const provider: WiseStockItemProvider = new WiseStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('crawlStockItems', (done) => {
    provider.crawlStockItems()
      .subscribe((list: StockItem[]) => {
        expect(list[0].name).toEqual('SK이노베이션');
        expect(list.length).toEqual(10);
        expect(mockAxiosInstance).toBeCalledTimes(2);
        expect(mockGetSectors).toBeCalledTimes(1);
        done();
      });
  });

  test('crawlStockItemsBySector', (done) => {
    (provider as any).crawlStockItemsBySector('G10', '20191120')
      .subscribe((list: StockItem[]) => {
        expect(list[0].name).toEqual('SK이노베이션');
        expect(list.length).toEqual(5);
        expect(mockAxiosInstance).toBeCalledTimes(1);
        done();
      });
  });
});
