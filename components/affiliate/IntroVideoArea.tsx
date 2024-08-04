'use client'
import { useState } from 'react';  
import VideoPopup from '../modals/video-popup';

const IntroVideoArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="intro-video-area pt-115 pb-80"  style={{backgroundImage: `url(/assets/img/bg/intro-video-bg.png)`}}>
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title section-title-white  text-center mb-70">
                            <h2>Intro Video</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="intro-video text-center mb-30">
                            <div className="intro-video-img">
                                <img src="assets/img/bg/intro-video.jpg" alt="theme-pure" />
                                <button className="intro-video popup-video"
                                    onClick={() => setIsVideoOpen(true)}  
                                    title="video"><i
                                    className="fal fa-play"></i></button>
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

export default IntroVideoArea;