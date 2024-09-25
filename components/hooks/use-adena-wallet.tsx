"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

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
    connect: () => Promise<void>;
    disconnect: () => void;
    sendMsgContract: (fromAddress: string, toAddress: string, amount: string, memo: string) => Promise<any>;
    sendCallContract: (caller: string, send: string, pkgPath: string, func: string, args: string[], gasFee: number, gasWanted: number) => Promise<any>;
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

declare global {
    interface Window {
        adena: {
            AddEstablish: (appName: string) => Promise<void>;
            GetAccount: () => Promise<Response>;
            DoContract: (params: any) => Promise<any>;
            Sign: (params: any) => Promise<any>;
        };
    }
}

export const AdenaWalletProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState<Account | null>(null);

    const connect = useCallback(async () => {
        // Ensure this only runs on the client side
        if (typeof window === 'undefined' || !window.adena) {
            return;
        }

        try {
            await window.adena.AddEstablish("Gno Naming Service");
            setIsConnected(true);
            const response: Response = await window.adena.GetAccount();
            setAccount(response.data);
        } catch (error) {
            console.error('Error connecting to Adena wallet:', error);
        }
    }, []);

    const disconnect = useCallback(() => {
        setIsConnected(false);
        setAccount(null);
    }, []);

    const sendCallContract = useCallback(async (caller: string, send: string, pkgPath: string, func: string, args: string[], gasFee: number, gasWanted: number) => {
        if (!window.adena) throw new Error('Adena wallet is not available');

        try {
            const result = await window.adena.DoContract({
                messages: [{
                    type: "/vm.m_call",
                    value: { caller, send, pkg_path: pkgPath, func, args }
                }],
                gasFee,
                gasWanted,
            });
            return result;
        } catch (error) {
            console.error('Error sending contract transaction:', error);
            throw error;
        }
    }, []);

    const sendRunContract = useCallback(async (caller: string, packageName: string, packagePath: string, fileName: string, fileBody: string, gasFee: number, gasWanted: number) => {
        if (!window.adena) throw new Error('Adena wallet is not available');

        try {
            const result = await window.adena.Sign({
                messages: [{
                    type: "/vm.m_run",
                    value: {
                        caller,
                        send: "",
                        package: { Name: packageName, Path: packagePath, Files: [{ Name: fileName, Body: fileBody }] },
                    }
                }],
                gasFee,
                gasWanted,
            });
            return result;
        } catch (error) {
            console.error('Error sending run contract:', error);
            throw error;
        }
    }, []);

    const sendMsgContract = useCallback(async (fromAddress: string, toAddress: string, amount: string, memo: string) => {
        if (!window.adena) throw new Error('Adena wallet is not available');

        try {
            const result = await window.adena.DoContract({
                messages: [{
                    type: "/bank.MsgSend",
                    value: { from_address: fromAddress, to_address: toAddress, amount }
                }],
                gasFee: 1,
                gasWanted: 10000000,
                memo,
            });
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
