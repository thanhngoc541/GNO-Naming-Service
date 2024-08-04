import Image from "next/image";
import core_features_data from "../data/core-features-data";
import Link from "next/link";
interface core_contact_type {
    sub_title: string;
    info: string;
}
const core_contact: core_contact_type = {
    sub_title: "Core Features",
    info: "Eorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
const {sub_title, info} = core_contact

const CoreFeatures = () => {
    return (
        <>
            <section className="core-features-area pt-115 pb-60" style={{backgroundImage: `url(/assets/img/bg/share-core-bg.jpg)`}}>
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center share-titles-section mb-30">
                            <h2>{sub_title}</h2>
                            <p>{info} </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {core_features_data.map((item, i)  => 
                             <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box host_core_feature  mb-60 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img_2} alt="theme-pure" />
                                    </div>
                                    <div className="services-content service-content-share-hosting">
                                        <h4>{item.title_2}</h4>
                                        <p>{item.sm_des_2}</p>
                                        <Link href="#">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoreFeatures;
