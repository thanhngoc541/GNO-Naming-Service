import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import OurOfficeArea from "./OurOfficeArea";
import TeamArea from "./TeamArea";

const Team = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Team Member"  title="Team"  />
                <TeamArea />
                <OurOfficeArea />
            </main>
            <FooterOne />
        </>
    );
};

export default Team;