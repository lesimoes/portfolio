import Footer from '../components/Footer';
import Menu from '../components/Menu';
import styled from 'styled-components';
import Head from 'next/head';
export default function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'lesimoes'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
`;
