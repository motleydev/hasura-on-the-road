import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import Footer from "../components/Footer";
import SignupPanel from "../components/SignupPanel";

type DynamicProps = {
  isListing?: boolean;
};

function MyApp({ Component, pageProps }: AppProps<DynamicProps>) {
  const isIndex = !!pageProps?.isListing;
  return (
    <div className="relative overflow-hidden">
      <Header isIndex={isIndex} />
      <Component {...pageProps} />
      <Footer />
      <SignupPanel />
    </div>
  );
}

export default MyApp;
