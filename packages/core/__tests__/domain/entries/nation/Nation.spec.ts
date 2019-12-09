import Nation from '../../../../src/domain/entities/nation/Nation';

describe('Nation', () => {
  test('equal', () => {
    const nation: Nation = new Nation('0', 'Test');
    expect(nation.equal(new Nation('0', 'Test'))).toBeTruthy();
    expect(nation.equal(new Nation('1', 'T'))).toBeFalsy();
  });

  test('clone', () => {
    const nation: Nation = new Nation('0', 'Test');
    const clone: Nation = nation.clone();
    expect(clone.code).toBe(nation.code);
    expect(clone.name).toBe(nation.name);
  });

  test('toString', () => {
    const nation: Nation = new Nation('0', 'Test');
    expect(nation.toString()).toBe([
      nation.code,
      nation.name,
    ].join(','));
  });
});
