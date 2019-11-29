import React from 'react';
import FullContent from '../../organisms/layout/FullContent';
import CenterContainer from '../../organisms/layout/CenterContainer';

interface PropsType {
  children?: React.ReactNode;
}

export default function CenterTemplate({ children }: PropsType): JSX.Element {
  return (
    <CenterContainer>
      {children}
    </CenterContainer>
  );
}