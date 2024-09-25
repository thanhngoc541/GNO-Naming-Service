'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';

interface CommitPopupModalProps {
    domain: string;
    show: boolean;
    step: string;
    handleClose: () => void;
}

const CommitPopupModal: React.FC<CommitPopupModalProps> = ({ domain, show, step, handleClose }) => {
    const [isClient, setIsClient] = useState(false);
    const { account, connect, sendCallContract } = useAdenaWallet();
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
    const [secret, setSecret] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // New state for the checkbox

    useEffect(() => {
        setIsClient(true);
    }, []);

    const hashString = async (input: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };

    let modifiedDomain = domain;
    if (!modifiedDomain.endsWith('.gno')) {
        modifiedDomain = `${modifiedDomain}.gno`;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!account) await connect();

        if (account) {
            try {
                setIsLoading(true);
                let modifiedDomain = domain;
                if (!modifiedDomain.endsWith('.gno')) {
                    modifiedDomain = `${modifiedDomain}.gno`;
                }

                const tempJoinString = secret + price;
                const hashedString = await hashString(tempJoinString);

                let result;
                if (step === '1') {
                    result = await sendCallContract(
                        account.address,
                        '100ugnot',
                        'gno.land/r/varmeta/demo/v39/domain/registrar',
                        'CommitHash',
                        [modifiedDomain, hashedString],
                        1,
                        10000000
                    );
                } else {
                    result = await sendCallContract(
                        account.address,
                        '100ugnot',
                        'gno.land/r/varmeta/demo/v39/domain/registrar',
                        'CommitPrice',
                        [price, secret, modifiedDomain],
                        1,
                        10000000
                    );
                }

                if (result.status === 'success') {
                    alert(`Register for domain ${modifiedDomain} success!`);
                } else {
                    alert(`Register for domain ${modifiedDomain} failed!`);
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${modifiedDomain} failed!`);
            } finally {
                setIsLoading(false);
                handleClose(); // Close modal after submission
            }
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isClient) return null;

    return ReactDOM.createPortal(
        <>
            <div className={`modal-backdrop fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}></div>
            <div
                onClick={handleBackdropClick}
                className={`modal fade ${show ? 'show custom-fade-in' : 'custom-fade-out'}`}
                style={{ display: show ? 'block' : 'none' }}
                tabIndex={-1}
            >
                <div
                    className="modal-dialog"
                    style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1050 }}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{step === '1' ? "Add your bidding" : "Commit secret and price"}</h4>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-4">
                                    <label htmlFor="secret" className="form-label fw-bold">Secret</label>
                                    <input
                                        type="text"
                                        id="secret"
                                        className="form-control custom-input"
                                        placeholder="Enter your secret key"
                                        value={secret}
                                        onChange={(e) => setSecret(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="price" className="form-label fw-bold">Price (in Gnot)</label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="form-control custom-input"
                                        placeholder="Enter your price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Add checkbox here */}
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="confirmCheck"
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="confirmCheck">
                                        I understand that I need to save the secret and price now, as I will need them to submit in the next step.
                                    </label>
                                </div>
                                <div className="modal-footer d-flex justify-content-between" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <button
                                        type="button"
                                        style={{ padding: '19px 30px' }}
                                        className="btn btn-secondary flex-fill me-2"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        style={{ padding: '19px 30px' }}
                                        className="btn btn-primary flex-fill"
                                        disabled={!isChecked || isLoading}
                                    >
                                        {isLoading ? 'Processing...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default CommitPopupModal;
