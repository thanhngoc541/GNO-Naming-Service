'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAdenaWallet } from '../hooks/use-adena-wallet';
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';

interface CommitPopupModalProps {
    domain: string;
    show: boolean;
    action: string;
    handleClose: () => void;
    onSubmitSuccess: () => void;
}

const CommitPopupModal: React.FC<CommitPopupModalProps> = ({ domain, show, action, handleClose, onSubmitSuccess }) => {
    const [isClient, setIsClient] = useState(false);
    const { account, connect, sendCallContract } = useAdenaWallet();
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');
    const [secret, setSecret] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // State for the checkbox (only for commitHash)
    const [step, setStep] = useState(1); // Step state to handle multiple steps for commitHash
    const [hashedString, setHashedString] = useState(''); // State to store the hash string

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

    const resetData = () => {
        // Reset all state values
        setSecret('');
        setPrice('');
        setIsChecked(false);
        setStep(1);
        setHashedString('');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!account) await connect();

        if (account) {
            try {
                setIsLoading(true);

                if (step === 1 && action === 'commitHash') {
                    // Step 1: Hash the secret + price and proceed to Step 2
                    const tempJoinString = secret + price;
                    const hashedStringResult = await hashString(tempJoinString);
                    setHashedString(hashedStringResult);
                    setStep(2); // Move to step 2 where hash string is shown
                } else if (step === 2 && action === 'commitHash') {
                    // Step 2: Submit the hash string to the contract
                    const result = await sendCallContract(
                        account.address,
                        '100ugnot',
                        'gno.land/r/varmeta/demo/v405/domain/registrar',
                        'CommitHash',
                        [modifiedDomain, hashedString],
                        1,
                        10000000
                    );

                    if (result.status === 'success') {
                        alert(`Commit hash for domain ${modifiedDomain} success!`);
                        onSubmitSuccess(); // Trigger success callback to parent
                    } else {
                        alert(`Commit hash for domain ${modifiedDomain} failed!`);
                    }

                    handleClose(); // Close modal after submission
                } else if (action === 'commitPrice') {
                    // Directly handle commitPrice without steps or checkbox
                    const result = await sendCallContract(
                        account.address,
                        '100ugnot',
                        'gno.land/r/varmeta/demo/v405/domain/registrar',
                        'CommitPrice',
                        [price, secret, modifiedDomain],
                        1,
                        10000000
                    );

                    if (result.status === 'success') {
                        alert(`Commit price for domain ${modifiedDomain} success!`);
                        onSubmitSuccess(); // Trigger success callback to parent
                    } else {
                        alert(`Commit price for domain ${modifiedDomain} failed!`);
                    }

                    handleClose(); // Close modal after submission
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Transaction for domain ${modifiedDomain} failed!`);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleCancel = () => {
        resetData(); // Reset all state when canceling
        handleClose(); // Close the modal
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            handleCancel(); // Call the cancel handler on backdrop click
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
                            <h4 className="modal-title">{action === 'commitHash' ? "Add your bidding" : "Commit secret and price"}</h4>
                        </div>
                        <div className="modal-body">
                            {action === 'commitHash' && step === 1 ? (
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
                                            className="btn btn-2 flex-fill me-2"
                                            onClick={handleCancel} // Trigger cancel with reset
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            style={{ padding: '19px 30px' }}
                                            className="btn btn-2 flex-fill"
                                            disabled={!isChecked || isLoading}
                                        >
                                            {isLoading ? 'Processing...' : 'Next'}
                                        </button>
                                    </div>
                                </form>
                            ) : action === 'commitHash' && step === 2 ? (
                                <div>
                                    <h5 className="fw-bold">Your Generated Hash</h5>
                                    <p
                                        style={{
                                            wordBreak: 'break-all',   // Ensures the hash breaks into new lines if it's too long
                                            overflowWrap: 'break-word', // Breaks long words
                                            maxHeight: '100px',        // Optional: limits the height of the container
                                            overflow: 'auto',          // Optional: adds scroll if content exceeds the height
                                            padding: '10px',           // Optional: padding for better readability
                                            border: '1px solid #ccc',  // Optional: adds border around the hash for better visibility
                                            borderRadius: '5px'        // Optional: adds rounded corners
                                        }}
                                    >
                                        {hashedString}
                                    </p>
                                    <p className="mt-3">
                                        <strong >Important:</strong> You are about to commit the hash only. Your secret and price will not be included in this step.
                                        Please ensure you securely save both your secret and price, as they will be required for future steps in the process. Losing them may result in an inability to complete the registration.
                                    </p>
                                    <div className="modal-footer d-flex justify-content-between" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                        <button
                                            type="button"
                                            style={{ padding: '19px 30px' }}
                                            className="btn btn-2 flex-fill me-2"
                                            onClick={handleCancel} // Trigger cancel with reset
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            style={{ padding: '19px 30px' }}
                                            className="btn btn-2 flex-fill"
                                            onClick={handleSubmit}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Processing...' : 'Submit'}
                                        </button>
                                    </div>
                                </div>


                            ) : (
                                // This form handles the commitPrice action (no steps, no checkbox)
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

                                    <div className="modal-footer d-flex justify-content-between" style={{ paddingLeft: 0, paddingRight: 0 }}>
                                        <button
                                            type="button"
                                            style={{ padding: '19px 30px' }}
                                            className="btn btn-2 flex-fill me-2"
                                            onClick={handleCancel} // Trigger cancel with reset
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            style={{ padding: '19px 30px' }}
                                            className="btn btn-2 flex-fill"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Processing...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default CommitPopupModal;
