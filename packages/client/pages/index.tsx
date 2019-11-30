import React from 'react';
import HeaderLayoutTemplate from '../components/templates/layout/HeaderLayoutTemplate';
import firebase from '../libs/firebase';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import User from '@stocker/core/lib/domain/entities/account/User';
import { queue } from 'rxjs/internal/scheduler/queue';

export default function Home(): JSX.Element {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    CONTEXT.useCases.getCurrentUser.run(async, queue).subscribe((user: User | null) => {
      console.log(user);
    })
  });

  return (
    <HeaderLayoutTemplate/>
  );
}
