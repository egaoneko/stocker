import { AxiosInstance } from 'axios';
import {
  forkJoin,
  Observable,
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import HttpProvider from '@stocker/core/lib/data/providers/HttpProvider';
import {
  GET_INDEX_COMPONENTS_URL
} from '../../../stock-item/constant';
import {
  map,
  switchMap
} from 'rxjs/operators';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import WiseStockItemMapper from '../../mappers/stock-item/WiseStockItemMapper';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import { crawlLastBusinessDay } from '../../../stock';
import * as moment from 'moment-timezone';

interface WiseIndexComponents {
  info: any;
  list: WiseIndexComponent[];
  sector: any[];
  size: any[];
}

export interface WiseIndexComponent {
  ALL_MKT_VAL: number;
  APT_SHR_CNT: number;
  CAL_WGT: number;
  CMP_CD: string;
  CMP_KOR: string;
  IDX_CD: string;
  IDX_NM_KOR: string;
  MKT_VAL: number;
  SEC_CD: string;
  SEC_NM_KOR: string;
  SEQ: number;
  S_WGT: number;
  TOP60: number;
  WGT: number;
}

const WISE_SECTOR_CLASSIFICATION: string[] = [
  'G1010', // 에너지
  'G1510', // 소재
  'G2010', // 자본재
  'G2020', // 상업서비스와공급품
  'G2030', // 운송
  'G2510', // 자동차와부품
  'G2520', // 내구소비재와의류
  'G2530', // 호텔,레스토랑,레저 등
  'G2550', // 소매(유통)
  'G2560', // 교육서비스
  'G3010', // 식품과기본식료품소매
  'G3020', // 식품,음료,담배
  'G3030', // 가정용품과개인용품
  'G3510', // 건강관리장비와서비스
  'G3520', // 제약과생물공학
  'G4010', // 은행
  'G4020', // 증권
  'G4030', // 다각화된금융
  'G4040', // 보험
  'G4050', // 부동산
  'G4510', // 소프트웨어와서비스
  'G4520', // 기술하드웨어와장비
  'G4530', // 반도체와반도체장비
  'G4535', // 전자와 전기제품
  'G4540', // 디스플레이
  'G5010', // 전기통신서비스
  'G5020', // 미디어와엔터테인먼트
  'G5510', // 유틸리티
];

export default class WiseStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public crawlStockItems(): Observable<StockItem[]> {
    return WiseStockItemProvider.getLastBusinessDay()
      .pipe(
        switchMap<LastBusinessDay, Observable<StockItem[]>>((businessDay: LastBusinessDay): Observable<StockItem[]> => {
          const date: string = moment.tz(businessDay.date, 'Asia/Seoul').format('YYYYMMDD');
          const obsList: Observable<StockItem[]>[] = WiseStockItemProvider.getSectors().map(
            (sector: string): Observable<StockItem[]> => this.crawlStockItemsBySector(sector, date)
          );

          return forkJoin<Observable<StockItem[]>[]>(obsList)
            .pipe(
              map<StockItem[][], StockItem[]>((list: StockItem[][]): StockItem[] =>
                list.reduce((acc: StockItem[], value: StockItem[]) => acc.concat(value), [])
              )
            );
        }),
      );
  }

  private static getSectors(): string[] {
    return WISE_SECTOR_CLASSIFICATION;
  }

  private static getLastBusinessDay(): Observable<LastBusinessDay> {
    return crawlLastBusinessDay();
  }

  private crawlStockItemsBySector(sector: string, date: string): Observable<StockItem[]> {
    return this.request<WiseIndexComponents>({
      method: 'GET',
      url: GET_INDEX_COMPONENTS_URL,
      params: {
        sec_cd: sector,
        dt: date,
        ceil_yn: 0
      }
    }).pipe(
      map<WiseIndexComponents, StockItem[]>((data: WiseIndexComponents): StockItem[] => {

        if (!data) {
          throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Wise sector index is something wrong.');
        }

        return data.list.map(
          (component: WiseIndexComponent): StockItem => new WiseStockItemMapper().toEntity(component)
        );
      })
    );
  }
}