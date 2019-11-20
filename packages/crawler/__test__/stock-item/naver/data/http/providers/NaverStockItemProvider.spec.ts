import mockAxiosInstance from '../../../../../../__mocks__/stock-item/NaverAxiosInstance';
import NaverStockItemProvider from '../../../../../../src/stock-item/naver/data/http/providers/NaverStockItemProvider';
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

describe('NaverStockItemProvider', () => {
  const provider: NaverStockItemProvider = new NaverStockItemProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('crawlTotalPage with KOSPI', (done) => {
    provider.crawlTotalPage(KOSPI)
      .subscribe((total: number) => {
        expect(total).toBe(32);
        expect(mockAxiosInstance).toBeCalledTimes(1);
        done();
      });
  });

  test('crawlTotalPage with KOSDAQ', (done) => {
    provider.crawlTotalPage(KOSDAQ)
      .subscribe((total: number) => {
        expect(total).toBe(28);
        expect(mockAxiosInstance).toBeCalledTimes(1);
        done();
      });
  });

  test('crawlTotalPage with wrong', (done) => {
    provider.crawlTotalPage({code: '3'} as CodeMarket)
      .subscribe((total: number) => {
        expect(total).toBe(0);
        done();
      });
  });

  test('crawlStockItemsByPage with KOSPI', (done) => {
    forkJoin<Observable<StockItem[]>[]>([
      provider.crawlStockItemsByPage(KOSPI, 1),
      provider.crawlStockItemsByPage(KOSPI, 2),
    ])
      .subscribe((list: StockItem[][]) => {
        expect(list[0][0].name).toEqual('삼성전자');
        expect(list[0][1].name).toEqual('SK하이닉스');
        expect(list[1][0].name).toEqual('GS');
        expect(list[1][1].name).toEqual('한국타이어앤테크놀로지');
        expect(mockAxiosInstance).toBeCalledTimes(2);
        done();
      });
  });

  test('crawlStockItemsByPage with KOSDAQ', (done) => {
    forkJoin<Observable<StockItem[]>[]>([
      provider.crawlStockItemsByPage(KOSDAQ, 1),
      provider.crawlStockItemsByPage(KOSDAQ, 2),
    ])
      .subscribe((list: StockItem[][]) => {
        expect(list[0][0].name).toEqual('셀트리온헬스케어');
        expect(list[0][1].name).toEqual('에이치엘비');
        expect(list[1][0].name).toEqual('디오');
        expect(list[1][1].name).toEqual('매일유업');
        expect(mockAxiosInstance).toBeCalledTimes(2);
        done();
      });
  });
});
