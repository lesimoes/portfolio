import styled from 'styled-components';
import {
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiMail,
  FiCoffee,
} from 'react-icons/fi';
import { useThemes } from '../contexts/ThemeContext';

import Menu from './Menu';

export default function Dev() {
  const { handleChange } = useThemes();

  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      <Menu />
      <Content>
        <section>
          <p>qualquer bosta escrito aqui, ninguém lê mesmo</p>
        </section>
      </Content>
      <Tecs>
        <section>
          <Card color="base">
            <img src={'./logos/nodejs.png'} />
          </Card>
          <Card>
            <img src={'./logos/react.png'} />
          </Card>
        </section>
        <p>qualquer bosta escrito aqui, ninguém lê mesmo</p>
      </Tecs>

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
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 60vh;

  justify-content: space-around;
  align-items: center;
  width: 100%;

  p {
    font-size: 28px;
  }
  svg {
    color: ${(props) => props.theme.text.hex};
    font-size: 2.4rem;
  }
`;

const Tecs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 40px;
  flex-direction: row;

  section {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background-color: ${(props) =>
    props.color === 'base' ? props.theme.base.hex : props.theme.mantle.hex};
  border-radius: 2px;
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
