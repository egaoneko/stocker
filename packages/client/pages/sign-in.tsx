import React, { useEffect } from 'react';
import SignInTemplate from '../components/templates/account/SignInTemplate';
import firebase from '../libs/firebase';
import { CONTEXT } from '../constant';
import { apply } from '@stocker/core/lib/utils/common';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';
import FirebaseUserMapper from '../data/firebase/mappers/account/FirebaseUserMapper';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import Router from 'next/router';

interface PropsType {
}

const SignIn: (props: PropsType) => JSX.Element = (): JSX.Element => {
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (credential: firebase.auth.UserCredential, redirectUrl: string) => {
        if (credential && credential.user) {
          apply<CreateUser>(
            CONTEXT.useCases.createUser,
            (it: CreateUser) => it.user = new FirebaseUserMapper().toEntity(credential.user as firebase.User)
          ).runOnce(async, queue).subscribe(() => {
            Router.push('/');
          });
        }
        return false;
      }
    }
  };

  return (
    <SignInTemplate uiConfig={uiConfig}/>
  );
};

export default SignIn;