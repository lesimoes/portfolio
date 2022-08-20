import styled from 'styled-components';
import { FiGithub, FiYoutube, FiLinkedin, FiMail } from 'react-icons/fi';
import { useThemes } from '../contexts/ThemeContext';
import Profile from './Profile';

export default function Main() {
  const { handleChange } = useThemes();

  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      <Header>
        <Profile />
        <h1>lesimoes</h1>
        <h2>
          Engenheiro de Software, Professor e Mestre em Ciência da Computação
        </h2>
        <p>
          Liderando a equipe <strong>devteam</strong> com devs apaixonados por
          tecnologia. Damos vida a sua ideia com entregas rápidas e tecnologias
          consolidadas como <strong>nodejs</strong>, <strong>reactjs</strong>,{' '}
          <strong>aws</strong>, <strong>mongodb</strong>,{' '}
          <strong>firebase</strong>, <strong>postgresql</strong>.
        </p>
        <button onClick={() => handleClick('mailto:lesimoes0@gmail.com')}>
          Entre em contato
        </button>
      </Header>
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
      <Footer>
        <section>
          <span onClick={() => handleChange('frappe')}>frappe</span>
          <span onClick={() => handleChange('latte')}>latte</span>
          <span onClick={() => handleChange('macchiato')}>macchiato</span>
          <span onClick={() => handleChange('mocha')}>mocha</span>
        </section>
      </Footer>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  h1 {
    color: ${(props) => props.theme.mauve.hex};
    font-weight: bold;
    font-size: 2rem;
  }

  h2 {
    color: ${(props) => props.theme.subtext1.hex};
    font-size: 1rem;
    padding: 0 20px;
    text-align: center;
  }

  p {
    font-size: 28px;
    text-align: center;
    padding: 2% 10%;
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
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  justify-content: space-around;
  align-items: center;
  svg {
    color: ${(props) => props.theme.text.hex};
    font-size: 2.4rem;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;

  section {
    span {
      color: ${(props) => props.theme.pink.hex};
      margin: 0 10px;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
