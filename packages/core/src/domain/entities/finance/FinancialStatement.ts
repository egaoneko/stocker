import Entity from '../Entity';

export interface FinancialStatementInterface {
  id?: string;
  finalAccountYear?: number; // 결산년도

  currentAssets?: number; // 유동자산
  cashableAssets?: number; // 현금 및 현금성 자산
  accountReceivable?: number; // 매출채권
  inventories?: number; // 재고자산

  nonCurrentAssets?: number; // 비유동자산
  tangibleAssets?: number; // 유형자산
  intangibleAssets?: number; // 무형자산

  totalAssets?: number; // 자산총계

  currentLiabilities?: number; // 유동부채
  tradePayables?: number; // 매입채무
  shortTermBorrowings?: number; // 단기차입금
  amountPayable?: number; // 미지급금

  nonCurrentLiabilities?: number; // 비유동부채
  corporateBonds?: number; // 사채
  longTermBorrowings?: number; // 장기차입금
  longTermAmountPayable?: number; // 장기미지급금
  deferredTaxLiabilities?: number; // 이연법인세부채

  totalLiabilities?: number; // 부채총계

  capitalStock?: number; // 자본금
  premiumOnCapitalStock?: number; // 주식발행초과금
  capitalSurplus?: number; // 자본잉여금
  earnedSurplus?: number; // 이익잉여금

  totalCapital?: number; // 자본총계
}

export default class FinancialStatement implements Entity {
  public id?: string;
  public finalAccountYear?: number;
  public currentAssets?: number;
  public cashableAssets?: number;
  public accountReceivable?: number;
  public inventories?: number;
  public nonCurrentAssets?: number;
  public tangibleAssets?: number;
  public intangibleAssets?: number;
  public totalAssets?: number;
  public currentLiabilities?: number;
  public tradePayables?: number;
  public shortTermBorrowings?: number;
  public amountPayable?: number;
  public nonCurrentLiabilities?: number;
  public corporateBonds?: number;
  public longTermBorrowings?: number;
  public longTermAmountPayable?: number;
  public deferredTaxLiabilities?: number;
  public totalLiabilities?: number;
  public capitalStock?: number;
  public premiumOnCapitalStock?: number;
  public capitalSurplus?: number;
  public earnedSurplus?: number;
  public totalCapital?: number;

  public equal(other: FinancialStatement): boolean {
    if (!this.id || !this.id) {
      return false;
    }

    if (this.id !== other.id) {
      return false;
    }
    return true;
  }

  public clone(): FinancialStatement {
    const clone: FinancialStatement = new FinancialStatement();
    clone.id = this.id;
    clone.finalAccountYear = this.finalAccountYear;
    clone.currentAssets = this.currentAssets;
    clone.cashableAssets = this.cashableAssets;
    clone.accountReceivable = this.accountReceivable;
    clone.inventories = this.inventories;
    clone.nonCurrentAssets = this.nonCurrentAssets;
    clone.tangibleAssets = this.tangibleAssets;
    clone.intangibleAssets = this.intangibleAssets;
    clone.totalAssets = this.totalAssets;
    clone.currentLiabilities = this.currentLiabilities;
    clone.tradePayables = this.tradePayables;
    clone.shortTermBorrowings = this.shortTermBorrowings;
    clone.amountPayable = this.amountPayable;
    clone.nonCurrentLiabilities = this.nonCurrentLiabilities;
    clone.corporateBonds = this.corporateBonds;
    clone.longTermBorrowings = this.longTermBorrowings;
    clone.longTermAmountPayable = this.longTermAmountPayable;
    clone.deferredTaxLiabilities = this.deferredTaxLiabilities;
    clone.totalLiabilities = this.totalLiabilities;
    clone.capitalStock = this.capitalStock;
    clone.premiumOnCapitalStock = this.premiumOnCapitalStock;
    clone.capitalSurplus = this.capitalSurplus;
    clone.earnedSurplus = this.earnedSurplus;
    clone.totalCapital = this.totalCapital;
    return clone;
  }

  public toString(): string {
    return [
      this.id,
      this.finalAccountYear,
      this.currentAssets,
      this.cashableAssets,
      this.accountReceivable,
      this.inventories,
      this.nonCurrentAssets,
      this.tangibleAssets,
      this.intangibleAssets,
      this.totalAssets,
      this.currentLiabilities,
      this.tradePayables,
      this.shortTermBorrowings,
      this.amountPayable,
      this.nonCurrentLiabilities,
      this.corporateBonds,
      this.longTermBorrowings,
      this.longTermAmountPayable,
      this.deferredTaxLiabilities,
      this.totalLiabilities,
      this.capitalStock,
      this.premiumOnCapitalStock,
      this.capitalSurplus,
      this.earnedSurplus,
      this.totalCapital,
    ].join(',');
  }
}
