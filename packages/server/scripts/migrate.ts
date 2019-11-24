// load environment variables from .env file
import * as dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

import sequelize from '../src/data/sequelize';
import sync from '../src/data/sync';

const migrate = async () => {
  await sequelize.authenticate();
  sync();
};

migrate();