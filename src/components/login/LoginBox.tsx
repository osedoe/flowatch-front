import React from 'react';
import styled from 'styled-components';
import { Input } from '../basics/Input';


const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Block = styled.div`
  margin: 15px;
`;

export interface LoginBoxProps {
  onChange: (fieldName: string) => any; // TODO: Review type
  onLogin: () => void;
}

export const LoginBox = ({ onChange, onLogin }: LoginBoxProps) => {
  return <Container>
    <div>
      <form noValidate>
        <Block>
          <h2>Login</h2>
        </Block>
        <Block>
          <Input label="Username" onChange={onChange('username')}/>
        </Block>
        <Block>
          <Input type="password" label="Password" onChange={onChange('password')}/>
        </Block>
        <Block>
          <button onClick={onLogin}>Sign in</button>
        </Block>
      </form>
    </div>
  </Container>;
};
