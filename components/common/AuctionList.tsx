'use client';

import { useEffect, useState } from "react";
import { GnoJSONRPCProvider } from '@gnolang/gno-js-client';
import { useAdenaWallet } from "../hooks/use-adena-wallet";
import CommitPopupModal from '../modals/commit-popup';

const AuctionList = () => {
    const { account, connect, sendCallContract } = useAdenaWallet();
    const [modalContent, setModalContent] = useState<{ action: string, url: string, show: boolean }>({ action: '', url: '', show: false });

    interface Auction {
        domain: string;
        status: string;
        endCommitTime: Date;
        endPriceTime: Date;
    }

    const [auctionData, setAuctionData] = useState<Auction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // Loading state
    const provider = new GnoJSONRPCProvider('https://rpc.test4.gno.land:443/');

    // Function to fetch auction data
    const fetchAuctionData = async () => {
        try {
            setLoading(true);
            if (!account || !account.address) {
                alert("Account is null or does not have an address.");
                return;
            }

            const resolverResult = await provider.evaluateExpression('gno.land/r/varmeta/demo/v6/domain/registrar', `GetJoinedBid("${account.address}")`);
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
            setAuctionData(newAuctionData);  // Update auction data state
        } catch (error) {
            console.error("Failed to fetch auction data:", error);
        } finally {
            setLoading(false);  // Turn off loading state
        }
    };
    const extractNumber = (str: string) => {
        const match = str.match(/\d+/);
        const number = match ? parseInt(match[0], 10) : 0;
        return number;
    }

    const handleClaim = async (domain: string) => {
        try {
            if (!account || !account.address) {
                console.error("Account is null or does not have an address.");
                return;
            }

            const resolverResult = await provider.evaluateExpression('gno.land/r/varmeta/demo/v6/domain/registrar', `GetWinnerPrice("${domain}")`);
            const fee = extractNumber(resolverResult)

            const result = await sendCallContract(
                account.address,
                `${fee}ugnot`,
                'gno.land/r/varmeta/demo/v6/domain/registrar',
                'Claim',
                [domain],
                1,
                10000000
            );

            if (result.status === 'success') {
                alert(`Claim for domain ${domain} success!`);
                await fetchAuctionData();  // Refetch auction data after claim
            } else {
                alert(`Claim for domain ${domain} failed!`);
            }
        } catch (error) {
            console.error('Transaction failed:', error);
            alert(`Claim for domain ${domain} failed!`);
        }
    };

    const extractValuesFromString = (input: string) => {
        const results = [];
        const regex = /"([^"]*)"|\b\d{13}\b/g; // Regex to match strings or int64 values

        let match;
        while ((match = regex.exec(input)) !== null) {
            if (match[1]) {
                results.push(match[1]);  // If the match is a string, push as is
            } else {
                results.push(Number(match[0]));  // Convert int64 values to numbers
            }
        }

        return results;
    };

    const openModal = (url: string, action: string) => {
        setModalContent({ url, action, show: true });
    };

    const handleClose = async () => {
        setModalContent(prev => ({ ...prev, show: false }));
    };

    const handleSubmitSuccess = async () => {
        await fetchAuctionData();
    };

    // Fetch auction data on component mount
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
        const claimingRegex = /^([a-zA-Z0-9]+) is Claiming/;
        const claimingMatch = status.match(claimingRegex);

        if (claimingMatch) {
            const address = claimingMatch[1];
            if (account && account.address === address) {
                return <button onClick={() => handleClaim(domain)} className="btn btn-2">Claim Domain</button>;
            } else {
                return "Good luck next time";
            }
        }

        const addressRegex = /^owned by ([a-zA-Z0-9]+)$/;
        const addressMatch = status.match(addressRegex);

        if (addressMatch) {
            const address = addressMatch[1];
            if (account && account.address === address) {
                return "Claimed";
            } else {
                return "Good luck next time";
            }
        }

        switch (status) {
            case 'waiting hash':
                return <button onClick={() => openModal(domain, 'commitHash')} className="btn btn-2">Commit Hash</button>;

            case 'commited hash':
                return <button className="btn btn-2">Waiting for commit price</button>;

            case 'waiting price':
                return <button onClick={() => openModal(domain, 'commitPrice')} className="btn btn-2">Commit Price</button>;

            case 'closed':
                return <button className="btn btn-2" >See owner</button>;

            default:
                return <button className="btn btn-2">{status}</button>;
        }
    };

    return (
        <>
            <CommitPopupModal
                action={modalContent.action}
                domain={modalContent.url}
                show={modalContent.show}
                handleClose={handleClose}
                onSubmitSuccess={handleSubmitSuccess}
            />
            <div className="price-area pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 pb-50">
                            <div className="d-flex justify-content-center align-items-center">
                                <h2 className="section-title">Joined Auctions  </h2>
                                <div onClick={fetchAuctionData} className="pl-10">
                                    <i className="fa fa-sync"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="price-table white-bg table-responsive">
                                {loading ? (  // Show spinner when loading
                                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '150px' }}>
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    auctionData.length > 0 ? (
                                        <table className="table">
                                            <thead className="theme-bg">
                                                <tr>
                                                    {["Domain Name", "Commit Hash", "Confirm Price", "Status", "Actions"].map((item, index) => (
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
                                                        <td>{auction.status.includes("owned") ? "claimed" : auction.status.includes("claiming") ? "claiming" : auction.status}</td>
                                                        <td>{renderAction(auction.domain, auction.status)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div>No auctions available</div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuctionList;
