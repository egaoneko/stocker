import { Context } from 'koa';
import { saveStockItems } from '../utils/stock-item';

export const crawl = async (ctx: Context): Promise<void> => {
  saveStockItems();

  ctx.status = 200;
  ctx.body = 'OK';
};


