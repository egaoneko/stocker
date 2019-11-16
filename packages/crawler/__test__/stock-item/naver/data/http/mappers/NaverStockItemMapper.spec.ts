import * as cheerio from 'cheerio';
import {
  KOSPI,
  KOSDAQ
} from '../../../../../../src/stock-item/naver/constant';
import NaverStockItemMapper from '../../../../../../src/stock-item/naver/data/http/mappers/NaverStockItemMapper';
import data from '../../../../../../__mocks__/assets/naverSiseMarketSum';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('NaverStockItemMapper', () => {
  const mapper: NaverStockItemMapper = new NaverStockItemMapper();

  test('Mapping with KOSPI', () => {
    const $: CheerioStatic = cheerio.load(((data as any)[0][1]) as any);
    const $bodyList: Cheerio = $('div.box_type_l table tbody').children('tr[onmouseover]');
    const item: StockItem | null = mapper.toEntity($, $bodyList.get(0), KOSPI);

    if (!item) {
      throw 'Not found StockItem';
    }
    expect(item.name).toEqual('삼성전자');
    expect(item.market).toEqual(KOSPI);
  });

  test('Mapping with KOSDAQ', () => {
    const $: CheerioStatic = cheerio.load(((data as any)[1][1]) as any);
    const $bodyList: Cheerio = $('div.box_type_l table tbody').children('tr[onmouseover]');
    const item: StockItem | null = mapper.toEntity($, $bodyList.get(0), KOSDAQ);

    if (!item) {
      throw 'Not found StockItem';
    }
    expect(item.name).toEqual('셀트리온헬스케어');
    expect(item.market).toEqual(KOSDAQ);
  });
});
