import React from 'react';
import styled from 'styled-components';
import Roadmap from './Roadmap';

const aboutData = [
  {
    icon: '👨‍🏫',
    title: 'Consultoria em Desenvolvimento de Software [2021]',
    description:
      'Trabalho como consultor de projetos de sofware como desenvolvedor e arquiteto de software com soluções AWS, Node, Typescritp e React.',
  },
  {
    icon: '👨‍🏫',
    title: 'Professor [2021]',
    description:
      'Tenho trabalhado como professor em um bootcamp ensinando centenas de alunos iniciando do ZERO até pessoas desenvolvedoras web fullstack.',
  },
  {
    icon: '👷',
    title: 'Software Developer e Tech Lead[2016]',
    description:
      'Trabalhei em diversos projetos de E-Commerce (Pagamentos, Catalogo, Gift Card Provider), Customer Experience, Chatbos e construi uma ferramenta low code.',
  },
  {
    icon: '👨‍🏫',
    title: 'Professor Assistente [2018 - 2021]',
    description:
      'Trabalhei como professor assistente em quatro universidades, lecionando para dezenas de alunos.',
  },
  {
    icon: '🎓',
    title: 'Mestrado em Ciência da Computação [2017]',
    description:
      'Concluí o mestrado em Ciência da Computação pela UFJF e publiquei artigos em eventos nacionais e internacionais em computação e engenharia de software.',
  },
];

export default function About() {
  return (
    <Container>
      <h1>Sobre ++ </h1>
      {aboutData.map((step, index) => (
        <Roadmap
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
        ></Roadmap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2%;

  @media screen and (max-width: 800px) {
    margin: 0%;
    div {
        flex-direction: column;
    }
  }

`;
