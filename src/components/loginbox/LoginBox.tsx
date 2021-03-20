import React from 'react';
import styled from 'styled-components';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';


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
  onChange: (fieldName: string) => StandardInputProps['onChange'];
  onLogin: () => void;
}

export const LoginBox = ({ onChange, onLogin }: LoginBoxProps) => {
  return <Container>
    <Card raised>
      <CardContent>
        <form noValidate>
          <Block>
            <h2>Login</h2>
          </Block>
          <Block>
            <TextField label="Username" variant="filled" onChange={onChange('username')}/>
          </Block>
          <Block>
            <TextField type="password" label="Password" variant="filled" onChange={onChange('password')}/>
          </Block>
          <Block>
            <Button variant="contained" color="secondary" fullWidth onClick={onLogin}>Sign in</Button>
          </Block>
        </form>
      </CardContent>
    </Card>
  </Container>;
};
