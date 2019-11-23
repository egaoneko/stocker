import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { WiseIndexComponent } from '../../providers/stock-item/WiseStockItemProvider';

export default class WiseStockItemMapper implements ValueMapper<WiseIndexComponent, StockItem> {
  public toEntity(component: WiseIndexComponent): StockItem {
    const stockItem: StockItem = new StockItem(
      component.CMP_CD.trim(),
      component.CMP_KOR.trim(),
    );

    stockItem.wics = component.SEC_NM_KOR.trim();
    return stockItem;
  }
}