import { KOSPI } from '@stocker/core/lib/constant/market';
import { crawlStockItems } from './stock-item';
import { crawlLastBusinessDay } from './stock';
import { StockItemCrawlerType } from './stock-item/constant';

crawlStockItems(StockItemCrawlerType.KRX, KOSPI).subscribe(
  (res) => console.log(res)
);

export {
  crawlStockItems,
  crawlLastBusinessDay,
}