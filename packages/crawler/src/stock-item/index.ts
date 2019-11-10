import crawlStockItemsFromNaver from './naver';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import NaverMarketMapper from './naver/data/http/mappers/NaverMarketMapper';
import CodeMarket from './data/entities/market/CodeMarket';
import { StockItemCrawlerType } from './constant';
import {
  Observable,
  of
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

export default function crawlStockItems(type: StockItemCrawlerType, market: Market): Observable<StockItem[]> {
  switch (type) {
    case StockItemCrawlerType.NAVER:
      const naverMarket: CodeMarket | null = new NaverMarketMapper().toEntity(market);

      if (!naverMarket) {
        return of([]);
      }
      return crawlStockItemsFromNaver(naverMarket);
  }

  return of([]);
}