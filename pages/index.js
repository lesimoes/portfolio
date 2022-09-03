import Dev from '../components/Dev';
import Main from '../components/Main';
import { ThemesProvider } from '../contexts/ThemeContext';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Hire from '../components/Hire';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <ThemesProvider>
        <Head>
          <title>lesimoes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Menu />
        <Main />
        <Skills />
        <Hire />
        <Footer />
      </ThemesProvider>
    </>
  );
}
