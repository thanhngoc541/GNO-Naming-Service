"use client"
import Image from "next/image";
import server_img from "../../../public/assets/img/slider/server.png";
import useAdenaWallet from "../../hooks/use-adena-wallet";
interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
}
const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    sub_title: "Get your passport to Web3",
    title: "Create your own domain for wallets",
}
const { bg_img, sub_title, title } = hero_content

const HeroHomeOne = () => {
    const { isConnected, account, connect, disconnect, sendMsgContract, sendCallContract, sendRunContract } = useAdenaWallet();
    const handleSendCallContract = async () => {
        if (account) {
            try {
                const result = await sendCallContract(
                    account.address,
                    'gno.land/r/demo/foo20', // Gnoland package path
                    'Transfer', // Function name
                    ['g122n67es9vzs0rmharsggfr4sdkd45aysnuzf7m', '1'], // Arguments
                    1, // gasFee
                    10000000 // gasWanted
                );
                console.log('Transaction successful:', result);
            } catch (error) {
                console.error('Transaction failed:', error);
            }
        }
    };
    const handleSendMsgContract = async () => {
        if (account) {
            try {
                const result = await sendMsgContract(
                    account.address,
                    'g122n67es9vzs0rmharsggfr4sdkd45aysnuzf7m',
                    '10000000ugnot',
                    'Transaction Memo'
                );
                console.log('Transaction successful:', result);
            } catch (error) {
                console.error('Transaction failed:', error);
            }
        }
    };

    const handleSendRunContract = async () => {
        if (account) {
            try {
                const result = await sendRunContract(
                    account.address,
                    'main', // Package name
                    'gno.land/r/demo/main', // Package path
                    'script.gno', // File name
                    'package main\n\nfunc Main() {\n\tprintln("HELLO WORLD")\n}', // File body
                    1, // gasFee
                    2000000 // gasWanted
                );
                console.log('Run contract successful:', result);
            } catch (error) {
                console.error('Run contract failed:', error);
            }
        }
    };
    return (
        <>
            <section className="slider-area position-relative">
                <div className="slider-ac">
                    <div className="single-slider slider-height" style={{ backgroundImage: `url(${bg_img})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2">
                                    <div className="slider-text pt-180 text-center">
                                        <span className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                            {sub_title}
                                        </span>
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                            {title}
                                        </h2>
                                        <div className="slider-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                            {/* <a href="#" className="btn">Get Started</a>
                                            <a href="#" className="btn btn-border">Learn More</a> */}
                                            <a  href="#" className="btn" onClick={handleSendMsgContract}>Send Msg</a>
                                            <a  href="#" className="btn" onClick={handleSendCallContract}>Send Call</a>
                                            <a  href="#" className="btn" onClick={handleSendRunContract}>Send Run</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default HeroHomeOne;