import {
  Table,
  Model as DBModel,
  DataType,
  Column,
  PrimaryKey,
  Default,
  AllowNull,
} from 'sequelize-typescript';
import { Model } from '@stocker/core/lib/data/models/Model';
import StockItemEntity from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import {
  Transaction
} from 'sequelize';
import { MarketType } from '../../../enums/market';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import { StockItemState } from '@stocker/core/lib/enums/stock-item';
import MarketTypeMapper from '../../mappers/market/MarketTypeMapper';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import { generateFindOptions } from '../../../utils/sequelize';

@Table({
  tableName: 'stock_items'
})
export default class StockItem extends DBModel<StockItem> implements Model {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column(DataType.UUID)
  public id!: string;

  @Column(DataType.STRING)
  public code!: string;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public market!: MarketType;

  @AllowNull(true)
  @Column(DataType.STRING)
  public gics?: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public wics?: string;

  @Column(DataType.STRING)
  public state!: StockItemState;

  private static mapper: MarketTypeMapper = new MarketTypeMapper();

  public static createStockItem(stockItem: StockItemEntity, transaction?: Transaction): Promise<[StockItem, boolean]> {
    const { code, name, market, gics, wics, state }: StockItemEntity = stockItem;
    return StockItem.findOrCreate({
      where: {
        code: code,
        name: name,
      },
      defaults: {
        code,
        name,
        gics,
        wics,
        state,
        market: StockItem.mapper.toValue(market as Market),
      },
      transaction,
    });
  }

  public static updateStockItem(stockItem: StockItemEntity, transaction?: Transaction): Promise<[number, StockItem[]]> {
    const { id, code, name, market, gics, wics, state }: StockItemEntity = stockItem;

    if (!id) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'id is empty.');
    }

    return StockItem.update({
      code,
      name,
      gics,
      wics,
      state,
      market: StockItem.mapper.toValue(market as Market),
    }, {
      where: {
        id: id,
      },
      transaction,
    });
  }

  public static deleteStockItem(stockItem: StockItemEntity, transaction?: Transaction): Promise<number> {
    const { id }: StockItemEntity = stockItem;

    if (!id) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'id is empty.');
    }

    return StockItem.destroy({
      where: {
        id: id as string,
      },
      transaction,
    });
  }

  public static findStockItemsBy(options: Options): Promise<StockItem[] | null> {
    return StockItem.findAll(generateFindOptions(options))
  }

  public static countStockItems(options: Options): Promise<number> {
    return StockItem.count(generateFindOptions(options));
  }

  public toEntity(): StockItemEntity {
    const stockItem: StockItemEntity = new StockItemEntity(
      this.code,
      this.name,
    );

    stockItem.id = this.id;
    stockItem.market = StockItem.mapper.toEntity(this.market);
    stockItem.gics = this.gics;
    stockItem.wics = this.wics;
    stockItem.state = this.state;

    return stockItem;
  }
}