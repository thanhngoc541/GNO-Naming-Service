'use client';

import Image from "next/image";
import server_img from "../../../public/assets/img/slider/server.png";
import { useState } from "react";
import DomainSearchBox from "../../common/DomainSearchBox";
import DomainRegisterBox from "../../common/DomainRegisterBox";
import AuctionList from "../../common/AuctionList";

interface hero_content_type {
    bg_img: string;
    sub_title: string;
    title: string;
}

const hero_content: hero_content_type = {
    bg_img: "/assets/img/slider/slide-bg.png",
    sub_title: "Get your passport to Web3",
    title: "Create your own domain for wallets",
};

const HeroHomeOne = () => {
    const [refreshAuction, setRefreshAuction] = useState<boolean>(false);

    // This function will be passed to DomainRegisterBox and triggered when a domain is successfully registered
    const handleRegisterSuccess = () => {
        // Toggle refreshAuction state to trigger AuctionList to refetch data
        setRefreshAuction(prev => !prev);
    };

    return (
        <>
            <section className="slider-area position-relative">

                <div className="slider-ac">
                    <div className="single-slider slider-height" style={{ backgroundImage: `url(${hero_content.bg_img})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2" style={{ zIndex: '1' }}>
                                    <div className="slider-text pt-180 text-center">
                                        <span className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                            {hero_content.sub_title}
                                        </span>
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                            {hero_content.title}
                                        </h2>
                                        <div className="slider-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                            <div className="pt-20">
                                                {/* Pass handleRegisterSuccess to DomainRegisterBox */}
                                                <DomainRegisterBox onRegisterSuccess={handleRegisterSuccess} />
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
                            <div className="slider-bottom-img wow fadeInUp animated" data-wow-delay="1.3s">
                                <Image src={server_img} alt="theme-pure" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <div>
                <section className="domain-search-area pt-60 pb-120">
                    <div className="container">
                        <DomainSearchBox />
                    </div>
                </section>

                <AuctionList key={refreshAuction.toString()} />
            </div>
        </>
    );
};

export default HeroHomeOne;
