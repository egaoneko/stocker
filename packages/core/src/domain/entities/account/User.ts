import Entity from '../Entity';
import { Role } from '../../../constant/account';

export default class User implements Entity {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public role: Role,
  ) {
  }
}
