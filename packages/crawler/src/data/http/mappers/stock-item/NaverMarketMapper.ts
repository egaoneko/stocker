import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import CodeMarket from '../../../entities/market/CodeMarket';
import {
  NaverKOSDAQ,
  NaverKOSPI
} from '../../../../stock-item/constant';

export default class NaverMarketMapper implements ValueMapper<Market, CodeMarket> {
    toEntity(entity: Market): CodeMarket | null {
      const name: string = entity.name;
      switch (name) {
        case NaverKOSPI.name:
          return NaverKOSPI;
        case NaverKOSDAQ.name:
          return NaverKOSDAQ;
      }
      return null;
    }
}