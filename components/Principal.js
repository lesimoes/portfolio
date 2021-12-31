import React from 'react';
import styled from 'styled-components';
import Button from '../styles/Button';
import lesimoes from '../public/lesimoes.jpg';
import Avatar from '../styles/Avatar';

export default function Principal() {
  return (
    <Container>
      <ContainerAvatar>
        <Avatar image={lesimoes}></Avatar>
      </ContainerAvatar>
      <ContainerAbout>
        <h1>Hello there 👋</h1>
        <p>
          My name is Leandro Simões, but you can call me <strong>Le</strong>.
          I’m Software Developer from Brazil, Assistant Professor and hold a
          master’s degree in Computer Science from UFJF.
        </p>
        <p>
          I’ve been working with <em>Node</em>, <em>Typescript</em>,{' '}
          <em>React</em>, <em>AWS</em>, but I have interests in other languages
          like <strong>Rust</strong> or <strong>Vala</strong> (and someday I
          would like to contributing with Pop Os or Elementary OS – maybe would
          be my next project).
        </p>
        <br />
        <div>
          <a
            href={
              'https://www.linkedin.com/in/leandro-sim%C3%B5es-msc-98993428/'
            }
            target="_blank"
          >
            <Button>linkedin</Button>
          </a>
          <a href={'https://github.com/lesimoes'} target="_blank">
            <Button>github</Button>
          </a>
          <a href={"mailto:lesimoes0@gmail.com"} target="_blank">
            <Button>email</Button>
          </a>
        </div>
      </ContainerAbout>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 8%;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;
const ContainerAvatar = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;

  @media screen and (max-width: 800px) {
    width: 22vw;
  }
`;

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;

  div {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    width: 60vw;
  }
`;
