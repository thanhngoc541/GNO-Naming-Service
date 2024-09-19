import FooterOne from "../../layout/footers/FooterOne";
import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";

const HomeOne = () => {
  console.log("render home one");
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
