import mockAxiosInstance from '../../../../../__mocks__/stock-item/KrxAxiosInstance';
import KrxStockItemProvider from '../../../../../src/data/http/providers/stock-item/KrxStockItemProvider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import CodeMarket from '../../../../../src/data/entities/market/CodeMarket';
import { KrxKOSPI } from '../../../../../src/stock-item/constant';

describe('KrxStockItemProvider', () => {
  const provider: KrxStockItemProvider = new KrxStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('crawlStockItems', (done) => {
    provider.crawlStockItems(KrxKOSPI)
      .subscribe((list: StockItem[]) => {
        expect(list[0].name).toEqual('동원수산');
        expect(list.length).toEqual(5);
        expect(mockAxiosInstance).toBeCalledTimes(2);
        done();
      });
  });

  test('crawlStockItems with wrong', () => {
    expect(() => {
      provider.crawlStockItems({} as CodeMarket)
    }).toThrowError('Unsupported market.');
  });
});
