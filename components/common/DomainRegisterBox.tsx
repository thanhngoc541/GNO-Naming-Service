'use client';

import { useState, useCallback } from 'react';
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import CommitPopupModal from '../modals/commit-popup';

const DomainRegisterBox = ({ style, onRegisterSuccess }: any) => {
    const [action, setAction] = useState<string>('');
    const { isConnected, account, connect } = useAdenaWallet();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('');
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
    const handleShow = useCallback(() => setShowModal(true), []);
    const handleClose = useCallback(() => {
        setUrl('');
        setShowModal(false);
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }, []);

    const extractStringBetweenQuotes = useCallback((text: string) => {
        const regex = /"(.*?)"/;
        const result = text.match(regex);
        return result ? result[1] : null;
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!account) await connect();

        if (account && url) {
            let gnoUrl = url.endsWith('.gno') ? url : `${url}.gno`;

            try {
                const resolverResult = await provider.evaluateExpression(
                    'gno.land/r/varmeta/demo/v403/domain/registrar',
                    `GetCurrentStatus("${gnoUrl}","${account.address}")`
                );
                const status = extractStringBetweenQuotes(resolverResult);
                alert(status);

                if (status === 'domain name is free' || status === 'hash' || status === 'new auction') {
                    setAction('commitHash');
                    handleShow();
                } else if (status === 'price') {
                    setAction('commitPrice');
                    handleShow();
                }
            } catch (error) {
                console.error('Error fetching domain status:', error);
            }
        } else {
            alert('Please enter a valid domain');
        }
    }, [account, url, connect, provider, extractStringBetweenQuotes, handleShow]);

    return (
        <>
            <CommitPopupModal action={action} domain={url} show={showModal} handleClose={handleClose} onSubmitSuccess={onRegisterSuccess} />
            <section className={`${style && 'domain-search-section'}`}>
                <div className={`${style && 'container'}`}>
                    <div className={`${style && 'domain-box'}`}>
                        <div className="row">
                            <div className="col-xl-12 offset-xl-0">
                                <div className="domain-search domain-register">
                                    <div className="position-relative">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                onChange={handleInputChange}
                                                value={url}
                                                type="text"
                                                placeholder="Register for names you like..."
                                            />
                                            <button type="submit" className="btn btn-2">
                                                Start
                                            </button>
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
