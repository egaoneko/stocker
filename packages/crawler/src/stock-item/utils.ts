import * as iconv from 'iconv-lite';

export function convertEucKrToUtf8(html: string): string {
  const buf: Buffer = new Buffer(html);
  return iconv.decode(buf, 'euc-kr').toString();
}
