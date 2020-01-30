import WiseStockItemMapper from '../../../../src/data/mappers/stock-item/WiseStockItemMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { WiseIndexComponent } from '../../../../src/data/providers/stock-item/WiseStockItemProvider';

describe('WiseStockItemMapper', () => {
  const mapper: WiseStockItemMapper = new WiseStockItemMapper();

  test('toEntity', () => {
    const component: WiseIndexComponent = {
      'IDX_CD': 'G1010',
      'IDX_NM_KOR': 'WICS 에너지',
      'ALL_MKT_VAL': 20414299,
      'CMP_CD': '096770',
      'CMP_KOR': 'SK이노베이션',
      'MKT_VAL': 8573407,
      'WGT': 42.00,
      'S_WGT': 42.00,
      'CAL_WGT': 1.00,
      'SEC_CD': 'G10',
      'SEC_NM_KOR': '에너지',
      'SEQ': 1,
      'TOP60': 2,
      'APT_SHR_CNT': 56403994
    };
    const entity: StockItem = mapper.toEntity(component);
    expect(entity.code).toEqual(component.CMP_CD.trim());
    expect(entity.name).toEqual(component.CMP_KOR.trim());
    expect(entity.wics).toEqual(component.SEC_NM_KOR.trim());
  });
});
