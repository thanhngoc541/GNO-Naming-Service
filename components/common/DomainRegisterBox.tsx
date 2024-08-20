'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';

const DomainRegisterBox = ({ style }: any) => {
    const { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract } = useAdenaWallet();
    const router = useRouter();
    const [url, setUrl] = useState('');
    let gnoUrl: string;
    const provider = new GnoJSONRPCProvider('https://chain.gnovar.site/');
    const handleInputChange = (e: any) => {
        setUrl(e.target.value);
    };
    const extractAddressFromRecordString = (recordString: any) => {
        const addressRegex = /\("([^"]+)" std\.Address\)/;

        const match = recordString.match(addressRegex);

        if (match && match[1]) {
            return match[1];
        }
        return null;
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (url) {
            gnoUrl = url;
            if (url.slice(url.length - 4, url.length) != ".gno") gnoUrl = url + '.gno';
            const resolverResult = await provider.evaluateExpression('gno.land/r/demo/domain/resolver', `Resolve("${gnoUrl}")`);
            console.log(resolverResult);
            const address = extractAddressFromRecordString(resolverResult);
            if (address) {
                alert(`Domain ${gnoUrl} already registered!`);
                setUrl('');
            }
            else {
                await handleApproveContract();
                handleSendCallContract();
            }
        } else {
            alert('Please enter a valid domain');
        }
    };
    const handleSendCallContract = async () => {
        if (!account) await connect();
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    'gno.land/r/demo/domain/registrar', // Gnoland package path
                    'Register', // Function name
                    [gnoUrl.toString()], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Transaction successful:', result);
                if (result.status === 'success') {
                    alert(`Register for domain ${gnoUrl} success!`);
                }
                else {
                    alert(`Register for domain ${gnoUrl} failed!`);
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${gnoUrl} failed!`);
            }
            setUrl('');
        }
    };
    const handleApproveContract = async () => {
        if (!account) await connect();
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    'gno.land/r/demo/domain/vmt', // Gnoland package path
                    'Approve', // Function name
                    ["g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4", "10"], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Approve successful:', result);
                if (result.status === 'success') {
                    alert(`Approve for contract g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4 success!`);
                }
                else {
                    alert(`Approve for contract g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4 failed!`);
                }
            } catch (error) {
                console.error('Approve failed:', error);
                alert(`Approve for contract g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4 failed!`);
            }
            setUrl('');
        }
    };
    return (
        <>
            <section className={`${style && "domain-search-section"}`}>
                <div className={`${style && "container"}`}>
                    <div className={`${style && "domain-box"}`}>
                        <div className="row">
                            <div className="col-xl-12 offset-xl-0">
                                <div className=" domain-search domain-register">
                                    <div className="position-relative">
                                        <form onSubmit={handleSubmit}>
                                            <input value={url}
                                                onChange={handleInputChange} type="text" placeholder="Register for names you like..." />

                                            <button type="submit" className="btn btn-2">Register</button>
                                            <div className="domain-select">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DomainRegisterBox;