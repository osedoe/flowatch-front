import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { Header } from './header/Header';

const Container = styled.div`
  background: var(--bg1);
  min-height: 100vh;
`;

const BodyWrapper = styled.div`
  padding: 30px;
`;

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container>
    <AppBar position="sticky">
      <Header/>
    </AppBar>
    <BodyWrapper>
      {children}
    </BodyWrapper>
  </Container>;
};
