import styled from 'styled-components';
import { FiGithub, FiYoutube, FiLinkedin, FiMail } from 'react-icons/fi';
import Profile from '../../../components/Profile';

export default function Main() {
  function handleClick(link) {
    window.open(link);
  }
  return (
    <>
      <Wrapper id="about">
        <Profile />
        <section>
          <h1>A little bit about me</h1>
          <p>
            <strong>Hello there 👋!</strong> I'm Leandro, but you can call me just <strong>Le</strong>, full stack web developer. I'm specialize in building valuable software products for a thousands of users.
          </p>
          <p>
            I have been work as <strong>web developer and tech lead</strong> for the last decade in start ups and worked on a lot of projects from scratch to launch, some of then with millions requests per day.</p>
          <p>
            I have a <strong>master degree (MsC)</strong> in computer science and worked for 5 years as assistant professor and published some papers about software engineering.
          </p>
          <p>
            If you speak Portuguese you can see me on youtube when I talk about <strong>React advanced concepts.</strong>
          </p>
          <Content>
            <FiLinkedin
              onClick={() =>
                handleClick('https://www.linkedin.com/in/lesimoess/')
              }
            />
            <FiYoutube
              onClick={() =>
                handleClick(
                  'https://www.youtube.com/c/lesimoes?sub_confirmation=1'
                )
              }
            />
            <FiGithub
              onClick={() => handleClick('https://github.com/lesimoes')}
            />
            <FiMail onClick={() => handleClick('mailto:lesimoes0@gmail.com')} />
          </Content>
        </section>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
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
