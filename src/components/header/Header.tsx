import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 60px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
`;

const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
`;


export const Header = () => {
  return <Container>
    <Heading>
      <H1>FLOWATCH</H1>
    </Heading>
    <Nav/>
  </Container>;
};
