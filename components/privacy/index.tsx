import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import PrivacyArea from "./PrivacyArea";


const Privacy = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Privacy & Policy"  title="Privacy & Policy"  />
                <PrivacyArea />
            </main>
            <FooterOne />
        </>
    );
};

export default Privacy;