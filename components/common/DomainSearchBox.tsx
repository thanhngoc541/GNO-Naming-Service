'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const DomainSearchBox = ({ style }: any) => {
    const router = useRouter();
    const [url, setUrl] = useState('');
    const handleInputChange = (e: any) => {
        setUrl(e.target.value);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (url) {
            if (url.slice(url.length - 4, url.length) != ".gno") router.push("domain/" + url + '.gno');
            else
                router.push("domain/" + url);
        } else {
            alert('Please enter a valid URL');
        }
    };
    return (
        <>
            <section className={`${style && "domain-search-section"}`}>
                <div className={`${style && "container"}`}>
                    <div className={`${style && "domain-box"}`}>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="domain-search">
                                    <div className="position-relative">
                                        <form onSubmit={handleSubmit}>
                                            <input value={url}
                                                onChange={handleInputChange} type="text" placeholder="Search for names you like..." />

                                            <button type="submit" className="btn btn-2">search</button>
                                            <div className="domain-select">
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DomainSearchBox;