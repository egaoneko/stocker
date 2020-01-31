import {
  Observable,
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import { fromPromise } from 'rxjs/internal-compatibility';
import fetch from 'node-fetch';
import AdmZip from 'adm-zip';
import temp from 'temp';
import convert from 'xml-js';
import {
  DART_API_KEY,
  OPEN_DART_API
} from '../../../constant';
import { map } from 'rxjs/operators';
import DartStockItemMapper from '../../mappers/stock-item/DartStockItemMapper';

export interface CorpCodeXML {
  corp_code: CorpCodeXMLText;
  corp_name: CorpCodeXMLText;
  stock_code: CorpCodeXMLText;
  modify_date: CorpCodeXMLText;
}

interface CorpCodeXMLText {
  _text: string;
}

const mapper: DartStockItemMapper = new DartStockItemMapper();

export default class DartStockItemProvider {
  public crawlStockItems(): Observable<StockItem[]> {
    return fromPromise(this.getCorpCodes())
      .pipe(
        map((corpCodes: CorpCodeXML[]): StockItem[] => {
          return corpCodes.map((xml: CorpCodeXML): StockItem => mapper.toEntity(xml));
        })
      );
  }

  private async getCorpCodes(): Promise<CorpCodeXML[]> {
    let json: any = null;

    // Automatically track and cleanup files at exit
    temp.track();

    try {
      const res = await fetch(`${OPEN_DART_API}/corpCode.xml?crtfc_key=${DART_API_KEY}`);
      const stream = temp.createWriteStream();
      await new Promise((resolve) => {
        res.body.pipe(stream);
        stream.on('finish', () => {
          resolve();
        });
      });

      const zip = new AdmZip(stream.path);
      const zipEntries = zip.getEntries();
      zipEntries.forEach((zipEntry) => {
        // outputs zip entries information
        if (zipEntry.entryName !== 'CORPCODE.xml') {
          return;
        }
        json = JSON.parse(
          convert.xml2json(zipEntry.getData().toString('utf8'), { compact: true, spaces: 4 })
        );
      });
      stream.end();
    } catch (e) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Corp Code Download Error: ' + e);
    }

    if (
      !json ||
      !json.result ||
      !json.result.list
    ) {
      return [];
    }

    return json.result.list
      .filter((item: CorpCodeXML) => !!item.stock_code._text);
  }
}