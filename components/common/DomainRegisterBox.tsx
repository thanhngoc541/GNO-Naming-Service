'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import RegisterPopupModal from '../modals/register-popup';

const DomainRegisterBox = ({ style }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => {
        setUrl('')
        setShowModal(false);
    }
    const [url, setUrl] = useState('');
    let gnoUrl: string = url;
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
                handleShow();
            }
        } else {
            alert('Please enter a valid domain');
        }
    };
    return (
        <>
            <RegisterPopupModal domain={url} show={showModal} handleClose={handleClose} />
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