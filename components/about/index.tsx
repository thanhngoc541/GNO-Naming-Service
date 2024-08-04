
import React from 'react';
import HeaderTwo from './../layout/headers/header-2';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import AboutUsArea from './AboutUsArea';
import CoreFeaturesHomeThree from '../homes/home-3/CoreFeaturesHomeThree';
import OurTeam from './OurTeam';
import OurFaqArea from './OurFaqArea';
import FooterOne from '../layout/footers/FooterOne';

const About = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="About Us"  title='About' />
                <AboutUsArea />
                <CoreFeaturesHomeThree style={true} />
                <OurTeam />
                <OurFaqArea />
            </main>
            <FooterOne />
        </>
    );
};

export default About;