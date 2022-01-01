import React from 'react';
import styled from 'styled-components';

export default function Roadmap({ icon, title, description }) {
  return (
    <Container>
      <Action>
        <Icon>{icon}</Icon>
        <Title>
          <p>{title}</p>
        </Title>
      </Action>
      <Description>
        <p>{description}</p>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-radius: 4%;
  background-color: rgba(10, 10, 10, 0.4);

  margin: 1%;
  padding: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  div {
    margin: 1%;
    
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(10, 10, 10, 0.2);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 500px) {
    margin: 12px;
    width: 90vw;
  }

`;

const Action = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 320px;

`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 28px;
  border-radius: 50%;
  background-color: #f7fae6;
`;

const Title = styled.div`
  margin-left: 2%;
`;

const Description = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: flex-start;
`;
