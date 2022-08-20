import Main from '../../components/Main';
import { ThemesProvider } from '../../contexts/ThemeContext';

export default function Home() {
  return (
    <>
      <ThemesProvider>
        <Main />
      </ThemesProvider>
    </>
  );
}
