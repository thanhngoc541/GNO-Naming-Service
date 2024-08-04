import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import ContractArea from "./ContractArea";
import ContractServices from "./ContractServices";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Contact Us" title="About" />
        <GoogleMap />
        <ContractServices />
        <ContractArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Contact;
