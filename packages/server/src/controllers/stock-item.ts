import { Context } from 'koa';
import Joi from 'joi';
import { saveStockItems } from '../utils/stock-item';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '@stocker/core/lib/utils/common';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

export const crawl = async (ctx: Context): Promise<void> => {
  saveStockItems();

  ctx.status = 200;
  ctx.body = 'OK';
};

export const findAll = async (ctx: Context): Promise<void> => {
  const findSchema = Joi.object({
    nation: Joi.object(),
    market: Joi.object(),
  });

  try {
    const params: any = await findSchema.validate(ctx.request.body);
    let where: any = {};

    if (params.nation && params.market) {
      // TODO Add market JSON & Entity Mapper
    }

    const stockItems: StockItem[] = await apply(
      CONTEXT.useCases.findStockItemsBy,
      (it: FindStockItemsBy) => it.options = {}
    )
      .runOnce(async, queue)
      .toPromise();

    ctx.status = 200;
    ctx.body = stockItems;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};