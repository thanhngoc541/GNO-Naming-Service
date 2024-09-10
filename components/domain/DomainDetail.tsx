
// ExampleComponent.js
'use client';

import { useParams } from 'next/navigation';
import FooterOne from "../layout/footers/FooterOne";
import HeaderOne from "../layout/headers/header";
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import { useEffect, useState } from 'react';
import { useAdenaWallet } from '../hooks/use-adena-wallet';


// pages/profile.tsx
const DomainDetail = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract } = useAdenaWallet();
    const params = useParams();
    const [address, setAddress] = useState('');
    const [isRegistered, setRegistered] = useState(false);
    const { domain } = params;
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
    const extractAddressFromRecordString = (recordString: any) => {
        const addressRegex = /\("([^"]+)" std\.Address\)/;

        const match = recordString.match(addressRegex);

        if (match && match[1]) {
            return match[1];
        }
        return null;
    };
    const handleRegistrar = async (domain: string) => {
        if (!account) await connect();
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    "100ugnot",
                    'gno.land/r/varmeta/demo/v1/domain/registrar', // Gnoland package path
                    'Register', // Function name
                    [domain, "gnot"], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Transaction successful:', result);
                if (result.status === 'success') {
                    alert(`Register for domain ${domain} success!`);
                } else {
                    alert(`Register for domain ${domain} failed!`);
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${domain} failed!`);
            }
        }
    };
    useEffect(() => {
        const fetchDomainDetails = async () => {
            try {
                const result = await provider.evaluateExpression('gno.land/r/varmeta/demo/v1/domain/resolver', `Resolve("${domain}")`);
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
    }, [domain, provider]);
    return (
        <>
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

                                    {isRegistered || <a href="#" className="btn btn-2" onClick={() => { handleRegistrar(domain.toString()) }}>Register for {domain}</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <FooterOne />


        </>
    );
};

export default DomainDetail;
