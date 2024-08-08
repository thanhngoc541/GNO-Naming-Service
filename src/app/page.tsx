import HomeOne from "../../components/homes/home";
import ScrollToTop from "../../components/hooks/scroll-to-top";
import { AdenaWalletProvider } from "../../components/hooks/use-adena-wallet";

const Home = () => {
  return (
    <>
      <HomeOne />
      <ScrollToTop />
    </>
  );
};

export default Home;