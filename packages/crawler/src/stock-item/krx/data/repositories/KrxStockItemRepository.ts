import {
  Observable,
  of
} from 'rxjs';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemProvider from '../http/providers/KrxStockItemProvider';
import CodeMarket from '../../../data/entities/market/CodeMarket';
import axios from 'axios';

export default class KrxStockItemRepository implements StockItemRepository {
  constructor(
    private provider: KrxStockItemProvider,
  ) {
  }

  crawlStockItems(market: CodeMarket): Observable<StockItem[]> {
    axios({
      method: 'GET',
      url: 'http://marketdata.krx.co.kr/contents/COM/GenerateOTP.jspx',
      headers: {
        Referer: 'http://marketdata.krx.co.kr/mdi',
      },
      params: {
        name: 'fileDown',
        filetype: 'csv',
        url: "MKD/03/0303/03030103/mkd03030103",
        tp_cd: 'ALL',
        // tp_cd: 'STK',
        // tp_cd: 'KSQ',
        date: '20191115',
        lang: 'ko',
        pagePath: '/contents/MKD/13/1302/13020401/MKD13020401.jsp'
      }
    }).then((res) => {
      axios({
        method: 'POST',
        url: 'http://file.krx.co.kr/download.jspx',
        headers: {
          Referer: 'http://marketdata.krx.co.kr/contents/COM/GenerateOTP.jspx',
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: `code=${res.data}`,
      }).then((res) => {
        console.log(res.data);
      });
    });

    return of([]);
  }
}