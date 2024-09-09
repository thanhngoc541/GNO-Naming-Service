"use client"
import Image from "next/image";
import server_img from "../../../public/assets/img/slider/server.png";
import { useAdenaWallet } from '../../hooks/use-adena-wallet';
import DomainSearch from "./DomainSearchHomeOne";
import { useRef, useState } from "react";
import DomainSearchBox from "../../common/DomainSearchBox";
import DomainRegisterBox from "../../common/DomainRegisterBox";

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

    const myRef = useRef<HTMLDivElement>(null); // Explicitly typing the ref
    console.log(isConnected, account);

    const scrollToComponent = () => {
        myRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className="slider-area position-relative">

                <div className="slider-ac">
                    <div className="single-slider slider-height" style={{ backgroundImage: `url(${bg_img})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2" style={{ zIndex: '1' }}>
                                    <div className="slider-text pt-180 text-center">
                                        <span className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                            {sub_title}
                                        </span>
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                            {title}
                                        </h2>
                                        <div className="slider-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                            <div className="pt-20">
                                                <DomainRegisterBox />
                                            </div>
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
                            <div ref={myRef} className="slider-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div >
                <section className="domain-search-area pt-60 pb-120">
                    <div className="container">
                        <DomainSearchBox />
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeroHomeOne;