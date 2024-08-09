// pages/profile.tsx
import Link from 'next/link';
import React from 'react';
import AboutUsArea from '../../../../components/about/AboutUsArea';
import OurFaqArea from '../../../../components/about/OurFaqArea';
import OurTeam from '../../../../components/about/OurTeam';
import Breadcrumb from '../../../../components/common/breadcrumbs/breadcrumb';
import CoreFeaturesHomeThree from '../../../../components/homes/home-3/CoreFeaturesHomeThree';
import FooterOne from '../../../../components/layout/footers/FooterOne';
import HeaderTwo from '../../../../components/layout/headers/header-2';
import HeaderOne from '../../../../components/layout/headers/header';
import DomainDetail from '../../../../components/domain/DomainDetail';
const Profile = () => {
    return (
        <>
            <HeaderOne />
            <DomainDetail></DomainDetail>
        </>
    );
};

export default Profile;
