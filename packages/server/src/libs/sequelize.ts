import { Sequelize } from 'sequelize-typescript';

const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE
} = process.env as { [key: string]: string };

const sequelize: Sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: 'postgres',
  define: {
    underscored: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  models: [__dirname + '/../data/models/**/*.ts']
});


export function associate() {
  // configure relations
}

export function sync() {
  associate();
  sequelize.sync();
}

export default sequelize;