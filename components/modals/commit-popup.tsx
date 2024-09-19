'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
interface CommitPopupModalProps {
    domain: string;
    show: boolean;
    handleClose: () => void;
}

const CommitPopupModal: React.FC<CommitPopupModalProps> = ({ domain, show, handleClose }) => {
    const [isClient, setIsClient] = useState(false);
    const { account, connect, sendCallContract } = useAdenaWallet();
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
    // Form states
    const [secret, setSecret] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures the document is defined
    }, []);

    const hashString = async (input: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        // Convert hash to hex string
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    let modifiedDomain = domain;
    if (!modifiedDomain.endsWith('.gno')) {
        modifiedDomain = `${modifiedDomain}.gno`;
    }

    const extractSpecificNumbers = (str: string) => {
        const numbers = str.match(/\b[1-3]\b/g);
        return numbers ? numbers.map(Number) : []; // Convert matched results to integers
    }



    // Handle form submission logic
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent page refresh on form submit
        console.log(secret, price)

        // Ensure wallet is connected
        if (!account) await connect();

        if (account) {
            try {
                setIsLoading(true); // Show loading state
                console.log("RegisterDomain", domain)
                let modifiedDomain = domain;
                if (!modifiedDomain.endsWith('.gno')) {
                    modifiedDomain = `${modifiedDomain}.gno`;
                }
                console.log(provider)
                const resolverResult = await provider.evaluateExpression('gno.land/r/varmeta/demo/v3/domain/registrar', `RegisterDomain("${modifiedDomain}")`);
                console.log("RegisterDomain result", resolverResult);
                const extractedNumbers = extractSpecificNumbers(resolverResult);
                if (extractedNumbers[0] != 3) {
                    // Concatenate secret and price
                    const tempJoinString = secret + price;
                    console.log('Joined string:', tempJoinString);

                    // Compute SHA-256 hash using js-sha256
                    const hashedString = await hashString(tempJoinString);
                    console.log('Hashed string:', hashedString);
                    // Call the contract to register the domain
                    let result;
                    if (extractedNumbers[0] === 1) {
                        console.log("CommitHash")
                        result = await sendCallContract(
                            account.address,
                            '100ugnot',
                            'gno.land/r/varmeta/demo/v3/domain/registrar',
                            'CommitHash',
                            [modifiedDomain, hashedString], // Pass domain and joined string (secret + price)
                            1, // gasFee
                            10000000 // gasWanted
                        );
                    } else {
                        console.log("CommitPrice")
                        result = await sendCallContract(
                            account.address,
                            '100ugnot',
                            'gno.land/r/varmeta/demo/v3/domain/registrar',
                            'CommitPrice',
                            [price, secret, modifiedDomain], // Pass domain and joined string (secret + price)
                            1, // gasFee
                            10000000 // gasWanted
                        );
                    }

                    console.log('Transaction successful:', result);
                    if (result.status === 'success') {
                        alert(`Register for domain ${modifiedDomain} success!`);
                    } else {
                        alert(`Register for domain ${modifiedDomain} failed!`);
                    }
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${modifiedDomain} failed!`);
            } finally {
                setIsLoading(false); // Hide loading state
                handleClose(); // Close modal after submission
            }
        }
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isClient) return null; // Avoid rendering on the server-side

    return ReactDOM.createPortal(
        <>
            <div
                className={`modal-backdrop fade ${show ? 'show' : ''}`}
                style={{ display: show ? 'block' : 'none' }}
            ></div>
            <div onClick={handleBackdropClick} className={`modal fade ${show ? 'show custom-fade-in' : 'custom-fade-out'}`} style={{
                display: show ? 'block' : 'none'
            }} tabIndex={-1}>
                <div className="modal-dialog" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1050 }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Commit secret and price</h4>
                        </div>
                        <div className="modal-body">
                            {/* Form for secret and price */}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="secret">Secret</label>
                                    <input
                                        type="text"
                                        id="secret"
                                        className="form-control"
                                        value={secret}
                                        onChange={(e) => setSecret(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price (in Gnot)</label>
                                    <input
                                        type="number"
                                        id="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading} // Disable while loading
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
