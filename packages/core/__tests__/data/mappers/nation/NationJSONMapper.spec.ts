import Nation, { NationInterface } from '../../../../src/domain/entities/nation/Nation';
import NationJSONMapper from '../../../../src/data/mappers/nation/NationJSONMapper';

describe('NationJSONMapper', () => {
  const mapper: NationJSONMapper = new NationJSONMapper();
  const json: NationInterface = {
    code: '0',
    name: 'Test',
  };
  const entity: Nation = new Nation('0', 'Test');

  test('toEntity', () => {
    expect(mapper.toEntity(json).equal(entity)).toBeTruthy();
  });

  test('toEntity with wrong json', () => {
    expect(() => mapper.toEntity({} as any)).toThrowError('Invalid json');
  });

  test('toJSON', () => {
    expect(mapper.toJSON(entity)).toEqual(json);
  });
});
