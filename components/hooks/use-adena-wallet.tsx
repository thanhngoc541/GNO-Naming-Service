"use client";
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import { JSONRPCProvider } from '@gnolang/tm2-js-client';
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
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

interface AdenaWalletContextProps {
    isConnected: boolean;
    account: Account | null;
    connect: () => void;
    disconnect: () => void;
    sendMsgContract: (fromAddress: string, toAddress: string, amount: string, memo: string) => Promise<any>;
    sendCallContract: (caller: string, pkgPath: string, func: string, args: string[], gasFee: number, gasWanted: number) => Promise<any>;
    sendRunContract: (caller: string, packageName: string, packagePath: string, fileName: string, fileBody: string, gasFee: number, gasWanted: number) => Promise<any>;
}

const AdenaWalletContext = createContext<AdenaWalletContextProps | undefined>(undefined);

export const useAdenaWallet = () => {
    const context = useContext(AdenaWalletContext);
    if (!context) {
        throw new Error('useAdenaWallet must be used within an AdenaWalletProvider');
    }
    return context;
};

export const AdenaWalletProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState<Account | null>(null);

    const connect = async () => {
        if (!window.adena) {
            window.open("https://adena.app/", "_blank");
        } else {
            try {
                await window.adena.AddEstablish("Gno Naming Service");
                setIsConnected(true);
                const response: Response = await window.adena.GetAccount();
                try {
                    setAccount(response?.data as Account);
                } catch (error) {
                    console.error("Failed to parse JSON:", error);
                }
                // var provider = new JSONRPCProvider('https://chain.gnovar.site/');
                // var r = await provider.getBalance('g1330dfff36jyy44rgq68y33mzxx9uhrgzyq88wh', 'ugnot');
                // var r2 = await provider.getBlockResult(1309);
                let provider2 = new GnoJSONRPCProvider('https://chain.gnovar.site/');
                // console.log(provider2);
                // var r3 = await provider2.getRenderOutput('gno.land/r/demo/foo20', '');
                // // ## Hello World!
                // // console.log(r)
                // // console.log(r2)
                // console.log(r3)
                var r4 = await provider2.evaluateExpression('gno.land/r/varmeta/resolver', 'Resolve("ngoc.gno")')
                console.log(r4)
                // (10100000000 uint64)
                // 100
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
            const result = await window.adena.Sign({
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

    return (
        <AdenaWalletContext.Provider value={{ isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract }}>
            {children}
        </AdenaWalletContext.Provider>
    );
};
