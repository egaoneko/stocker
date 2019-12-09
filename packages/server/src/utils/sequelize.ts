import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { FindOptions } from 'sequelize';

export function generateFindOptions(options: Options): FindOptions {
  let { id, limit, page }: Options = options;
  const findOptions: FindOptions = {};

  if (id) {
    findOptions.where = {
      id,
    };
  }

  if (page) {
    if (!limit) {
      limit = 10;
    }

    findOptions.limit = limit;
    findOptions.offset = limit * (page - 1);
  }

  return findOptions;
}