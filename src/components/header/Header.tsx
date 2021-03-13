import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 60px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const H1 = styled.h1`
  margin: 0;
  font-weight: bold;
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
      <Subtitle>Stay focused with the help of strangers!</Subtitle>
    </Heading>

  </Container>;
};
