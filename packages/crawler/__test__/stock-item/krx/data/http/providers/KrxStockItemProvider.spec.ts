import mockAxiosInstance from '../../../../../../__mocks__/AxiosInstance';
import KrxStockItemProvider from '../../../../../../src/stock-item/krx/data/http/providers/KrxStockItemProvider';

describe('KrxStockItemProvider', () => {
  const provider: KrxStockItemProvider = new KrxStockItemProvider(mockAxiosInstance as any);

  test('KrxStockItemProvider method', (done) => {
    done();
  });
});
