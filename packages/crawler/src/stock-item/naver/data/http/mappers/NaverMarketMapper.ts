import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import {
  KOSDAQ,
  KOSPI
} from '../../../constant';
import CodeMarket from '../../../../../data/entities/market/CodeMarket';

export default class NaverMarketMapper implements ValueMapper<Market, CodeMarket> {
    toEntity(entity: Market): CodeMarket | null {
      const name: string = entity.name;
      switch (name) {
        case KOSPI.name:
          return KOSPI;
        case KOSDAQ.name:
          return KOSDAQ;
      }
      return null;
    }
}