// load environment variables from .env file
import * as dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

import sequelize from '../src/db/sequelize';
import sync from '../src/db/sync';

const migrate = async () => {
  await sequelize.authenticate();
  sync();
};

migrate();