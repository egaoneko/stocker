import HttpStockItemProvider from '../../../../data/providers/stock-item/HttpStockItemProvider';
import mockAxiosInstance from '../../../../__mocks__/stock-item/StockItemAxiosInstance';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('HttpStockItemProvider', () => {
  const provider: HttpStockItemProvider = new HttpStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('findStockItemsBy', async () => {
    const stockItems: StockItem[] = await provider.findStockItemsBy({}).toPromise();
    expect(Array.isArray(stockItems)).toBeTruthy();
    expect(mockAxiosInstance).toBeCalledTimes(1);
  });
});
