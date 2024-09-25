import { useEffect, useState } from "react";
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import { useAdenaWallet } from "../hooks/use-adena-wallet";
import CommitPopupModal from '../modals/commit-popup';

const AuctionList = () => {
    const { isConnected, account, connect } = useAdenaWallet();
    const [modalContent, setModalContent] = useState<{ step: string, url: string, show: boolean }>({ step: '', url: '', show: false });

    interface Auction {
        domain: string;
        status: string;
        endCommitTime: Date;
        endPriceTime: Date;
    }

    const [auctionData, setAuctionData] = useState<Auction[]>([]);
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');

    const fetchAuctionData = async () => {
        try {
            if (!account || !account.address) {
                console.error("Account is null or does not have an address.");
                return;
            }
            const resolverResult = await provider.evaluateExpression('gno.land/r/varmeta/demo/v39/domain/registrar', `GetJoinedBid("${account.address}")`);
            const extractedStrings = extractValuesFromString(resolverResult);

            const newAuctionData: Auction[] = [];
            for (let i = 0; i < extractedStrings.length; i += 4) {
                newAuctionData.push({
                    domain: extractedStrings[i] as string,
                    status: extractedStrings[i + 1] as string,
                    endCommitTime: new Date(Number(extractedStrings[i + 2])),
                    endPriceTime: new Date(Number(extractedStrings[i + 3]))
                });
            }
            setAuctionData(newAuctionData); // Set the auction data
        } catch (error) {
            console.error("Failed to fetch auction data:", error);
        }
    };

    const extractValuesFromString = (input: string) => {
        let result = [];

        const stringRegex = /\"([^\"]*)\"/g;
        let stringMatch;
        while ((stringMatch = stringRegex.exec(input)) !== null) {
            result.push(stringMatch[1]);
        }

        const int64Regex = /\b\d{13}\b/g;
        let int64Match;
        while ((int64Match = int64Regex.exec(input)) !== null) {
            result.push(parseInt(int64Match[0], 10));
        }

        return result;
    };

    const openModal = (url: string, step: string) => {
        setModalContent({ url, step, show: true });
    };

    const handleClose = () => {
        setModalContent(prev => ({ ...prev, show: false }));
    };

    useEffect(() => {
        const initialize = async () => {
            if (!account) {
                await connect();
            }
        };

        initialize();

        if (account && account.address) {
            fetchAuctionData();
        }
    }, [account, connect]);

    const renderAction = (domain: string, status: string) => {
        switch (status) {
            case 'hash':
                return <button onClick={() => openModal(domain, '1')} className="btn btn-2">Commit Hash</button>;

            case 'commited hash':
                return <button className="btn btn-2">Waiting for commit price</button>;

            case 'price':
                return <button onClick={() => openModal(domain, '2')} className="btn btn-2">Commit Price</button>;

            case 'closed':
                return <button className="btn btn-2" >See owner</button>;

            default:
                return <button className="btn btn-2">{status}</button>;
        }
    };

    return (
        <>
            <CommitPopupModal step={modalContent.step} domain={modalContent.url} show={modalContent.show} handleClose={handleClose} />
            <div className="price-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center">
                                <h2>Auctions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="price-table white-bg table-responsive">
                                <table className="table">
                                    <thead className="theme-bg">
                                        <tr>
                                            {["Domain Name", "Commit Hash", "Comfirm Price", "Status", "Actions"].map((item, index) => (
                                                <th key={index} scope="col">{item}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {auctionData.map((auction, index) => (
                                            <tr key={index}>
                                                <td className="tb-title">{auction.domain}</td>
                                                <td>{auction.endCommitTime.toLocaleString()}</td>
                                                <td>{auction.endPriceTime.toLocaleString()}</td>
                                                <td>{auction.status}</td>
                                                <td>
                                                    {renderAction(auction.domain, auction.status)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuctionList;
