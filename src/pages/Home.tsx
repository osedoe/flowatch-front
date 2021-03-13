import React from 'react';
import { Button, Card, CardContent, TextField } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Layout } from '../components/layout/Layout';

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

export const Home = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/');
  };

  return <Layout>
    <Container>
      <Card raised>
        <CardContent>
          <form noValidate>
            <h2>Login</h2>
            <Block>
              <TextField label="Username" variant="filled"/>
            </Block>
            <Block>
              <TextField label="Password" variant="filled"/>
            </Block>
            <Block>
              <Button variant="contained" color="secondary" fullWidth onClick={handleLogin}>Sign in</Button>
            </Block>
          </form>
        </CardContent>
      </Card>
    </Container>
  </Layout>;
};
