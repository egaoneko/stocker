import ValueMapper from '@stocker/core/lib/data/mappers/ValueMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import { MarketType } from '../../../enums/market';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constants/market';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class MarketTypeMapper implements ValueMapper<MarketType, Market> {
  public toEntity(type: MarketType): Market {
    switch (type) {
      case MarketType.KR_KOSPI:
        return KOSPI;
      case MarketType.KR_KOSDAQ:
        return KOSDAQ;
      default:
        throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `${type} is not supported.`);
    }
  }

  public toValue(market: Market): MarketType {
    switch (market) {
      case KOSPI:
        return MarketType.KR_KOSPI;
      case KOSDAQ:
        return MarketType.KR_KOSDAQ;
      default:
        throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `market is not supported.`);
    }
  }
}