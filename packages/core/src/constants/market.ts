import Market from '../domain/entities/market/Market';
import { KR } from './nation';

export const KOSPI: Market = new Market('KOSPI', KR);
export const KOSDAQ: Market = new Market('KOSDAQ', KR);