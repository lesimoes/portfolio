import styled from 'styled-components';
import { useState } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { useThemes } from '../contexts/ThemeContext';
import Link from 'next/link'

export default function Menu() {
  const { handleChange } = useThemes();

  return (
    <Wrapper>
      <h2>lesimoes</h2>
      <section>
        <ul>
          <Link href="#about"><li>sobre</li></Link>
          <Link href="#skills"><li>skills</li></Link>
          <Link href="#hire"><li>freelance</li></Link>
        </ul>
      </section>

    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 2px ${(props) => props.theme.overlay2.hex};
  background-color: ${(props) => props.theme.crust.hex};
  justify-content: space-between;
  height: 80px;

  h2 {
    font-size: 1.4rem;
    cursor: pointer;
    transition: all linear 300ms;
  }

  h2:hover {
    color: ${(props) => props.theme.mauve.hex};
  }

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 8%;
  }
  li {
    padding: 4px 8px;
    color: ${(props) => props.theme.mauve.hex};
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
  }

  li:hover {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.mauve.hex};
    color: ${(props) => props.theme.crust.hex};
  }

  section {
    flex: 1;
    padding: 0 2%;
  }

@media screen and (max-width: 1024px) { 
 h2 {
  font-size: 1.3rem;
 }

 ul {
    gap: 1%;
 }

 li {
  font-size: 1rem;
 }
  
}

`;
