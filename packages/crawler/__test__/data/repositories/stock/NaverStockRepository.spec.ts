import mockNaverStockProvider, { mockCrawlLastBusinessDay } from '../../../../__mocks__/stock/NaverStockProivider';
import NaverStockRepository from '../../../../src/data/repositories/stock/NaverStockRepository';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import * as moment from 'moment-timezone';

describe('NaverStockRepository', () => {
  const repository: NaverStockRepository = new NaverStockRepository((new mockNaverStockProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlLastBusinessDay()
      .subscribe((lastBusinessDay: LastBusinessDay) => {
        expect(mockCrawlLastBusinessDay).toHaveBeenCalledTimes(1);
        expect(lastBusinessDay.date).toEqual(moment.tz('2019-11-20', 'Asia/Seoul').toDate());
        done();
      });
  });
});
