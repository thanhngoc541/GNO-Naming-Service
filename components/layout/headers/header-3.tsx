"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Image from 'next/image';
import Logo from "../../../public/assets/img/logo/logo1.png";

const HeaderThree = () => {
    const [sidebarOppen, setSidebarOppen] = useState(false)
    return (
        <>
            <header>
                <div className="header-area header-transparent header-space header-2 pt-45 pb-45">
                    <div className="container-fluids">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                                <div className="logo">
                                    <Link href="/"> <Image src={Logo} alt="theme-pure" /> </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                <div className="main-menu main-menu-one menu-3">
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
                                <div className="bar f-right d-none d-lg-block">
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

export default HeaderThree;