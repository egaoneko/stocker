import React from 'react';
import FullLayout from '../../organisms/layout/FullLayout';
import FullContent from '../../organisms/layout/FullContent';

interface PropsType {
  children?: React.ReactNode;
}

export default function FullLayoutTemplate({ children }: PropsType): JSX.Element {
  return (
    <FullLayout>
      <FullContent>
        {children}
      </FullContent>
    </FullLayout>
  );
}