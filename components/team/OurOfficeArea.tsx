"use client"
import Image from "next/image";
import office_img from "../../public/assets/img/bg/our-office-bg.png";
import video_thumb from "../../public/assets/img/bg/our-office-video-btn.jpg";
import VideoPopup from "../modals/video-popup";
import { useState } from "react";

const OurOfficeArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="our-office-area pt-110 pb-120">
                    <div className="container">
                        <div className="row align-items-center mb-40">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title mb-30">
                                    <h2>Our Office</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="section-link text-left text-lg-right mb-30">
                                    <a href="#" className="btn btn-soft-border">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="our-office-wrapper">
                                    <div className="our-office-img position-relative">
                                    <Image src={office_img} alt="theme-pure" />
                                    <div className="video-wrapp">
                                        <div className="our-office-video">
                                            <Image src={video_thumb} alt="theme-pure" />
                                            <button 
                                            onClick={() => setIsVideoOpen(true)} 
                                            // href="https://www.youtube.com/watch?v=m1rEBoaji-8" 
                                            className="video-btn popup-video"><i
                                                className="fas fa-play"></i>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* video modal start */}
            <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"cQx8ZYK64dM"}
            />
            {/* video modal end */}
        </>
    );
};

export default OurOfficeArea;