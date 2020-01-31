// load environment variables from .env file
import * as dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

import sequelize from '../src/libs/sequelize';

const migrate = async () => {
  await sequelize.authenticate();
  sequelize.sync();
};

migrate();