"use client"
import DomainSearchBox from "../../common/DomainSearchBox";
// domain type
interface domain_content_type {
    title: string;
    sm_des: string;
}
// domain content
const domain_content: domain_content_type = {
    title: "Search Domain",
    sm_des: "Ipsum dolor sit amet, consectetur Lorem adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
}
const {title, sm_des}  =  domain_content


const DomainSearchHomeTwo = () => {
    return (
        <>
            <section className="domain-search-area pt-100 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-75">
                                <h2>{title}</h2>
                                <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                    <DomainSearchBox /> 
                </div>
            </section>
        </>
    );
};

export default DomainSearchHomeTwo;