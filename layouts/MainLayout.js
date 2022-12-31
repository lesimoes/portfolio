import Footer from './components/Footer';
import Menu from './components/Menu';
import styled from 'styled-components';
import Head from 'next/head';
export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'lesimoes'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;500;700&display=swap" rel="stylesheet" />

      </Head>
      <Menu />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.main`
  margin-top: 80px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;

`;
