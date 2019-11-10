import Market from '@stocker/core/lib/domain/entities/market/Market';
import Nation from '@stocker/core/lib/domain/entities/nation/Nation';

export default class CodeMarket extends Market {
  constructor(
    public name: string,
    public nation: Nation,
    public code: string,
  ) {
    super(name, nation);
  }
}
