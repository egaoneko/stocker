import CheerioMapper from '../../../../data/http/mappers/CheerioMapper';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';

export default class NaverLastBusinessDayMapper implements CheerioMapper<LastBusinessDay> {
  toEntity($: CheerioStatic, element: CheerioElement): LastBusinessDay | null {
    // const tds: Cheerio = $(element).children();
    //
    // const nameElement: Cheerio = $(tds.get(1));
    // const href: string = nameElement.find('td a').attr('href');
    // const matches: RegExpMatchArray | null = href.match(/code=(\d+)/);
    //
    // if (!matches || matches.length < 2) {
    //   return null;
    // }
    //
    // const code: string = matches[1];
    // const name: string = nameElement.text();

    return new LastBusinessDay(
      new Date()
    );
  }
}
