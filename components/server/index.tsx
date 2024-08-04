import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import FooterOne from "../layout/footers/FooterOne";
import HeaderTwo from "../layout/headers/header-2";
import ChoseAreaHomeOne from './../homes/home/ChoseAreaHomeOne';


const Server = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Servers"  title="Servers" />
                <ChoseAreaHomeOne />
                <PriceArea style={true} />
                <CoreFeatures />
                <TestimonailHomeOne style={true} />
            </main>
            <FooterOne />
            
        </>
    );
};

export default Server;