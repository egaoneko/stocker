import { Context } from 'koa';
import Joi from 'joi';
import { saveStockItems } from '../utils/stock-item';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '@stocker/core/lib/utils/common';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import StockItemJSONMapper from '@stocker/core/lib/data/mappers/stock-item/StockItemJSONMapper';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';
import { Options } from '@stocker/core/lib/interfaces/repository/options';

const mapper: StockItemJSONMapper = new StockItemJSONMapper();

export const crawl = async (ctx: Context): Promise<void> => {
  saveStockItems();

  ctx.status = 200;
  ctx.body = 'OK';
};

const findSchema = Joi.object({
  market: Joi.object(),
  page: Joi.number(),
  limit: Joi.number(),
});
export const findAll = async (ctx: Context): Promise<void> => {
  try {
    const params: any = await findSchema.validate(ctx.request.query);
    const options: Options = {};
    let where: any = {};

    if (params.market) {
      // TODO Add market JSON & Entity Mapper
    }

    if (params.page) {
      options.page = params.page;
      options.limit = params.limit;
    }

    const stockItems: StockItem[] = await apply(
      CONTEXT.useCases.findStockItemsBy,
      (it: FindStockItemsBy) => it.options = options
    )
      .runOnce(async, queue)
      .toPromise();

    ctx.status = 200;
    ctx.body = stockItems.map((stockItem: StockItem) => mapper.toJSON(stockItem));
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

export const count = async (ctx: Context): Promise<void> => {
  try {
    const params: any = await findSchema.validate(ctx.request.query);
    const options: Options = {};
    let where: any = {};

    if (params.market) {
    }

    const count: number = await apply(
      CONTEXT.useCases.countStockItems,
      (it: CountStockItems) => it.options = options
    )
      .runOnce(async, queue)
      .toPromise();

    ctx.status = 200;
    ctx.body = count;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};