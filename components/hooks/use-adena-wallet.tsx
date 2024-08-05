// hooks/useAdenaWallet.ts
import { useCallback, useEffect, useState } from 'react';
interface Response {
    status: string;
    code: number;
    type: string;
    message: string;
    data: Account;
}
interface Account {
    accountNumber: string;
    address: string;
    coins: string;
    chainId: string;
    sequence: string;
    status: string;
}
const useAdenaWallet = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState<Account | null>(null);

    const connect = async () => {
        if (!window.adena) {
            window.open("https://adena.app/", "_blank");
        } else {
            try {
                await window.adena.AddEstablish("Adena");
                setIsConnected(true);
                const response: Response = await window.adena.GetAccount();
                try {
                    setAccount(response?.data as Account);
                } catch (error) {
                    console.error("Failed to parse JSON:", error);
                }
            } catch (error) {
                console.error('Error connecting to Adena wallet:', error);
            }
        }
    };

    useEffect(() => {
        window.onload = connect;
    }, []);

    const disconnect = () => {
        setIsConnected(false);
        setAccount(null);
    };

    const sendCallContract = useCallback(async (caller: string, pkgPath: string, func: string, args: string[], gasFee: number, gasWanted: number) => {
        if (!window.adena) {
            console.error('Adena wallet is not available');
            return;
        }

        try {
            const result = await window.adena.DoContract({
                messages: [{
                    type: "/vm.m_call",
                    value: {
                        caller: caller, // your Adena address
                        send: "",
                        pkg_path: pkgPath, // Gnoland package path
                        func: func, // Function name
                        args: args // Arguments
                    }
                }],
                gasFee: gasFee,
                gasWanted: gasWanted
            });
            console.log('Transaction result:', result);
            return result;
        } catch (error) {
            console.error('Error sending contract transaction:', error);
            throw error;
        }
    }, []);

    const sendRunContract = useCallback(async (caller: string, packageName: string, packagePath: string, fileName: string, fileBody: string, gasFee: number, gasWanted: number) => {
        if (!window.adena) {
            console.error('Adena wallet is not available');
            return;
        }

        try {
            const result = await window.adena.DoContract({
                messages: [{
                    type: "/vm.m_run",
                    value: {
                        caller: caller, // your Adena address
                        send: "",
                        package: {
                            Name: packageName,
                            Path: packagePath,
                            Files: [
                                {
                                    Name: fileName,
                                    Body: fileBody,
                                }
                            ]
                        }
                    }
                }],
                gasFee: gasFee,
                gasWanted: gasWanted
            });
            console.log('Transaction result:', result);
            return result;
        } catch (error) {
            console.error('Error sending run contract:', error);
            throw error;
        }
    }, []);

    const sendMsgContract = useCallback(async (fromAddress: string, toAddress: string, amount: string, memo: string) => {
        if (!window.adena) {
            console.error('Adena wallet is not available');
            return;
        }

        try {
            const result = await window.adena.DoContract({
                messages: [{
                    type: "/bank.MsgSend",
                    value: {
                        from_address: fromAddress,
                        to_address: toAddress,
                        amount: amount // e.g., "5000000ugnot"
                    }
                }],
                gasFee: 1,
                gasWanted: 1000000,
                memo: memo
            });
            console.log('Transaction result:', result);
            return result;
        } catch (error) {
            console.error('Error sending transaction:', error);
            throw error;
        }
    }, []);

    return { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract };
};

export default useAdenaWallet;
