import { of } from 'rxjs';
import LastBusinessDay from '../../src/domain/entities/stock/LastBusinessDay';

export const mockCrawlLastBusinessDay = jest.fn().mockImplementation(() => {
  const date: Date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return of(new LastBusinessDay(date));
});

const mockNaverStockRepository = jest.fn().mockImplementation(() => {
  return {
    crawlLastBusinessDay: mockCrawlLastBusinessDay,
  };
});

export default mockNaverStockRepository;