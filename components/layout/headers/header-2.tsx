"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
type style_type ={
    style: boolean
}
const HeaderTwo = ({style}: style_type) => {
    const [sidebarOppen, setSidebarOppen] = useState(false)
    return (
        <>
            <header className="header-transparent header-2 header-space">
                {style ? null :
                    <div className="header-top pt-25 pb-25 d-none d-md-block">
                        <div className="container-fluids">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="header-left">
                                        <ul className="top-list">
                                            <li> <a href="#"><i className="fal fa-comments"></i><span> Chat</span></a></li>
                                            <li><a href="#"><i className="far fa-newspaper"></i><span> News Feeds</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="header-cta text-right">
                                        <ul className="top-list">
                                            <li><a href="#"><i className="fal fa-envelope"></i><span> info@exampleweb.com</span></a></li>
                                            <li className="mr-0"><a href="#"><i className="fal fa-phone"></i><span> +098 9789 867 6</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            <div className={`header-area ${style ? "header-transparent header-space" : "header-bottom-space"} pt-45 pb-45`}>
                <div className="container-fluids">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/">
                                {style ?
                                <img src="/assets/img/logo/footer-logo.png" alt="theme-pure" />
                                :
                                <img src="/assets/img/logo/logo.svg" alt="theme-pure" />
                                }
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className={`main-menu ${style ? "contract-menu" : "text-center"}`}>
                                <nav id="mobile-menu">
                                <NavMenu />
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex align-items-center justify-content-end">
                            <div className="header-btn f-right d-none d-md-block">
                                <Link href={"/register"}>
                                    <button className="btn"><i className="far fa-user"></i> Sign In</button>
                                </Link>
                            </div>
                            <div className="bar f-right d-none d-xl-block">
                                <button className="info-bar" onClick={() => setSidebarOppen(true)}><i className="far fa-bars"></i></button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu mean-container d-lg-none">
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderTwo;