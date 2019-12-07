import StockItem from '../../src/domain/entities/stock-item/StockItem';
import { KOSPI } from '../../src/constants/market';
import { Options } from '../../src/interfaces/repository/options';

export const DEFAULT_ID: string = 'ea37d172-cc7b-4c26-be53-47bd02a5e327';
export const DEFAULT_CODE: string = '096770';
export const DEFAULT_NAME: string = 'SK이노베이션';

export const DEFAULT_STOCK_ITEM: StockItem = new StockItem(
  DEFAULT_CODE,
  DEFAULT_NAME,
);

DEFAULT_STOCK_ITEM.id = DEFAULT_ID;
DEFAULT_STOCK_ITEM.market = KOSPI;
DEFAULT_STOCK_ITEM.wics = '화학';
DEFAULT_STOCK_ITEM.gics = '에너지';

export const DEFAULT_FIND_OPTIONS: Options = {};