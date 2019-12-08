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

@Table({
  tableName: 'stock_item'
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