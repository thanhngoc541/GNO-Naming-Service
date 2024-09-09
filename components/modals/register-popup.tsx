'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAdenaWallet } from '../hooks/use-adena-wallet';

interface RegisterPopupModalProps {
    domain: string;
    show: boolean;
    handleClose: () => void;
}

const RegisterPopupModal: React.FC<RegisterPopupModalProps> = ({ domain, show, handleClose }) => {
    const [isClient, setIsClient] = useState(false);
    const { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract } = useAdenaWallet();

    useEffect(() => {
        setIsClient(true); // Ensures document is defined
    }, []);

    let modifiedDomain = domain;
    if (!modifiedDomain.endsWith('.gno')) {
        modifiedDomain = `${modifiedDomain}.gno`;
    }

    const handleSendCallContract = async (type: string = 'gnot') => {
        if (!account) await connect();
        console.log(type)
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    type == 'gnot' ? "100ugnot" : "",
                    'gno.land/r/varmeta/demo1/domain/registrar', // Gnoland package path
                    'Register', // Function name
                    [modifiedDomain.toString(), type], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Transaction successful:', result);
                if (result.status === 'success') {
                    alert(`Register for domain ${modifiedDomain} success!`);
                } else {
                    alert(`Register for domain ${modifiedDomain} failed!`);
                }
            } catch (error) {
                console.error('Transaction failed:', error);
                alert(`Register for domain ${modifiedDomain} failed!`);
            }
        }
    };


    const handleApproveContract = async () => {
        if (!account) await connect();
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    "",
                    'gno.land/r/demo/domain/vmt', // Gnoland package path
                    'Approve', // Function name
                    ["g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4", "10"], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Approve successful:', result);
                if (result.status === 'success') {
                    await handleSendCallContract('token');
                } else {
                    alert(`Approve for contract g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4 failed!`);
                }
            } catch (error) {
                console.error('Approve failed:', error);
                alert(`Approve for contract g1rl9kp5g2w6szy4tntvmsm0cmae928l2nwlngr4 failed!`);
            }
        }
    };

    const handlePayGnot = async () => {
        handleClose();
        await handleSendCallContract('gnot');
    }

    const handlePayVMT = async () => {
        handleClose();
        await handleApproveContract();
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isClient) return null;

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
                            <h4 className="modal-title">Choose payment method</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-2 btn-secondary" onClick={handlePayGnot}>Pay Gnot</button>
                            <button type="button" className="btn btn-2 btn-primary" onClick={handlePayVMT} >Pay VMT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
};

export default RegisterPopupModal;
