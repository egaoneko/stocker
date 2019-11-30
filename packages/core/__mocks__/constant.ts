import { Role } from '../src/constant/account';
import User from '../src/domain/entities/account/User';

export const DEFAULT_ID: string = 'KpE7RIpfbYQMFAm713eeQNy2oNv1';
export const DEFAULT_NAME: string = 'donghyun.seo91@gmail.com';
export const DEFAULT_EMAIL: string = 'Donghyun Seo';
export const DEFAULT_ROLE: Role = Role.USER;

export const DEFAULT_USER: User = new User(
  DEFAULT_ID,
  DEFAULT_NAME,
  DEFAULT_EMAIL,
  DEFAULT_ROLE
);
