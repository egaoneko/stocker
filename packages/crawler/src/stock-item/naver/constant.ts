import { KOR } from '@stocker/core/lib/constant/nation';
import CodeMarket from '../../data/entities/market/CodeMarket';

export const MARKET_CAPITALIZATION_URL: string = 'https://finance.naver.com/sise/sise_market_sum.nhn';

export const KOSPI: CodeMarket = new CodeMarket('KOSPI', KOR, '0');
export const KOSDAQ: CodeMarket = new CodeMarket('KOSDAQ', KOR, '1');