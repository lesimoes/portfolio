import styled from 'styled-components';
import { useState } from 'react';
import { GrReactjs, GrNode } from "react-icons/gr";
import { TbBrandReactNative, TbBrandNextjs} from "react-icons/tb";
import { SiTypescript, SiCss3, SiHtml5, SiMongodb, SiPostgresql, SiAmazonaws, SiDocker, SiFirebase, SiStyledcomponents } from "react-icons/si";

export default function Skills () {


    const [tech, setTech] = useState('vem de clique');

    function handleTech (text) {
        setTech(text);
    }

    return (
        <Wrapper id="skills">
            <h1>Tecnologias & Ferramantas</h1>
            <Content>
              <GrReactjs onClick={() => handleTech('React - Frontend')} />
              <TbBrandReactNative  onClick={() => handleTech('React Native - Mobile')}/>
              <GrNode onClick={() => handleTech('Node - Backend')} />
              <SiTypescript onClick={() => handleTech('TypeScript - Fullstack')}  />
              <SiStyledcomponents onClick={() => handleTech('Styled-Components - Frontend')}  />
              <SiHtml5 onClick={() => handleTech('HTML 5 - Frontend')}  />
              <SiCss3 onClick={() => handleTech('CSS 3 - Frontend')}  />
              <TbBrandNextjs onClick={() => handleTech('Next - Fullstack')}/>
              <SiMongodb onClick={() => handleTech('MongoDB - Database')}  />
              <SiPostgresql onClick={() => handleTech('Postgres - Database')}  />
              <SiAmazonaws onClick={() => handleTech('AWS - Cloud')}  />
              <SiDocker onClick={() => handleTech('Docker - Infra/Cloud')}  />
              <SiFirebase onClick={() => handleTech('Firebase - Cloud')}  />
            </Content>
            <h3>{tech}</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2% 4%;
  margin: 100px 0;
  
  h3 {
    font-size: 2.6rem;
    color: ${(props) => props.theme.pink.hex};
    text-align: center;
  }

 @media screen and (max-width: 1024px) { 
 
  h1 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.4rem;
    text-align: center;
  }

}
`

const Content = styled.div`
  display: flex;
  width: 40%;
  height: 20vh;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;


  svg {
    color: ${(props) => props.theme.text.hex};
    font-size: 3.2rem;
    cursor: pointer;
    margin: 4px 6px;
  }

  svg:hover {
    color: ${(props) => props.theme.pink.hex};
  }

  @media screen and (max-width: 1024px) { 
    height: 60vh;
    width: 60%;
  }
`;