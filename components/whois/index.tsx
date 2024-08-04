import React from 'react';
import HeaderTwo from '../layout/headers/header-2';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import FAQArea from '../affiliate/FAQArea';
import FaqContactForm from '../faq/FaqContactForm';
import FooterOne from '../layout/footers/FooterOne';

const Whois = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title='Whois'  title="Whois" />
                <FAQArea style={true} />
                <FaqContactForm />
            </main>
            <FooterOne />
        </>
    );
};

export default Whois;