import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../context/UserContext';
import { Login } from '../login/Login';


const Container = styled.nav`
  background: white;
  border-bottom-left-radius: 25px;
  box-shadow: black 1px 1px 1px;
  color: #30404D;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 15px 40px;
  grid-gap: 40px;
  height: 100%;
`;

const Div = styled.div`
  background: #2f515e;
  border-radius: 4px;
  color: var(--dirty-white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.p``;

export interface NavProps {

}

export const Nav = (props: NavProps) => {
  const { userState: { isAuthenticated } } = useUserContext();

  if (isAuthenticated) {
    return <Container>
      <Menu>
        <Subtitle>Stay focused with the help of strangers!</Subtitle>
      </Menu>
    </Container>;
  }


  return <Container>
    <Menu>
      <Div>Caller</Div>
      <Div>Home / Settings</Div>
      <Login/>
    </Menu>
  </Container>;
};
