import Main from './components/Main';
import Skills from './components/Skills';
import Hire from './components/Hire';
import MainLayout from '../../layouts/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <Main />
        <Skills />
        <Hire />
      </MainLayout>
    </>
  );
}
