import * as cheerio from 'cheerio';
import NaverStockItemMapper from '../../../../../src/data/http/mappers/stock-item/NaverStockItemMapper';
import data from '../../../../../__mocks__/assets/naverSiseMarketSum';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import {
  NaverKOSDAQ,
  NaverKOSPI
} from '../../../../../src/stock-item/constant';

describe('NaverStockItemMapper', () => {
  const mapper: NaverStockItemMapper = new NaverStockItemMapper();

  test('Mapping with KOSPI', () => {
    const $: CheerioStatic = cheerio.load(((data as any)[0][1]) as any);
    const $bodyList: Cheerio = $('div.box_type_l table tbody').children('tr[onmouseover]');
    const item: StockItem | null = mapper.toEntity($, $bodyList.get(0), NaverKOSPI);

    if (!item) {
      throw 'Not found StockItem';
    }
    expect(item.name).toEqual('삼성전자');
    expect(item.market).toEqual(NaverKOSPI);
  });

  test('Mapping with KOSDAQ', () => {
    const $: CheerioStatic = cheerio.load(((data as any)[1][1]) as any);
    const $bodyList: Cheerio = $('div.box_type_l table tbody').children('tr[onmouseover]');
    const item: StockItem | null = mapper.toEntity($, $bodyList.get(0), NaverKOSDAQ);

    if (!item) {
      throw 'Not found StockItem';
    }
    expect(item.name).toEqual('셀트리온헬스케어');
    expect(item.market).toEqual(NaverKOSDAQ);
  });
});
