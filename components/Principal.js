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
        <h1>Olá 👋</h1>
        <p>
          Meu nome é Leandro Simões, mas você pode me chamar de <strong>Le</strong>.
          Sou programador, professor e tenho mestrado em Ciência da Computação pela UFJF.
        </p>
        <p>
          Tenho trabalhado com <em>Node</em>, <em>Typescript</em>,{' '}
          <em>React</em>, <em>AWS</em>, como programador, tech lead ou arquiteto de software em projetos de e-commerce, customer experience e atendimento ao cliente.
        </p>
        <p>
          Trabalhei em grandes empresas, start-ups e como freelancer. Publiquei artigos de engenharia de software em eventos nacionais e internacionais.
        </p>
        <br />
        <div>
          <a
            href={
              'https://www.linkedin.com/in/leandro-sim%C3%B5es-msc-98993428/'
            }
            target="_blank"
            rel="noreferrer"
          >
            <Button>linkedin</Button>
          </a>
          <a href={'https://github.com/lesimoes'} target="_blank" rel="noreferrer">
            <Button>github</Button>
          </a>
          <a href={"mailto:lesimoes0@gmail.com"} target="_blank" rel="noreferrer">
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
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    margin: 8px;
    width: 94vw;
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

  @media screen and (max-width: 500px) {
    width: 90vw;
    justify-content: center;
    align-items: center;

    div {
      width: 80%;
      justify-content: space-between;
    }
  }
`;
