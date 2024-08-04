import FAQArea from "../affiliate/FAQArea";
import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FaqContactForm from "../faq/FaqContactForm";
import HeaderTwo from "../layout/headers/header-2";
import FooterOne from './../layout/footers/FooterOne';

const Support = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Support"  title="Support" />
                <FAQArea style={true} />
                <FaqContactForm />
            </main>
            <FooterOne />
        </>
    );
};

export default Support;