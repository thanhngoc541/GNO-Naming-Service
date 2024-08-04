import Link from "next/link";

const DomainSearchBox = ({ style }: any) => {
    return (
        <>
            <section className={`${style && "domain-search-section"}`}>
                <div className={`${style && "container"}`}>
                    <div className={`${style && "domain-box"}`}>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="domain-search">
                                    <div className="position-relative">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <input type="text" placeholder="Search for names you like..." />

                                            <button type="submit" className="btn btn-2">search</button>
                                            <div className="domain-select">
                                                {/* <select name="select">
                                                    <option value="1">All</option>
                                                    <option value="1">.Net</option>
                                                    <option value="1">.Com</option>
                                                    <option value="1">.Org</option>
                                                    <option value="1">.Co</option>
                                                    <option value="1">.Biz</option>
                                                </select> */}

                                                {/* <select className="form-select" aria-label="Default select example">
                                                    <option >All</option>
                                                    <option value="1">.Net</option>
                                                    <option value="2">.Com</option>
                                                    <option value="3">.Org</option>
                                                    <option value="4">.Co</option>
                                                    <option value="5">.Biz</option>
                                                </select> */}

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className="domain-list mt-35 text-center">
                                    <ul>
                                        <li><Link href="#">.com / <span>$7.54</span></Link></li>
                                        <li><Link className="active" href="#">.net / <span>$6.89</span></Link></li>
                                        <li><Link href="#">.org / <span>$8.54</span></Link></li>
                                        <li><Link href="#">.co / <span>$10.54</span></Link></li>
                                        <li><Link href="#">.biz / <span>$9.54</span></Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DomainSearchBox;