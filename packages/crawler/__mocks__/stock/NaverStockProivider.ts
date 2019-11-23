import { of } from 'rxjs';
import * as moment from 'moment-timezone';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';

export const mockCrawlLastBusinessDay = jest.fn().mockImplementation(() => {
  return of(new LastBusinessDay(moment.tz('2019-11-20', 'Asia/Seoul').toDate()));
});

const mockNaverStockProvider = jest.fn().mockImplementation(() => {
  return {
    crawlLastBusinessDay: mockCrawlLastBusinessDay
  };
});

export default mockNaverStockProvider;