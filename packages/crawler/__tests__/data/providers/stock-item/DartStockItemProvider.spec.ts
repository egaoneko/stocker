import '../../../__config__/dotenv';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import DartStockItemProvider, { CorpCodeXML } from '../../../../src/data/providers/stock-item/DartStockItemProvider';

describe('DartStockItemProvider', () => {
  const provider: DartStockItemProvider = new DartStockItemProvider();

  test('crawlStockItems', async () => {
    (provider as any).getCorpCodes = jest.fn().mockImplementation(() => {
      return Promise.resolve([
        {
          "corp_code": {
            "_text": "00260985"
          },
          "corp_name": {
            "_text": "한빛네트"
          },
          "stock_code": {
            "_text": "036720"
          },
          "modify_date": {
            "_text": "20170630"
          }
        }
      ]);
    });
    const list: StockItem[] = await provider.crawlStockItems().toPromise();
    expect(list[0].name).toEqual('한빛네트');
    expect(list.length).toEqual(1);
    expect((provider as any).getCorpCodes).toBeCalledTimes(1);
  });

  test('getCorpCodes', async () => {
    const corpCodes: CorpCodeXML[] = await (provider as any).getCorpCodes();
    expect(corpCodes.length).toBeGreaterThan(0);
  });
});
