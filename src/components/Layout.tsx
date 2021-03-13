import { H1 } from '@blueprintjs/core';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--bg1);
  min-height: 100vh;
  padding: 30px;
`;

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container>
    <H1>Flowatch</H1>
    <p>Stay focused with the help of strangers!</p>
    {children}
  </Container>;
};
