import * as iconv from 'iconv-lite';

export function convertEucKrToUtf8(html: Buffer): string {
  return iconv.decode(html, 'euc-kr').toString();
}
