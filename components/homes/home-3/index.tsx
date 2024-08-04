import HeaderThree from "../../layout/headers/header-3";
import HeroHomeThree from "./HeroHomeThree"; 
import DomainSearchHomeTwo from "../home-2/DomainSearchHomeTwo";
import CoreFeaturesHomeThree from "./CoreFeaturesHomeThree";
import SubscriptinHomeThree from "./SubscriptinHomeThree";
import ServicesHomeOne from "../home/ServicesHomeOne";
import PricingHomeTwo from "../home-2/PricingHomeTwo";
import IntegrationsHomeThree from "./IntegrationsHomeThree";
import TestimonailHomeOne from "../home/TestimonailHomeOne";
import NewsFeedHomeOne from "../home/NewsFeedHomeOne";
import BrandHomeOne from "../home/BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";

const HomeThree = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <HeroHomeThree />
        <DomainSearchHomeTwo />
        <CoreFeaturesHomeThree />
        <SubscriptinHomeThree />
        <ServicesHomeOne />
        <PricingHomeTwo />
        <IntegrationsHomeThree />
        <TestimonailHomeOne />
        <NewsFeedHomeOne />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeThree;
