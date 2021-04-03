import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Header } from '../header/Header';

const Container = styled.div`
  //background: var(--bg1);
  height: 100vh;

  & > header {
    box-shadow: none;
  }
`;

const BodyWrapper = styled.div`
  padding: 30px;
  height: calc(100vh - 60px);
`;

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container>
    <div>
      <Header/>
    </div>
    <BodyWrapper>
      {children}
    </BodyWrapper>
  </Container>;
};
