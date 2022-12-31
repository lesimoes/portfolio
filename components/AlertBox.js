import styled from 'styled-components';
import { TbAlertCircle } from 'react-icons/tb';
export default function AlertBox({ children, title, type }) {
  return (
    <Wrapper>
      <TbAlertCircle />
      <h3>{title}</h3>
      <section>{children}</section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => `${props.theme.yellow.hex}80`};
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
