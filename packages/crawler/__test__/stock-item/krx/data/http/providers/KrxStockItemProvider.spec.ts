import mockAxiosInstance from '../../../../../../__mocks__/stock-item/KrxAxiosInstance';
import KrxStockItemProvider from '../../../../../../src/stock-item/krx/data/http/providers/KrxStockItemProvider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { KOSPI } from '../../../../../../src/stock-item/krx/constant';
import CodeMarket from '../../../../../../src/stock-item/data/entities/market/CodeMarket';

describe('KrxStockItemProvider', () => {
  const provider: KrxStockItemProvider = new KrxStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('crawlStockItems', (done) => {
    provider.crawlStockItems(KOSPI)
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
