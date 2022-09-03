import styled from 'styled-components';
import { FiGithub, FiYoutube, FiLinkedin, FiMail } from 'react-icons/fi';
import Profile from './Profile';


export default function Main() {
  

  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      <Wrapper id="about">
        <Profile />
          <section>
            <h1>Um pouco sobre mim...</h1>
            <p>
              <strong>E ai, belezinha?</strong> Meu nome é Leandro mas você pode me chamar de <strong>Le</strong>, sou programador, professor e mestre em ciência da computação.
            </p>
            <p>
              Tenho trabalhado nos últimos 6 anos como programador ou tech lead remoto para empresas de São Paulo, em projetos para grandes empresas nacionais. Como tenho trabalhado no últimos 4 anos em universidades e bootcamps ensinando centenas de pessoas. 
            </p>
            <p>
              Você pode conferir meu conteúdo no Linkedin e Youtube onde falo sobre conceitos avançados de Reactjs.
            </p>
            <Content>
              <FiLinkedin
                onClick={() => handleClick('https://www.linkedin.com/in/lesimoess/')}
              />
              <FiYoutube
                onClick={() =>
                  handleClick('https://www.youtube.com/c/lesimoes?sub_confirmation=1')
                }
              />
              <FiGithub onClick={() => handleClick('https://github.com/lesimoes')} />
              <FiMail onClick={() => handleClick('mailto:lesimoes0@gmail.com')} />
            </Content>
        </section>

      </Wrapper>
      

    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  padding: 2% 4%;


  section {
    padding: 2% 4%;


    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 400;
    }
  }
  strong {
    color: ${(props) => props.theme.pink.hex};
  }

  button {
    width: 200px;
    height: 42px;
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.subtext1.hex};
    background-color: ${(props) => props.theme.base.hex};
    border: 1px solid ${(props) => props.theme.subtext1.hex};
    cursor: pointer;
  }

  button:hover {
    filter: brightness(120%);
  }

  @media screen and (max-width: 1024px) { 
      flex-direction: column;
      padding: 2% 2%;
    }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  justify-content: space-around;
  align-items: center;
  
  svg {
    color: ${(props) => props.theme.text.hex};
    font-size: 2rem;
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.pink.hex};
  }
`;

