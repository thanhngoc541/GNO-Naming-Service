

interface subscription_data_type {
    id: number;
    title: string;
    sm_des: string;
    btn_text: string;
}

const subscription_data: subscription_data_type[] = [
    {
        id: 1, 
        title: "Recurring Subscriptions And Invoicing",
        sm_des: "Subscriptions and invoicing with auto-reconciliation and smart recovery tools. Free for your first $1 million recurring charges.",
        btn_text: "Billing",
    },
    {
        id: 2, 
        title: "Payments For Platforms And Marketplaces",
        sm_des: "Subscriptions and invoicing with auto-reconciliation and smart recovery tools. Free for your first $1 million recurring charges.",
        btn_text: "Connect",
    },
    {
        id: 3, 
        title: "Machine Learning Fraud, Built Into PioHost",
        sm_des: "Subscriptions and invoicing with auto-reconciliation and smart recovery tools. Free for your first $1 million recurring charges.",
        btn_text: "Billing",
    },
]
const SubscriptinHomeThree = () => {
    return (
        <>
           <section className="subscriptin-area gray-bg pt-120 pb-90">
              <div className="container">
                <div className="row">
                    {subscription_data.map((item, i)  => 
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="subscriptin-box mb-30 wow fadeIn" data-wow-delay="0.3s">
                                <div className="subscriptin-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.sm_des}</p>
                                    <div className="subscriptin-btn">
                                        <a href="#" className="btn btn-three">
                                            <i className="fal fa-money-bill"></i>{item.btn_text}
                                        </a>
                                    </div>
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

export default SubscriptinHomeThree;