import Head from 'next/head';
import { useRouter } from 'next/router';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import Hero from './Hero';

const LayoutComponent = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <HeaderComponent />

      {router.pathname === '/' && <Hero />}

      <div>{children}</div>

      <FooterComponent />
    </>
  );
};

export default LayoutComponent;

LayoutComponent.defaultProps = {
  title: 'Stoclue | Research Ours - Growth Yours',
  description: 'Find the clue of investing in market',
  keywords: 'stockmarket, crypto, finance, investing',
};
