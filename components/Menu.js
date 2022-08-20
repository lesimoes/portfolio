import styled from 'styled-components';
import { useState } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { useThemes } from '../contexts/ThemeContext';

export default function Menu() {
  const { handleChange } = useThemes();

  return (
    <Wrapper>
      <ul>
        <li>devteam</li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  box-shadow: 1px 1px 2px ${(props) => props.theme.overlay2.hex};
  background-color: ${(props) => props.theme.crust.hex};

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 4%;
  }
  li {
    color: ${(props) => props.theme.mauve.hex};
    font-size: 24px;
    font-weight: bold;
  }

  svg {
    color: ${(props) => props.theme.pink.hex};
    font-size: 1.8rem;
  }
  section {
    span {
      color: ${(props) => props.theme.pink.hex};
      margin: 0 10px;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`;
