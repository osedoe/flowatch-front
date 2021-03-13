import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: var(--text-color);
  margin: 0;
`;

export interface PProps {
  children?: ReactNode;
}

export const P = ({ children }: PProps) => {
  return <Container>
    {children}
  </Container>;
};
