import Link from "next/link";


interface our_faq_content_type {
    title: string;
    sm_des: string;
    cate_title: string;
    categories: {
        title: string;
        items: string;
    }[];
    call_title: string;
    phone: string;
    faq_data: {
        id: number;
        title: string;
        sm_info: string;
    }[];
}


const our_faq_content: our_faq_content_type = {
    title: 'FAQ',
    sm_des: "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cate_title: "All Categories",
    categories: [
        {title: "Design", items: "12"},
        {title: "Development", items: "45"},
        {title: "Interior Design", items: "3"},
        {title: "Renovation", items: "6"},
        {title: "Home", items: "7"},
        {title: "Hotel", items: "9"},
        {title: "Accessories", items: "23"},
    ],
    call_title: "Make a call",
    phone: "+874(784) 65 57",
    faq_data: [
        {
            id: 1, 
            title: "Dream ipsum dolor sit amet, consectetur adipisicing.", 
            sm_info: "Exercitation ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 2, 
            title: "Adipisicing Dream ipsum dolor sit amet, consectetur.", 
            sm_info: "Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 3, 
            title: "Consectetur Dream ipsum dolor sit amet, consectetur adipisicing.", 
            sm_info: "Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 4, 
            title: "Dream ipsum dolor sit amet, consectetur adipisicing.", 
            sm_info: "Exercitation Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 5, 
            title: "Adipisicing Dream ipsum dolor sit amet, consectetur.", 
            sm_info: "Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 6, 
            title: "Dream ipsum dolor sit amet, consectetur adipisicing.", 
            sm_info: "Exercitation Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud",
        },
    ]

}
const {title, sm_des, cate_title, categories, call_title, phone, faq_data} = our_faq_content

const OurFaqArea = () => {
    return (
        <>
            <div className="our-faq-area pt-110 pb-90">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center mb-70">
                            <h2>{title}</h2>
                            <p>{sm_des}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="widget-area">
                            <div className="widget-wrapper mb-30">
                                <div className="widget-title mb-30">
                                    <span>{cate_title}</span><i className="fal fa-angle-right"></i>
                                </div>
                                <ul className="categories">
                                    {categories.map((item, i) =>
                                        <li key={i} className="cat-item"><Link href="#">{item.title}<span className="count">{item.items}</span></Link></li>                                    
                                    )} 
                                </ul>
                            </div>
                            <div className="make-call mb-30">
                                <span className="text-light">{call_title}</span>
                                <h4 className="text-light">{phone}</h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="row">
                                {faq_data.map((faq_item, index) => 
                                    <div key={index} className="col-xl-6 col-lg-6">
                                        <div className="faq-single-box mb-30 wow fadeIn" data-wow-delay=".3s">
                                            <div className="faq-title">
                                                <span>0{faq_item.id}</span>
                                                <h4>{faq_item.title}</h4>
                                            </div>
                                            <p>{faq_item.sm_info}</p>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurFaqArea;