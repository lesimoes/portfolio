import { ThemesProvider } from '../contexts/ThemeContext';
function MyApp({ Component, pageProps }) {
  return (
    <ThemesProvider>
      <Component {...pageProps} />
    </ThemesProvider>
  );
}

export default MyApp;
