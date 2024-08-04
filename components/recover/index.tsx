import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import RecoverArea from "./RecoverArea";


const Recover = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Recover" title="Recover" />
                <RecoverArea />
            </main>
            <FooterOne />
        </>
    );
};

export default Recover;