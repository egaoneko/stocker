import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import CodeMarket from '../../../entities/market/CodeMarket';
import {
  KrxKOSDAQ,
  KrxKOSPI
} from '../../../../stock-item/constant';

export default class KrxMarketMapper implements ValueMapper<Market, CodeMarket> {
    toEntity(entity: Market): CodeMarket | null {
      const name: string = entity.name;
      switch (name) {
        case KrxKOSPI.name:
          return KrxKOSPI;
        case KrxKOSDAQ.name:
          return KrxKOSDAQ;
      }
      return null;
    }
}