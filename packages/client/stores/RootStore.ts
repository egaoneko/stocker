import {
  observable
} from 'mobx';
import { useStaticRendering } from 'mobx-react';
import User from '@stocker/core/lib/domain/entities/account/User';
import { IS_SERVER } from '../constant/common';

// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(IS_SERVER);

export default class RootStore {
  @observable
  public user: User | null = null;

  public hydrate(serializedStore: any) {
    this.user = serializedStore['user'] != null
      ? serializedStore['user']
      : null;
  }

  public updateUser(user: User | null): void {
    this.user = user;
  }
}

export async function fetchInitialRootStoreState(): Promise<object> {
  return Promise.resolve({});
}