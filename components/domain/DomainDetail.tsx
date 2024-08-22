
// ExampleComponent.js
'use client';

import { useParams } from 'next/navigation';
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import { useEffect, useState } from 'react';
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import RegisterPopupModal from '../modals/register-popup';


// pages/profile.tsx
const DomainDetail = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
    }
    const params = useParams();
    const [address, setAddress] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const { domain } = params;
    const provider = new GnoJSONRPCProvider('https://chain.gnovar.site/');
    const extractAddressFromRecordString = (recordString: any) => {
        const addressRegex = /\("([^"]+)" std\.Address\)/;

        const match = recordString.match(addressRegex);

        if (match && match[1]) {
            return match[1];
        }
        return null;
    };
    console.log('Extracted Address:', address);
    useEffect(() => {
        const fetchDomainDetails = async () => {
            try {
                const result = await provider.evaluateExpression('gno.land/r/demo/domain/resolver', `Resolve("${domain}")`);
                console.log(result);
                const address = extractAddressFromRecordString(result);
                console.log(address);
                if (address) {
                    setAddress(address);
                    setRegistered(true);
                }
                else {
                    setAddress("The domain is not registered yet");
                }
            } catch (error) {
                console.error('Failed to fetch domain details:', error);
            }
        };

        fetchDomainDetails();
    }, [domain]);
    return (
        <>
            <RegisterPopupModal domain={domain.toString()} show={showModal} handleClose={handleClose} />
            <main>
                <section
                    className="breadcrumb-area domain-header"
                    style={{ backgroundImage: `url(/assets/img/bg/contractbg.jpg)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb-text text-center">
                                    <div className="text-center mb-4">
                                        <img
                                            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" // Replace with the actual path
                                            alt="Profile"
                                            className="rounded-circle border border-2 border-primary"
                                            style={{ width: '200px', height: '200px' }}
                                        />
                                    </div>
                                    <h2 className="mt-3 text-primary">Domain: {domain}</h2>

                                    <p>{!isRegistered || "Owner Address:"} {address}</p>

                                    {isRegistered || <a href="#" className="btn btn-2" onClick={handleShow}>Register for {domain}</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterOne />


        </>
    );
};

export default DomainDetail;
