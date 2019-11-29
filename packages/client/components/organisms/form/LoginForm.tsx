import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';
import Router from 'next/router';
import { WrappedFormUtils } from 'antd/lib/form/Form';

interface PropsType<V> {
  form: WrappedFormUtils<V>;
}

export default function LoginForm<V = any>({ form }: PropsType<V>): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((errors: any, values: V) => {
      if (errors) {
        return;
      }
      console.log('Received values of form: ', values);
      // Router.push('http://localhost:8080/');
    });
  };

  const moveToGoogle = (): void => {
    Router.push('/oauth/google');
  };

  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Sign in
        </Button>
        <Button onClick={moveToGoogle} style={{ width: '100%', backgroundColor: '#FF3F3E', color: '#ffffff' }}>
          Sign in with google
        </Button>
        Or <a href={'/m/account/sign/clause'}>register now!</a>
        <a style={{ float: 'right' }} href="">
          Forgot password
        </a>
      </Form.Item>
    </Form>
  );
};
