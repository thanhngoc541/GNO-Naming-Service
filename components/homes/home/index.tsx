import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import DomainSearch from "./DomainSearchHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        {/* <ServicesHomeOne /> */}
        {/* <PricingHomeOne /> */}
        {/* <FAQHomeOne /> */}
        {/* <ChoseAreaHomeOne /> */}
        {/* <TestimonailHomeOne /> */}
        {/* <NewsFeedHomeOne /> */}
        {/* <BrandHomeOne /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
