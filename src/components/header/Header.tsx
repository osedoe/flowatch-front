import React from 'react';
import styled from 'styled-components';

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
  //flex-direction: row;
  //justify-content: space-between;
  //align-items: center;
  padding: 15px 40px;
  grid-gap: 40px;
  height: 100%;
`;

const Div = styled.div`
  border: 2px solid red;
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

const Subtitle = styled.p`
  color: #009595;
  font-style: italic;
  margin: 0;
`;

export const Header = () => {
  return <Container>
    <Heading>
      <H1>FLOWATCH</H1>
    </Heading>
    <Nav>
      <Menu>
        <Div>CALLER</Div>
        <Div>HOME / SETTINGS</Div>
        <LoginWrapper>Log in / Sign up</LoginWrapper>
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
