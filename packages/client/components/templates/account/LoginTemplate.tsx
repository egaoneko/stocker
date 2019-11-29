import React from 'react';
import { Form } from 'antd';
import FullLayoutTemplate from '../layout/FullLayoutTemplate';
import CenterTemplate from '../layout/CenterTemplate';
import LoginForm from '../../organisms/form/LoginForm';

interface PropsType {
}

export default function LoginTemplate(): JSX.Element {
  const WrappedSignInForm = Form.create({ name: 'login' })(LoginForm);

  return (
    <FullLayoutTemplate>
      <CenterTemplate>
        <WrappedSignInForm/>
      </CenterTemplate>
    </FullLayoutTemplate>
  );
}