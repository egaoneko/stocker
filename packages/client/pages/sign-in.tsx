import React from 'react';
import SignInTemplate from '../components/templates/account/SignInTemplate';

interface PropsType {
}


const SignIn: (props: PropsType) => JSX.Element = (): JSX.Element => {
  return (
    <SignInTemplate/>
  );
};

export default SignIn;