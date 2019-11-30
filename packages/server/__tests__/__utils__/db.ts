import sequelize from '../../src/libs/sequelize';
import { Transaction } from 'sequelize';

export async function rollback(test: (transaction: Transaction) => Promise<void>): Promise<unknown> {
  return sequelize
    .transaction({ autocommit: false })
    .then(async (transaction: Transaction) => {
      await test(transaction);
      await transaction.rollback();
    });
}