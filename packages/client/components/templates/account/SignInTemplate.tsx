import React, { CSSProperties } from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';
import {
  Col,
  Row
} from 'antd';
import FullLayoutTemplate from '../layout/FullLayoutTemplate';
import CenterTemplate from '../layout/CenterTemplate';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from '../../../libs/firebase';
import Logo from '../../molecules/logo/Logo';
import { main } from '../../../utils/router';

const logoImageUrl: string = 'images/logo_transparent.png';

interface PropsType {
}

export default function SignInTemplate(): JSX.Element {
  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };

  return (
    <FullLayoutTemplate>
      <CenterTemplate>
        <Row css={container}>
          <Col span={24}>
            <div css={logoContainer}>
              <Logo
                width={200}
                height={76}
                imageUrl={logoImageUrl}
                onClick={main}
              />
            </div>
          </Col>
          <Col css={btnContainer} span={24}>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          </Col>
        </Row>
      </CenterTemplate>
    </FullLayoutTemplate>
  );
}

const container: SerializedStyles = css`
  width: 435px;
`;

const logoContainer: SerializedStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const btnContainer: SerializedStyles = css`
  height: 95px;
`;
