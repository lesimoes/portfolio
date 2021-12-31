import React from 'react';
import styled from 'styled-components';
import Roadmap from './Roadmap';

const aboutData = [
  {
    icon: '🎓',
    title: 'Master Degree [2017]',
    description:
      'I finished my Master Degree in Computer Sciente at UFJF and I published scientific papers in national and international conferences in Software Engineering.',
  },
  {
    icon: '👨‍🏫',
    title: 'Assistant Professor [2018 - 2021]',
    description:
      'I worked as Assistant Professor at four universities and teached dozens of students.',
  },
  {
    icon: '👷',
    title: 'Software Developer [2016]',
    description:
      'I’ve been working in a lot of web projects in Ecommerce (Payments, Catalog, Gift Card Provider), Customer Experience, ChatBots, Built a low code platform, Worked with Cloud Services.',
  },
  {
    icon: '👨‍🏫',
    title: 'Bootcamp Professor [2021]',
    description:
      'I’ve been working as bootcamp professor teaching dozend of students from ZERO to Web Full Stack HERO.',
  },
];

export default function About() {
  return (
    <Container>
      <h1>About ++ </h1>
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
