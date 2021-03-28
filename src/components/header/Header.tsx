import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Login } from '../login/Login';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 60px;
`;

const Heading = styled.div`
  padding: 10px 30px;
`;

const Nav = styled.nav`
  background: white;
  border-bottom-left-radius: 25px;
  color: #30404D;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px 40px;
  grid-gap: 40px;
  height: 100%;

  //& button {
  //  color: var(--font-primary)
  //}
`;

const Div = styled.div`
  //border: 2px solid red;
  background: #2f515e;
  border-radius: 4px;
  color: var(--dirty-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const StyledBtn = styled(Button)`
  //background: #009595 !important;
  color: white;
  font-style: italic;
  margin: 0;
`;

export const Header = () => {
  const onSignIn = (event: any) => {

  };

  return <Container>
    <Heading>
      <H1>FLOWATCH</H1>
    </Heading>
    <Nav>
      <Menu>
        <Div>Caller</Div>
        <Div>Home / Settings</Div>
        {/*<Button variant="contained" color="secondary" fullWidth onClick={onSignIn}>Sign in / Sign up</Button>*/}
        <Login/>
      </Menu>
    </Nav>
  </Container>;

  // return <Container>
  //   <Heading>
  //     <H1>FLOWATCH</H1>
  //     <Subtitle>Stay focused with the help of strangers!</Subtitle>
  //   </Heading>
  // </Container>;
};
