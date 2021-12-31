import React from 'react';
import styled from 'styled-components';


export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <Content>
        <div>
            <h3><strong>Firma</strong></h3>
            <p>I've been working on new open source project called Firma, it's a tool for engage employees help each others and help charity institutions. Feel free to join in this trip with me.</p>
            <br />
            <p><em>Node</em> <em>Typescript</em> <em>React</em> <em>Mongo</em></p>
        </div>
        <div>
            <h3><strong>SQS Huge Message</strong></h3>
            <p>If you are having problems with SQS limit message size and working with Node/Typescript, maybe my package could help you.</p>
            <br />
            <p><em>Node</em> <em>Typescript</em></p>
        </div>
        <div>
            <h3><strong>Shaolim - The Bot</strong></h3>
            <p>Or maybe you are a professor and look for a way to engage your students. Yeah, I know! Some times it's a tough task, right? Maybe you could get some ideas from my project Shaolim, its a discord bot that help students find recorded classes (or other learning resources).</p>
            <br />
            <p><em>Node</em> <em>Firebase</em> <em>API AI</em></p>
        </div>

      </Content>
    </Container>
  );
}

const Container = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 4%;
    background-color:  rgba(10, 10, 10, 0.4) ;
    flex: 1 1 0px;
    margin: 1%;
    padding: 1%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    &:hover {
        cursor: pointer;
        background-color:  rgba(10, 10, 10, 0.2) ;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }

  @media screen and (max-width: 800px) {
      flex-direction: column;
      width: 80vw;

      div {
        padding: 4%;
      }
    }
`;
