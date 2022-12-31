import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MainLayout from '../../layouts/MainLayout';
import Hire from './components/Hire';

export default function Home() {
  return (
    <>
      <MainLayout>
        <Main />
        <Skills />
        <Projects />
        <Hire />
      </MainLayout>
    </>
  );
}
