import {
  Observable,
  of
} from 'rxjs';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import NaverMarketMapper from '../data/http/mappers/stock-item/NaverMarketMapper';
import CodeMarket from '../data/entities/market/CodeMarket';
import { StockItemCrawlerType } from './constant';
import KrxMarketMapper from '../data/http/mappers/stock-item/KrxMarketMapper';
import { apply } from '@stocker/core/lib/utils/common';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import KrxStockItemContext from './contexts/KrxStockItemContext';
import NaverStockItemContext from './contexts/NaverStockItemContext';
import { DEFAULT_AXIOS_INSTANCE } from '../constant';

export function crawlStockItems(type: StockItemCrawlerType, market: Market): Observable<StockItem[]> {
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

function crawlStockItemsFromKrx(market: CodeMarket): Observable<StockItem[]> {
  const KrxStockItemApplication: KrxStockItemContext = new KrxStockItemContext(DEFAULT_AXIOS_INSTANCE);
  return apply<CrawlStockItems>(
    KrxStockItemApplication.useCases.crawlStockItems,
    (it: CrawlStockItems) => {
      it.market = market;
    }
  )
    .run(async, queue);
}

function crawlStockItemsFromNaver(market: CodeMarket): Observable<StockItem[]> {
  const NaverStockItemApplication: NaverStockItemContext = new NaverStockItemContext(DEFAULT_AXIOS_INSTANCE);
  return apply<CrawlStockItems>(
    NaverStockItemApplication.useCases.crawlStockItems,
    (it: CrawlStockItems) => {
      it.market = market;
    }
  )
    .run(async, queue);
}
