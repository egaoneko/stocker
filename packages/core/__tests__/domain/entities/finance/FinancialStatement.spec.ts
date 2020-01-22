import FinancialStatement from '../../../../src/domain/entities/finance/FinancialStatement';

describe('FinancialStatement', () => {
  test('equal', () => {
    const actual: FinancialStatement = new FinancialStatement();
    actual.id = '1';

    let expected: FinancialStatement;
    expected = new FinancialStatement();
    expect(actual.equal(expected)).toBeFalsy();

    expected = new FinancialStatement();
    expected.id = '2';
    expect(actual.equal(expected)).toBeFalsy();

    expected = new FinancialStatement();
    expected.id = '1';
    expect(actual.equal(expected)).toBeTruthy();
  });

  test('clone', () => {
    const financialStatement: FinancialStatement = new FinancialStatement();
    financialStatement.id = '0';
    financialStatement.finalAccountYear = 0;
    financialStatement.currentAssets = 0;
    financialStatement.cashableAssets = 0;
    financialStatement.accountReceivable = 0;
    financialStatement.inventories = 0;
    financialStatement.nonCurrentAssets = 0;
    financialStatement.tangibleAssets = 0;
    financialStatement.intangibleAssets = 0;
    financialStatement.totalAssets = 0;
    financialStatement.currentLiabilities = 0;
    financialStatement.tradePayables = 0;
    financialStatement.shortTermBorrowings = 0;
    financialStatement.amountPayable = 0;
    financialStatement.nonCurrentLiabilities = 0;
    financialStatement.corporateBonds = 0;
    financialStatement.longTermBorrowings = 0;
    financialStatement.longTermAmountPayable = 0;
    financialStatement.deferredTaxLiabilities = 0;
    financialStatement.totalLiabilities = 0;
    financialStatement.capitalStock = 0;
    financialStatement.premiumOnCapitalStock = 0;
    financialStatement.capitalSurplus = 0;
    financialStatement.earnedSurplus = 0;
    financialStatement.totalCapital = 0;

    const clone: FinancialStatement = financialStatement.clone();
    expect(clone.id).toBe(financialStatement.id);
    expect(clone.finalAccountYear).toBe(financialStatement.finalAccountYear);
    expect(clone.currentAssets).toBe(financialStatement.currentAssets);
    expect(clone.cashableAssets).toBe(financialStatement.cashableAssets);
    expect(clone.accountReceivable).toBe(financialStatement.accountReceivable);
    expect(clone.inventories).toBe(financialStatement.inventories);
    expect(clone.nonCurrentAssets).toBe(financialStatement.nonCurrentAssets);
    expect(clone.tangibleAssets).toBe(financialStatement.tangibleAssets);
    expect(clone.intangibleAssets).toBe(financialStatement.intangibleAssets);
    expect(clone.totalAssets).toBe(financialStatement.totalAssets);
    expect(clone.currentLiabilities).toBe(financialStatement.currentLiabilities);
    expect(clone.tradePayables).toBe(financialStatement.tradePayables);
    expect(clone.shortTermBorrowings).toBe(financialStatement.shortTermBorrowings);
    expect(clone.amountPayable).toBe(financialStatement.amountPayable);
    expect(clone.nonCurrentLiabilities).toBe(financialStatement.nonCurrentLiabilities);
    expect(clone.corporateBonds).toBe(financialStatement.corporateBonds);
    expect(clone.longTermBorrowings).toBe(financialStatement.longTermBorrowings);
    expect(clone.longTermAmountPayable).toBe(financialStatement.longTermAmountPayable);
    expect(clone.deferredTaxLiabilities).toBe(financialStatement.deferredTaxLiabilities);
    expect(clone.totalLiabilities).toBe(financialStatement.totalLiabilities);
    expect(clone.capitalStock).toBe(financialStatement.capitalStock);
    expect(clone.premiumOnCapitalStock).toBe(financialStatement.premiumOnCapitalStock);
    expect(clone.capitalSurplus).toBe(financialStatement.capitalSurplus);
    expect(clone.earnedSurplus).toBe(financialStatement.earnedSurplus);
    expect(clone.totalCapital).toBe(financialStatement.totalCapital);
  });

  test('toString', () => {
    const financialStatement: FinancialStatement = new FinancialStatement();
    financialStatement.id = '0';
    financialStatement.finalAccountYear = 0;
    financialStatement.currentAssets = 0;
    financialStatement.cashableAssets = 0;
    financialStatement.accountReceivable = 0;
    financialStatement.inventories = 0;
    financialStatement.nonCurrentAssets = 0;
    financialStatement.tangibleAssets = 0;
    financialStatement.intangibleAssets = 0;
    financialStatement.totalAssets = 0;
    financialStatement.currentLiabilities = 0;
    financialStatement.tradePayables = 0;
    financialStatement.shortTermBorrowings = 0;
    financialStatement.amountPayable = 0;
    financialStatement.nonCurrentLiabilities = 0;
    financialStatement.corporateBonds = 0;
    financialStatement.longTermBorrowings = 0;
    financialStatement.longTermAmountPayable = 0;
    financialStatement.deferredTaxLiabilities = 0;
    financialStatement.totalLiabilities = 0;
    financialStatement.capitalStock = 0;
    financialStatement.premiumOnCapitalStock = 0;
    financialStatement.capitalSurplus = 0;
    financialStatement.earnedSurplus = 0;
    financialStatement.totalCapital = 0;

    expect(financialStatement.toString()).toBe([
      financialStatement.id,
      financialStatement.finalAccountYear,
      financialStatement.currentAssets,
      financialStatement.cashableAssets,
      financialStatement.accountReceivable,
      financialStatement.inventories,
      financialStatement.nonCurrentAssets,
      financialStatement.tangibleAssets,
      financialStatement.intangibleAssets,
      financialStatement.totalAssets,
      financialStatement.currentLiabilities,
      financialStatement.tradePayables,
      financialStatement.shortTermBorrowings,
      financialStatement.amountPayable,
      financialStatement.nonCurrentLiabilities,
      financialStatement.corporateBonds,
      financialStatement.longTermBorrowings,
      financialStatement.longTermAmountPayable,
      financialStatement.deferredTaxLiabilities,
      financialStatement.totalLiabilities,
      financialStatement.capitalStock,
      financialStatement.premiumOnCapitalStock,
      financialStatement.capitalSurplus,
      financialStatement.earnedSurplus,
      financialStatement.totalCapital,
    ].join(','));
  });
});
