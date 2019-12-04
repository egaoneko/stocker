import Entity from '../Entity';
import { Role } from '../../../constant/account';

export default class User implements Entity {
  public photo?: string;
  public provider?: string;

  constructor(
    public id: string,
    public email: string,
    public name: string,
    public role: Role,
  ) {
  }
}
