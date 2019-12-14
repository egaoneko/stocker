import LastBusinessDay from '../../../../src/domain/entities/stock/LastBusinessDay';

describe('LastBusinessDay', () => {
  test('equal', () => {
    const date: Date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    const lastBusinessDay: LastBusinessDay = new LastBusinessDay(date);

    const equalDate: Date = new Date();
    equalDate.setHours(0);
    equalDate.setMinutes(0);
    equalDate.setSeconds(0);
    equalDate.setMilliseconds(0);
    expect(lastBusinessDay.equal(new LastBusinessDay(equalDate))).toBeTruthy();
    expect(lastBusinessDay.equal(new LastBusinessDay(new Date()))).toBeFalsy();
  });

  test('clone', () => {
    const lastBusinessDay: LastBusinessDay = new LastBusinessDay(new Date());
    const clone: LastBusinessDay = lastBusinessDay.clone();
    expect(clone.date).toBe(lastBusinessDay.date);
  });

  test('toString', () => {
    const lastBusinessDay: LastBusinessDay = new LastBusinessDay(new Date());
    expect(lastBusinessDay.toString()).toBe([
      lastBusinessDay.date,
    ].join(','));
  });
});
