import Market from '../domain/entities/market/Market';
import { KOR } from './nation';

export const KOSPI: Market = new Market('KOSPI', KOR);
export const KOSDAQ: Market = new Market('KOSDAQ', KOR);