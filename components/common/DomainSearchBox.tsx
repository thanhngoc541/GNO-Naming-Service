'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const DomainSearchBox = ({ style }: any) => {
    const router = useRouter();
    const [url, setUrl] = useState('');

    // Memoized handler for input change
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }, []);

    // Memoized submit handler
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (url) {
            // Ensure the domain ends with '.gno'
            const gnoUrl = url.endsWith('.gno') ? url : `${url}.gno`;
            router.push(`/domain/${gnoUrl}`);
        } else {
            alert('Please enter a valid URL');
        }
    }, [url, router]);

    return (
        <>
            <section className={style ? "domain-search-section" : ''}>
                <div className={style ? "container" : ''}>
                    <div className={style ? "domain-box" : ''}>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="domain-search">
                                    <div className="position-relative">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                value={url}
                                                onChange={handleInputChange}
                                                type="text"
                                                placeholder="Search for names you like..."
                                            />
                                            <button type="submit" className="btn btn-2">Search</button>
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
