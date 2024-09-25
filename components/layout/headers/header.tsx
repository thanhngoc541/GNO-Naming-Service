"use client";

import Link from 'next/link';
import NavMenu from './nav-menu';
import { useState, useCallback } from 'react';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
import Logo from "../../../public/assets/img/logo/logo.png";
import Image from 'next/image';
import { useAdenaWallet } from '../../hooks/use-adena-wallet';
import { useRouter } from 'next/navigation';

const HeaderOne = () => {
    const { isConnected, account, connect } = useAdenaWallet();
    const [sidebarOppen, setSidebarOppen] = useState(false);
    const [searchOppen, setSearchOppen] = useState(false);
    const [url, setUrl] = useState('');
    const router = useRouter();

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }, []);

    const handleSearch = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (url) {
            const formattedUrl = url.endsWith('.gno') ? url : `${url}.gno`;
            router.push(`/domain/${formattedUrl}`);
        } else {
            alert('Please enter a valid URL');
        }
    }, [url, router]);

    return (
        <>
            <header>
                <div className={`header-area header-transparent header-space pt-45 pb-45`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                                <div className="logo">
                                    <Link href="/">
                                        <Image height={24} src={Logo} alt="theme-pure" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                                {/* Placeholder for NavMenu */}
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-7 d-flex flex-row-reverse align-items-center justify-content-xl-end">
                                <div className="bar d-none d-xl-block">
                                    <button className="info-bar" onClick={() => setSidebarOppen(true)}>
                                        <i className="far fa-bars"></i>
                                    </button>
                                </div>
                                <div className="search d-none d-xl-block">
                                    <button
                                        className={`nav-search search-trigger ${searchOppen && "open"}`}
                                        onClick={() => setSearchOppen(true)}
                                    >
                                        <i className="far fa-search"></i>
                                    </button>
                                </div>
                                {searchOppen && (
                                    <div className={`search-wrap ${searchOppen && "d-block"}`}>
                                        <div className="search-inner">
                                            <i
                                                className={`fas fa-times search-close ${searchOppen && "open"}`}
                                                onClick={() => setSearchOppen(false)}
                                                id="search-close"
                                            ></i>
                                            <div className="search-cell">
                                                <form onSubmit={handleSearch}>
                                                    <div className="search-field-holder">
                                                        <input
                                                            onChange={handleInputChange}
                                                            value={url}
                                                            type="search"
                                                            className="main-search-input"
                                                            placeholder="Search For Domain..."
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="header-btn">
                                    <div>
                                        {!isConnected ? (
                                            <div onClick={connect} className="btn">
                                                Connect Wallet
                                            </div>
                                        ) : (
                                            <div className="btn">
                                                {account?.address.slice(0, 5)}...{account?.address.slice(-3)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile-menu mean-container d-lg-none">
                                    <div className="mean-bar">
                                        {/* Placeholder for MobileMenus */}
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

export default HeaderOne;
