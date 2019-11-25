import sequelize from './sequelize';

export function associate() {
  // configure relations
}
export default function sync() {
  associate();
  sequelize.sync();
}