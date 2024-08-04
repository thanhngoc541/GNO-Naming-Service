import Image from "next/image";
import illustration_img from "../../../public/assets/img/bg/illustration.png";


interface hero_three_content_type {
    sub_title: string;
    title: string;
}
const hero_three_content:hero_three_content_type = {
    sub_title: "Isometric Hosting",
    title: "Simple, Affordable Hosting Backed By Expert Support."
}
const {sub_title, title} = hero_three_content

const HeroHomeThree = () => {
    return (
        <>
           <section className="slider-area position-relative">
                <div className="slider-acs">
                    <div className="single-slider hero-slider d-flex align-items-center pt-130">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="slider-text slider-text-2 slider-text-3">
                                        <span className="d-block wow fadeInUp animated" data-wow-delay="0.3s">
                                            {sub_title}
                                        </span>
                                        <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                                            {title}
                                        </h2>
                                    </div>
                                     <div className="slider-text-three-btn wow fadeInUp animated" data-wow-delay="0.9s">
                                       <a href="#" className="btn text-btn-three bg-btn-color">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                   <div className="slider-right-img wow fadeInRight animated" data-wow-delay="1.3s">
                                      <Image src={illustration_img} alt="theme-pure" />
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

export default HeroHomeThree;