import axios, { AxiosInstance } from 'axios';
import CodeMarket from '../../data/entities/market/CodeMarket';
import { Observable } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { apply } from '@stocker/core/lib/utils/common';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { TIMEOUT } from '../../constant';
import KrxStockItemContext from './KrxStockItemContext';

const axiosInstance: AxiosInstance = axios.create({
  timeout: TIMEOUT,
});

const Application: KrxStockItemContext = new KrxStockItemContext(axiosInstance);

export default function crawlStockItemsFromKrx(market: CodeMarket): Observable<StockItem[]> {
  return apply<CrawlStockItems>(
    Application.useCases.crawlStockItems,
    (it: CrawlStockItems) => {
      it.market = market;
    }
  )
    .run(async, queue);
}
