import Entity from '../Entity';
import { Role } from '../../../enums/account';

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

  public equal(other: User): boolean {
    if (!this.id || !other.id) {
      return false;
    }

    return this.id === other.id;
  }

  public clone(): User {
    const clone: User = new User(this.id, this.email, this.name, this.role);
    clone.photo = this.photo;
    clone.provider = this.provider;
    return clone;
  }

  public toString(): string {
    return [
      this.id,
      this.email,
      this.name,
      this.role,
    ].join(',');
  }
}
