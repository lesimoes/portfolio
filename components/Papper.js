import React from 'react';
import styled from 'styled-components';
import Roadmap from './Roadmap';

const pappersData = [
  {
    title: 'Simpósio Brasileiro em Sistemas de Informação (SBSI) [2017]',
    description:
      'Sistema de Recomendação de Serviços Baseado em uma Arquitetura Aberta para um Ecossistema de Software',
    link: 'http://sbsi2017.dcc.ufla.br/programacao/artigosaceitos.html'
  },
  {
    title: '5th International Workshop on Software Engineering [2017]',
    description:
      'R.ECOS: educational recommender ecosystem (Coautor)',
    link: 'https://dl.acm.org/doi/10.5555/3103196.3103207',
  },
  {
    title: 'Congresso Internacional de Informática Educativa (TISE) [2016]',
    description:
      'MMRecommender: Metamodelo de Sistemas de Recomendação Aplicado a Grupos Educacionais',
    link: 'https://www.researchgate.net/publication/311510492_MMRecommender_Metamodelo_de_Sistemas_de_Recomendacao_Aplicado_a_Grupos_Educacionais'
  },

];

export default function Papper() {
  return (
    <Container>
      <h1>Artigos Publicados</h1>
      {pappersData.map((step, index) => (
        <Roadmap
          key={index}
          title={step.title}
          description={step.description}
          link={step.link}
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
