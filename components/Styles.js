import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

const Warning = styled.div`
  background-color: ${(props) => `${props.theme.yellow.hex}50`};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 80%;
  margin: 0 auto;
  padding: 2px;
  color: ${(props) => props.theme.subtext0.hex};

  h3 {
    font-size: 1.2rem;
    color: ${(props) => props.theme.text.hex};
  }
`;

export { Title, Warning };
