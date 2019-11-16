import mockAxiosInstance from '../../../../../../__mocks__/AxiosInstance';
import NaverApiProvider from '../../../../../../src/stock-item/naver/data/http/provider/NaverApiProvider';
import {
  KOSDAQ,
  KOSPI
} from '../../../../../../src/stock-item/naver/constant';
import CodeMarket from '../../../../../../src/stock-item/data/entities/market/CodeMarket';
import {
  forkJoin,
  Observable
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('NaverApiProvider', () => {
  const naverApiProvider: NaverApiProvider = new NaverApiProvider(mockAxiosInstance as any);

  test('crawlTotalPage with KOSPI', (done) => {
    naverApiProvider.crawlTotalPage(KOSPI)
      .subscribe((total: number) => {
        expect(total).toBe(32);
        done();
      });
  });

  test('crawlTotalPage with KOSDAQ', (done) => {
    naverApiProvider.crawlTotalPage(KOSDAQ)
      .subscribe((total: number) => {
        expect(total).toBe(28);
        done();
      });
  });

  test('crawlTotalPage with wrong', (done) => {
    naverApiProvider.crawlTotalPage({code: '3'} as CodeMarket)
      .subscribe((total: number) => {
        expect(total).toBe(0);
        done();
      });
  });

  test('crawlStockItems with KOSPI', (done) => {
    forkJoin<Observable<StockItem[]>[]>([
      naverApiProvider.crawlStockItems(KOSPI, 1),
      naverApiProvider.crawlStockItems(KOSPI, 2),
    ])
      .subscribe((list: StockItem[][]) => {
        expect(list[0][0].name).toEqual('삼성전자');
        expect(list[0][1].name).toEqual('SK하이닉스');
        expect(list[1][0].name).toEqual('GS');
        expect(list[1][1].name).toEqual('한국타이어앤테크놀로지');
        done();
      });
  });

  test('crawlStockItems with KOSDAQ', (done) => {
    forkJoin<Observable<StockItem[]>[]>([
      naverApiProvider.crawlStockItems(KOSDAQ, 1),
      naverApiProvider.crawlStockItems(KOSDAQ, 2),
    ])
      .subscribe((list: StockItem[][]) => {
        expect(list[0][0].name).toEqual('셀트리온헬스케어');
        expect(list[0][1].name).toEqual('에이치엘비');
        expect(list[1][0].name).toEqual('디오');
        expect(list[1][1].name).toEqual('매일유업');
        done();
      });
  });
});
