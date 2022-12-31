import styled from 'styled-components';

const data = [
  { id: 1, name: 'Merenda App', description: 'I am building a SaaS business - A delivery app focusing on regional restaurants with social media traffic data.', image: './projects/merenda_01.png' },
  {id: 2, name: 'SQS Huge Message', description: 'Open source project for dealing with "huge messages" (256kb) on AWS', image: 'https://raw.githubusercontent.com/lesimoes/sqs-huge-message/master/docs/receive.png'},
  {id: 3, name: 'COVID-MG', description: 'Open source project for fetch public data about covid and save on dynamo db.', image: 'https://raw.githubusercontent.com/lesimoes/RealTimeCovidMG/master/AWS%20Project.png'},
  
  {id: 5, name: 'AstroBook', description: 'React Native app to search and save books from Google Books.', image: 'https://github.com/lesimoes/astrobook/blob/main/pics/Screenshot_1665760975.png?raw=true'},
]


export default function Projects () {
  function handleClick(link) {
    window.open(link);
  }
    return (
        <Wrapper id="projects">
            <h1>Projects</h1>
        <Content>
          {data.map(({id, name, description, image}) => (
            <Project id={id}>
              <span>{name}</span>
              <img src={image} />
              <span>{description}</span>
            </Project>
          ))}
            </Content>
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

const Project = styled.div`
  width: 20vw;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  gap: 20px;
  box-shadow: 0 0 2px 0 rgb(145 158 171 / 20%), 0 12px 24px -4px rgb(145 158 171 / 12%);
  background-color: ${(props) => props.theme.surface0.hex};

  img {
    width: 60%;
    height: 70%;
    object-fit: contain;
  }

  > span:first-of-type {
    font-size: 1rem;
    font-weight: 500;
    color: ${(props) => props.theme.text.hex}
  }

  > span:last-of-type {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.2rem;
    color: ${(props) => props.theme.text.hex}
  }

  &:hover {
    transition: all 200ms linear;
    box-shadow: 0 0 2px 0 rgb(145 158 171 / 40%), 0 12px 24px -4px rgb(145 158 171 / 32%);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    width: 90vw;
    height: auto;
  }

`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;

    p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 400;
    }

   @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

`