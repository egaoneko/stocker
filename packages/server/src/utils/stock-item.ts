import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { apply } from '@stocker/core/lib/utils/common';
import { CONTEXT } from '../constant';
import CreateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/CreateStockItem';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import UpdateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/UpdateStockItem';

export async function saveStockItems(): Promise<void> {
  const stockItems: StockItem[] = await CONTEXT.useCases.crawlStockItems
    .runOnce(async, queue)
    .toPromise();

  const total: number = stockItems.length;
  let success: number = 0;
  let idx: number = 0;
  for (const stockItem of stockItems) {
    console.info(`Crawl StockItem: [${idx++} / ${total}] ${stockItem.toString()}`);
    const result: boolean = await saveStockItem(stockItem);

    if (!result) {
      continue;
    }
    success += 1;
  }
  console.info(`Crawl StockItem: total ${total}, success: ${success}`);
}

async function saveStockItem(stockItem: StockItem): Promise<boolean> {
  try {
    const [item, created]: [StockItem, boolean] = await apply(
      CONTEXT.useCases.createStockItem,
      (it: CreateStockItem) => it.stockItem = stockItem,
    ).runOnce(async, queue).toPromise();

    if (created) {
      return created;
    }

    const [_, updated]: [StockItem, boolean] = await apply(
      CONTEXT.useCases.updateStockItem,
      (it: UpdateStockItem) => it.stockItem = item
    ).runOnce(async, queue).toPromise();
    return updated;
  } catch (e) {
    console.error(e);
    return false;
  }
}