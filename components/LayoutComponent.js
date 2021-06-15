import Head from "next/head";
import { useRouter } from "next/router";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import Hero from "./Hero";

const LayoutComponent = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EPC9HP0BFB"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-EPC9HP0BFB');
        </script>
      </Head>

      <HeaderComponent />

      {router.pathname === "/" && <Hero />}

      <div>{children}</div>

      <FooterComponent />
    </>
  );
};

export default LayoutComponent;

LayoutComponent.defaultProps = {
  title: "Stoclue | Acchi wali financial advise",
  description: "Find the clue of investing in market",
  keywords: "stock, crypto, finance, investing",
};
