"use client"

import DomainSearchBox from "../../common/DomainSearchBox";

const DomainSearch = () => {
    return (
        <>
            <section className="domain-search-area pt-60 pb-120">
                <div className="container">
                    <DomainSearchBox />
                </div>
            </section>
        </>
    );
};

export default DomainSearch;