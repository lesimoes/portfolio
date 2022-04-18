import React from 'react';
import styled from 'styled-components';

export default function Projects() {
  return (
    <Container>
      <h1>Projetos</h1>
      <Content>
        <div>
          <a href="/firma">
            <h3>
              <strong>Firma</strong>
            </h3>
            <p>
              Tenho trabalhado em um projeto open source chamado Firma. Firma é uma ferramenta para engajar colaboradores e ajudar instituições de caridade. Sinta-se livre para contribuir também.
            </p>
            <br />
            <p>
              <em>Node</em> <em>Typescript</em> <em>React</em> <em>Mongo</em>
            </p>
          </a>
        </div>
        <div>
          <a href="/">
            <h3>
              <strong>SQS Huge Message</strong>
            </h3>
            <p>
              Se você está com problemas quanto ao limite do tamanho das mensagens enviadas para o AWS SQS então esse pacote pode te ajudar.
            </p>
            <br />
            <p>
              <em>Node</em> <em>Typescript</em>
            </p>
          </a>
        </div>
        <div>
          <a href="/">
            <h3>
              <strong>Shaolim - The Bot</strong>
            </h3>
            <p>
              Ou talvez você é professor e está procurando uma maneira de engajar seus alunos. Sim, eu sei! As vezes isso é uma tarefa homérica, certo?
              Talvez você possar usar algumas ideias do meu projeto Shaolim, é um bot do discord que ajuda os estudantes na busca do conteúdo passado em aula (ou outros recursos de aprendizagem).
            </p>
            <br />
            <p>
              <em>Node</em> <em>Firebase</em> <em>API AI</em>
            </p>
          </a>
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
    background-color: rgba(10, 10, 10, 0.4);
    flex: 1 1 0px;
    margin: 1%;
    padding: 1%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
      background-color: rgba(10, 10, 10, 0.2);
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 80vw;

    div {
      padding: 4%;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 12px;
    width: 90vw;
  }
`;
