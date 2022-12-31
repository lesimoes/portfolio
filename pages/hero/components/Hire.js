import styled from 'styled-components';
import { FiGithub, FiYoutube, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hire() {
  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      <Wrapper id="hire">
        <h1>Hire me</h1>
        <section>
          <p>
            I'm looking to partner businesses to provide them most valuable software product.
          </p>
          <p>
            <strong>Feel free to reach me through linkedin message or email.</strong>
          </p>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2% 4%;

  section {
    padding: 2% 4%;

    p {
      font-size: 1.1rem;
      line-height: 1.6rem;
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
    font-size: 1.6rem;
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.pink.hex};
  }
`;
