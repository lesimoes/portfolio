import GlobalStyle from '../styles/globalStyle';
import Principal from '../components/Principal';
import Projects from '../components/Projects';
import About from '../components/About';
import Papper from '../components/Papper';

export default function Home() {
  return (
    <>
    <GlobalStyle />
    <title>lesimoes</title>
    <Principal></Principal>
    <Projects></Projects>
    <About></About>
    <Papper></Papper>
    </>
        
  )
}
