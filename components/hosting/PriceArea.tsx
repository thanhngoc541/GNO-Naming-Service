import Link from "next/link";
import priceing_data_two from "../data/priceing-data-2";

interface priceing_all_data_type {
    priceing_sidebar: string[];
    price_data: {
        id: number;
        cls: string;
        title: string;
        price: number;
        yeatly_price: number;
        text_btn: string;
        price_list: string[];
    }[];
}

const priceing_all_data: priceing_all_data_type = {
    priceing_sidebar: [
         "Teams","Users","Bandwidth","Hosting","Speed","Storage","Email","Domain",
    ],
    price_data: [
        {
            id: 1, 
            cls: "",
            title: "Basic",
            price: 56,
            yeatly_price: 88,
            text_btn: "Create Account",
            price_list: [
                "10","120","60mbps","100GB","100MB","5TB","500","100",
            ]

        },
        {
            id: 2, 
            cls: "active",
            title: "Core",
            price: 99,
            yeatly_price: 120,
            text_btn: "Purchase Now",
            price_list: [
                "10","220","100mbps","150GB","140MB","512TB","800","300",
            ]

        },
        {
            id: 3, 
            cls: "",
            title: "Advanced",
            price: 289,
            yeatly_price: 320,
            text_btn: "Create Account",
            price_list: [
                "66","236","80mbps","500GB","400MB","30TB","900","1200",
            ]

        },
    ]
}
const {priceing_sidebar, price_data}  = priceing_all_data



const PriceArea = ({style} : any) => {
    return (
        <>
            <div className={`price-area pt-110 ${style ? "pb-120" : "pb-90"}`}>
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center mb-70">
                            <h2>Price & Plans</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">                          

                            <ul className="nav price-tabs mb-5" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="home-tab-pane"
                                        aria-selected="true"
                                        tabIndex={-1}
                                    >Monthly Plan <i className="fal fa-angle-left"></i>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile-tab-pane"
                                        aria-selected="false"
                                        tabIndex={-1}
                                    >Yearly pricing for save -35% <i className="fal fa-angle-left"></i> </button>
                                </li> 
                            </ul>


                            {style ? 
                            <div className="tab-content" id="myTabContent">
                                {priceing_data_two.map((price, index) => 
                                <div key={index} className={`tab-pane fade ${price.active}`} id={price.data_bs_target} role="tabpanel" aria-labelledby={price.tab_id}>
                                    <div className="price-table white-bg table-responsive">
                                    <table className="table">
                                        <thead className="theme-bg">
                                            <tr>
                                                {price.thead.map((item, in_item) => 
                                                    <th key={in_item} scope="col">{item}</th>
                                                )} 
                                            </tr>
                                        </thead>
                                            <tbody>
                                                {price.prince_data.map((price_d, in_data) =>
                                                    <tr key={in_data}>
                                                        <td className="tb-title">{price_d.plan}</td>
                                                        <td>{price_d.ssd_disk_space}</td>
                                                        <td>{price_d.bandwidth}</td>
                                                        <td>{price_d.email_sql_DB}</td>
                                                        <td>{price_d.sub_domain}</td>
                                                        <td>${price_d.price}.00</td>
                                                    </tr>                                                
                                                )}
                                            </tbody>                                      
                                        
                                    </table>
                                    </div>
                                </div>
                                
                                )} 
                         </div>


                            : 
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"> 
                                    <div className="row no-gutters">
                                        <div className="col-xl-3 col-lg-3 col-mg-4 d-none d-lg-block">
                                            <div className="price-sidebar mb-30">
                                                <ul>
                                                    {priceing_sidebar.map((item, i) => <li key={i}>{item}<i className="fal fa-plus"></i></li>)} 
                                                </ul>
                                            </div>
                                        </div>
                                        {price_data.map((price_item, index ) => 
                                            <div key={index} className="col-xl-3 col-lg-3 col-mg-4">
                                                <div className={`price-wrapper ${price_item.cls} text-center mb-30`}>
                                                <div className="price-details">
                                                    <span>{price_item.title}</span>
                                                    <h4 className="price"><sub>$</sub>{price_item.price}<sub>.00</sub></h4>
                                                    <Link className="btn price-btn" href="#">{price_item.text_btn}</Link>
                                                </div>
                                                <ul className="price-content">
                                                    {price_item.price_list?.map((list , i_list) => <li key={i_list}>{list}</li> )} 
                                                </ul>
                                                </div>
                                            </div>  
                                        )} 
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab"> 
                                <div className="row no-gutters">
                                        <div className="col-xl-3 col-lg-3 col-mg-4 d-none d-lg-block">
                                            <div className="price-sidebar mb-30">
                                                <ul>
                                                    {priceing_sidebar.map((item, i) => <li key={i}>{item}<i className="fal fa-plus"></i></li>)} 
                                                </ul>
                                            </div>
                                        </div>
                                        {price_data.map((price_item, index ) => 
                                            <div key={index} className="col-xl-3 col-lg-3 col-mg-4">
                                                <div className={`price-wrapper ${price_item.cls} text-center mb-30`}>
                                                <div className="price-details">
                                                    <span>{price_item.title}</span>
                                                    <h4 className="price"><sub>$</sub>{price_item.yeatly_price}<sub>.00</sub></h4>
                                                    <a className="btn price-btn" href="#">{price_item.text_btn}</a>
                                                </div>
                                                <ul className="price-content">
                                                    {price_item.price_list?.map((list , i_list) => <li key={i_list}>{list}</li> )} 
                                                </ul>
                                                </div>
                                            </div>  
                                        )} 
                                    </div>
                                </div>
                            </div>
                            }
                                                        


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceArea;