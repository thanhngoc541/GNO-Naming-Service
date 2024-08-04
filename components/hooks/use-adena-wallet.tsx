// hooks/useAdenaWallet.ts
import { useEffect, useState } from 'react';
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

    return { isConnected, account, connect, disconnect };
};

export default useAdenaWallet;
