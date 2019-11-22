import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import CodeMarket from '../../../../../data/entities/market/CodeMarket';
import {
  KOSDAQ,
  KOSPI
} from '../../../constant';

export default class KrxMarketMapper implements ValueMapper<Market, CodeMarket> {
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