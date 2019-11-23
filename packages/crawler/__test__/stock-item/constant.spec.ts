import { KOR } from '@stocker/core/lib/constant/nation';
import {
  KrxKOSDAQ,
  KrxKOSPI,
  NaverKOSDAQ,
  NaverKOSPI
} from '../../src/stock-item/constant';

describe('market constant', () => {

  describe('KRX', () => {
    test('KrxKOSPI', () => {
      expect(KrxKOSPI.name).toEqual('KOSPI');
      expect(KrxKOSPI.nation).toEqual(KOR);
      expect(KrxKOSPI.code).toEqual('코스피');
    });

    test('KrxKOSDAQ', () => {
      expect(KrxKOSDAQ.name).toEqual('KOSDAQ');
      expect(KrxKOSDAQ.nation).toEqual(KOR);
      expect(KrxKOSDAQ.code).toEqual('코스닥');
    });
  });

  describe('Naver', () => {
    test('NaverKOSPI', () => {
      expect(NaverKOSPI.name).toEqual('KOSPI');
      expect(NaverKOSPI.nation).toEqual(KOR);
      expect(NaverKOSPI.code).toEqual('0');
    });

    test('NaverKOSDAQ', () => {
      expect(NaverKOSDAQ.name).toEqual('KOSDAQ');
      expect(NaverKOSDAQ.nation).toEqual(KOR);
      expect(NaverKOSDAQ.code).toEqual('1');
    });
  });

});
