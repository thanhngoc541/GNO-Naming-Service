
import React from 'react';
import HeaderTwo from '../layout/headers/header-2';
import Breadcrumb from '../common/breadcrumbs/breadcrumb';
import RegisterArea from './RegisterArea';

const Register = () => {
    return (
        <>
            <HeaderTwo style={true} />
            <main>
                <Breadcrumb top_title="Register" title="Register" />
                <RegisterArea />
            </main>
        </>
    );
};

export default Register;