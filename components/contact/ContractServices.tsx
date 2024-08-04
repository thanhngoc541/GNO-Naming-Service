import Link from "next/link";
// contact content data type
interface contact_service_data_type {
    id: number;
    icon: string;
    title: string;
    info: JSX.Element;
    action: string;
}
// contact content 
const contact_service_data: contact_service_data_type[] = [
    {
        id: 1,
        icon: "fal fa-map-marker-alt",
        title: "Office Location",
        info: <>475/W 13th Street, Cooper New York, United States</>, 
        action: "Find Us On Map",
    },
    {
        id: 2,
        icon: "fal fa-clock",
        title: "Office Hour",
        info: <>Mon - Fri: 09:00am to 07.00pm Sat - Sun: Off Day</>, 
        action: "Get Directions",
    },
    {
        id: 3,
        icon: "fal fa-phone",
        title: "Phone Number",
        info: <>+909 797 6896 <br /> +(786) 7876 5675</>, 
        action: "Call Now",
    },
    {
        id: 4,
        icon: "fal fa-envelope",
        title: "Email Address",
        info: <>info@webmail.com info@example.web.com</>, 
        action: "Mail Us",
    },
]

const ContractServices = () => {
    return (
        <>
            <section className="contract-services-area pb-90">
                <div className="container">
                    <div className="row">
                        {contact_service_data.map((item, i) =>   
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="contract-services-box text-center mb-30">
                                    <div className="mb-35">
                                     <Link href="#"><i className={item.icon}></i></Link>
                                    </div>
                                    <div className="contract-services-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                        <span><Link href="#">{item.action}</Link></span>
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

export default ContractServices;