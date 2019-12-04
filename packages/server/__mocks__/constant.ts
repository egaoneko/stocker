import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

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

DEFAULT_USER.photo = 'https://lh3.googleusercontent.com/a-/AAuE7mByJpaRDgD3vePPsPY7_Em67lncziXtxobBNGvQ';
DEFAULT_USER.provider = 'google.com';