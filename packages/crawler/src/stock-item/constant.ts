import CodeMarket from '../data/entities/market/CodeMarket';
import { KOR } from '@stocker/core/lib/constant/nation';

export enum StockItemCrawlerType {
  NAVER = 'naver',
  KRX = 'krx',
}

// KRX
export const GENERATE_OTP_URL: string = 'http://marketdata.krx.co.kr/contents/COM/GenerateOTP.jspx';
export const DOWNLOAD_URL: string = 'http://file.krx.co.kr/download.jspx';
export const KrxKOSPI: CodeMarket = new CodeMarket('KOSPI', KOR, '코스피');
export const KrxKOSDAQ: CodeMarket = new CodeMarket('KOSDAQ', KOR, '코스닥');

// Naver
export const MARKET_CAPITALIZATION_URL: string = 'https://finance.naver.com/sise/sise_market_sum.nhn';
export const NaverKOSPI: CodeMarket = new CodeMarket('KOSPI', KOR, '0');
export const NaverKOSDAQ: CodeMarket = new CodeMarket('KOSDAQ', KOR, '1');