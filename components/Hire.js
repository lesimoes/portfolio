import styled from 'styled-components';

export default function Hire () {
  function handleClick(link) {
    window.open(link);
  }
    return (
        <Wrapper id="hire">
            <h1>Freelance</h1>
            <Content>
                <p>Durante minha jornada trabalhei em grades projetos como arquiteto e tech lead, isso me possibilitou entender as necessidades do negócio e traduzi-las em código. Iniciei muitos projetos do zero, da concepção da ideia, passando pela arquitetura e infra, até a entrega para o cliente final.</p>
                <p>
                    Se você precisa tirar sua ideia do papel entre em contato!
                </p>

            </Content>
            <button onClick={() => handleClick('mailto:lesimoes0@gmail.com')}>Entrar em contato!</button>
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
`

const Content = styled.div`
    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 400;
    }

 

`