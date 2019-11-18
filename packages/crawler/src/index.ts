import crawlStockItems from './stock-item';
import { StockItemCrawlerType } from './stock-item/constant';
import { KOSPI } from '@stocker/core/lib/constant/market';

crawlStockItems(StockItemCrawlerType.KRX, KOSPI);

export {
  crawlStockItems
}