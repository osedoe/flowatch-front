import React from 'react';
import styled from 'styled-components';

const Area = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Container = styled.div`
  background: #30404D;
  border-radius: 50px;
  height: 40px;
  width: 40px;
`;

const Icon = styled.span`
  color: var(--dirty-white);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export interface LoginProps {

}

export const Login = (props: LoginProps) => {


  return <Area>
    <Container>
      <Icon>LOGIN ICON</Icon>
    </Container>
  </Area>;
};
