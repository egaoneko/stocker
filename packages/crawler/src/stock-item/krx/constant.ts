import { KOR } from '@stocker/core/lib/constant/nation';
import CodeMarket from '../../data/entities/market/CodeMarket';

export const GENERATE_OTP_URL: string = 'http://marketdata.krx.co.kr/contents/COM/GenerateOTP.jspx';
export const DOWNLOAD_URL: string = 'http://file.krx.co.kr/download.jspx';

export const KOSPI: CodeMarket = new CodeMarket('KOSPI', KOR, '코스피');
export const KOSDAQ: CodeMarket = new CodeMarket('KOSDAQ', KOR, '코스닥');