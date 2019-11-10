import CheerioMapper from '@stocker/core/lib/data/http/mappers/CheerioMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import CodeMarket from '../../../../data/entities/market/CodeMarket';

export default class StockItemMapper implements CheerioMapper<StockItem> {
  toEntity($: CheerioStatic, element: CheerioElement, market: CodeMarket): StockItem | null {
    const tds: Cheerio = $(element).children();

    const nameElement: Cheerio = $(tds.get(1));
    const href: string = nameElement.find('td a').attr('href');
    const matches: RegExpMatchArray | null = href.match(/code=(\d+)/);

    if (!matches || matches.length < 2) {
      return null;
    }

    const code: string = matches[1];
    const name: string = nameElement.text();

    return new StockItem(
      code,
      name,
      market
    );
  }
}
