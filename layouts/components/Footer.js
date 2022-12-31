import styled from 'styled-components';
import { useThemes } from '../../contexts/ThemeContext';

export default function Footer() {
  const { handleChange } = useThemes();
  return (
    <Wrapper>
      <section>
        <span onClick={() => handleChange('frappe')}>frappe</span>
        <span onClick={() => handleChange('latte')}>latte</span>
        <span onClick={() => handleChange('macchiato')}>macchiato</span>
        <span onClick={() => handleChange('mocha')}>mocha</span>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.base.hex};
  box-shadow: 0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%);

  section {
    span {
      color: ${(props) => props.theme.pink.hex};
      margin: 0 10px;
      font-weight: 500;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 200ms linear;
    }

    span:hover {
      color: ${(props) => props.theme.overlay2.hex};
    }
  }

  @media screen and (max-width: 1024px) {
    section {
      span {
        font-size: 0.8rem;
      }
    }
  }
`;
