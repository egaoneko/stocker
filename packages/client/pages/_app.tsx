import App, {
  AppContext,
  AppInitialProps,
} from 'next/app';
import React from 'react';
import { Provider } from 'mobx-react';
import RootStore, { fetchInitialRootStoreState } from '../stores/RootStore';
import firebase from '../libs/firebase';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import User from '@stocker/core/lib/domain/entities/account/User';
import {
  signedIn,
  signedOut
} from '../utils/auth';
import FirebaseUserMapper from '../data/mappers/account/FirebaseUserMapper';
import { IS_SERVER } from '../constant/common';
import { appWithTranslation } from '../i18n';

export interface MyAppProps extends AppInitialProps {
  initialRootStoreState: object;
}

export interface MyAppContextProps {
}

export interface MyAppState {
  rootStore: RootStore;
}

class MyApp
  extends App<MyAppProps, MyAppContextProps, MyAppState> {

  state: MyAppState = {
    rootStore: new RootStore(),
  };

  constructor(props: any) {
    super(props);

    if (!IS_SERVER) {
      this.initObserve();
    }
  }

  static async getInitialProps(appContext: AppContext): Promise<MyAppProps> {
    const appProps: AppInitialProps = await App.getInitialProps(appContext);
    const initialRootStoreState: object = await fetchInitialRootStoreState();

    return {
      ...appProps,
      initialRootStoreState,
    };
  }

  // Hydrate serialized state to store
  static getDerivedStateFromProps(props: MyAppProps, state: MyAppState) {
    state.rootStore.hydrate(props.initialRootStoreState);
    return state;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider rootStore={this.state.rootStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  private initObserve(): void {
    firebase.auth().onAuthStateChanged((fbUser: firebase.User | null) => {
      let user: User | null = null;

      if (fbUser) {
        user = new FirebaseUserMapper().toEntity(fbUser);
        CONTEXT.useCases.getCurrentUserToken
          .runOnce(async, queue)
          .subscribe((token: string | null) => token && signedIn(token));
      } else {
        signedOut();
      }

      this.state.rootStore.updateUser(user);
    });
  }
}

export default appWithTranslation(MyApp);
