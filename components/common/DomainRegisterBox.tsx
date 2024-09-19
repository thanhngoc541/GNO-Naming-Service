'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import CommitPopupModal from '../modals/commit-popup';

const DomainRegisterBox = ({ style }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract } = useAdenaWallet();
    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setUrl('')
        setShowModal(false);
    }
    console.log("account", account)
    const [url, setUrl] = useState('');
    let gnoUrl: string = url;
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
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
            const resolverResult = await provider.evaluateExpression('gno.land/r/varmeta/demo/v3/domain/resolver', `Resolve("${gnoUrl}")`);
            console.log(resolverResult);
            const address = extractAddressFromRecordString(resolverResult);
            if (address) {
                alert(`Domain ${gnoUrl} already registered!`);
                setUrl('');
            }
            else {
                console.log("handleRegistrar")
                handleRegistrar(gnoUrl)
            }
        } else {
            alert('Please enter a valid domain');
        }
    };


    const handleRegistrar = async (domain: string) => {
        if (!account) await connect();
        if (account) {
            try {
                handleShow();

                // const result = await sendCallContract(
                //     account.address,
                //     "",
                //     'gno.land/r/varmeta/demo/v2/domain/registrar', // Gnoland package path
                //     'RegisterDomain', // Function name
                //     [domain], // Arguments
                //     1, // gasFee
                //     10000000 // gasWanted
                // );
                // console.log('Transaction successful:', result);

                // if (result.status === 'success') {
                //     alert(`Register for domain ${domain} success!`);
                // } else {
                //     alert(`Register for domain ${domain} failed!`);
                // }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${domain} failed!`);
            }
        }
    };
    return (
        <>
            <CommitPopupModal domain={url} show={showModal} handleClose={handleClose} />
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
                                            <button type="submit" className="btn btn-2">Register / Commit Price</button>
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