import Entity from '../Entity';
import { Role } from '../../../constant/account';

export default class User implements Entity {
  public password?: string;

  constructor(
    public id: string | null,
    public email: string,
    public name: string,
    public role: Role,
  ) {
  }
}
