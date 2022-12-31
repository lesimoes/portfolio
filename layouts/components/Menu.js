import styled from 'styled-components';
import Link from 'next/link';

export default function Menu({ title, links }) {
  return (
    <Wrapper>
      <h2>lesimoes</h2>
      <section>
        <ul>
          <Link href="/#about">
            <li>about</li>
          </Link>
          <Link href="/#skills">
            <li>skills</li>
          </Link>
          <Link href="/#projects">
            <li>projects</li>
          </Link>
          <Link href="/#hire">
            <li>hire me</li>
          </Link>
        </ul>
      </section>
      {links}
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
  background-color: ${(props) => props.theme.crust.hex};
  justify-content: space-between;
  height: 80px;
  flex: 1;
  box-shadow: 0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%);

  h2 {
    color: ${(props) => props.theme.mauve.hex};
    font-size: 1rem;
    cursor: pointer;
    transition: all linear 200ms;
  }

  h2:hover {
    color: ${(props) => props.theme.overlay2.hex};
  }
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 2%;
  }

  li {
    padding: 4px 8px;
    color: ${(props) => props.theme.mauve.hex};
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms linear;
  }

  li:hover {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.mauve.hex};
    color: ${(props) => props.theme.crust.hex};
  }

  section {
    flex: 1;
    padding: 0 1%;
  }

  @media screen and (max-width: 1024px) {
    h2 {
      display: none;
    }

    li {
      font-size: 0.9rem;
    }
  }
`;
