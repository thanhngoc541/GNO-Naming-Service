import Link from "next/link";
import priceing_data from "../../data/priceing-data";


interface priceing_content_type {
    title: string;
    sub_title: string;
}
const priceing_content: priceing_content_type = {
    title: "Price & Plans",
    sub_title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
const {title, sub_title} = priceing_content

const PricingHomeTwo = () => {
    return (
        <>
           <section className="pricing-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {priceing_data.map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="pricing-wrapper pricing-info white-bg  mb-30 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="pricing-header mb-20">
                                        {item.best_value && <span className="bg-price">Best value</span>} 
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                    </div>
                                    <span className="price-color">Starting at</span>
                                    <div className="price-body price-body-two">
                                        <h2><span>$</span>{item.price}<span className="month">/mo</span></h2>
                                        {item.save  && 
                                            <div className="pricing-body-right">
                                                <span>On sale</span>
                                                <span className="price-colors">Save {item.save}%</span>
                                            </div>                                        
                                        }
                                    </div>
                                    <div className="price-body-bottom mt-25 mb-25">
                                        <ul>
                                            {item.price_features.map((feture, index ) => <li key={index}>{feture}</li>)}  
                                        </ul>
                                    </div>
                                        <div className="price-btn-w">
                                        <Link href="#" className="btn btn-soft-border">Purchase Now</Link>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                </div>
                  <div className="row">
                        <div className="col-12">
                            <div className="pricing-more-link text-center mt-50">
                                 <p><Link href="#">See plan details</Link> and pricing for more information</p>
                            </div>
                        </div>
                    </div>
              </div>
            </section> 
        </>
    );
};

export default PricingHomeTwo;