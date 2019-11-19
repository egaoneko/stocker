import axios, { AxiosInstance } from 'axios';
import {
  Observable,
} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { TIMEOUT } from '../../constant';
import NaverStockItemContext from './NaverStockItemContext';
import { apply } from '@stocker/core/lib/utils/common';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CodeMarket from '../data/entities/market/CodeMarket';

const axiosInstance: AxiosInstance = axios.create({
  timeout: TIMEOUT,
});

const Application: NaverStockItemContext = new NaverStockItemContext(axiosInstance);

export default function crawlStockItemsFromNaver(market: CodeMarket): Observable<StockItem[]> {
  return apply<CrawlStockItems>(
    Application.useCases.crawlStockItems,
    (it: CrawlStockItems) => {
      it.market = market;
    }
  )
    .run(async, queue);
}
