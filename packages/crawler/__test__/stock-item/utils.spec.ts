import { convertEucKrToUtf8 } from '../../src/stock-item/utils';
import * as iconv from 'iconv-lite';

describe('utils', () => {
  test('euc-kr buffer to utf8 string', () => {
    expect(convertEucKrToUtf8(iconv.encode('삼성전자', 'euc-kr'))).toEqual('삼성전자');
  });
});
