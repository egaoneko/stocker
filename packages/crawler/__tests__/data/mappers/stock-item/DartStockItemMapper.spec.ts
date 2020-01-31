import DartStockItemMapper from '../../../../src/data/mappers/stock-item/DartStockItemMapper';
import { CorpCodeXML } from '../../../../src/data/providers/stock-item/DartStockItemProvider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('DartStockItemMapper', () => {
  const mapper: DartStockItemMapper = new DartStockItemMapper();

  test('toEntity', () => {
    const xml: CorpCodeXML = {
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
    };
    const entity: StockItem = mapper.toEntity(xml);
    expect(entity.code).toEqual(xml.stock_code._text);
    expect(entity.name).toEqual(xml.corp_name._text);
    expect(entity.corpCode).toEqual(xml.corp_code._text);
  });
});
