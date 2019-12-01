import React from 'react';
import CenterContainer from '../../organisms/layout/CenterContainer';

interface PropsType {
  children?: React.ReactNode;
}

const CenterTemplate: (props: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {
  return (
    <CenterContainer>
      {children}
    </CenterContainer>
  );
};

export default CenterTemplate;