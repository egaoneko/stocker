import {
  Observable,
  of
} from 'rxjs';
import crawlStockItemsFromNaver from './naver';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import NaverMarketMapper from './naver/data/http/mappers/NaverMarketMapper';
import CodeMarket from './data/entities/market/CodeMarket';
import { StockItemCrawlerType } from './constant';
import KrxMarketMapper from './krx/data/http/mappers/KrxMarketMapper';
import crawlStockItemsFromKrx from './krx';

export default function crawlStockItems(type: StockItemCrawlerType, market: Market): Observable<StockItem[]> {
  switch (type) {
    case StockItemCrawlerType.NAVER:
      const naverMarket: CodeMarket | null = new NaverMarketMapper().toEntity(market);

      if (!naverMarket) {
        return of([]);
      }
      return crawlStockItemsFromNaver(naverMarket);
    case StockItemCrawlerType.KRX:
      const krxMarket: CodeMarket | null = new KrxMarketMapper().toEntity(market);

      if (!krxMarket) {
        return of([]);
      }
      return crawlStockItemsFromKrx(krxMarket);
  }

  return of([]);
}