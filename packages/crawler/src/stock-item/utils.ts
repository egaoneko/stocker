import * as iconv from 'iconv-lite';

export function convertEucKrToUtf8(html: Buffer): string {
  return iconv.decode(html, 'euc-kr').toString();
}

export function convertUtf8ToEucKr(html: string): Buffer {
  return iconv.encode(html, 'euc-kr');
}
