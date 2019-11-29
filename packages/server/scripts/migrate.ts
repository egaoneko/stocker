// load environment variables from .env file
import * as dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

import sequelize, { sync } from '../src/sequelize';

const migrate = async () => {
  await sequelize.authenticate();
  sync();
};

migrate();