import {
  Observable,
  of
} from 'rxjs';
import LastBusinessDay from '../../src/domain/entities/stock/LastBusinessDay';

// --ADD_IMPORT--

export const mockCrawlLastBusinessDay = jest.fn().mockImplementation((): Observable<LastBusinessDay> => {
  const date: Date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return of(new LastBusinessDay(date));
});

const mockStockRepository = jest.fn().mockImplementation(() => {
  return {
    crawlLastBusinessDay: mockCrawlLastBusinessDay,
  };
});

export default mockStockRepository;