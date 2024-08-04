 

interface accordion_data_type {
    id: number;
    question: string;
    answer: JSX.Element;
    accordion_id: string;
    collapsed: string;
    aria_expanded: boolean;
    show: string;
}
 const accordion_data: accordion_data_type[] = [
        {
            id: 1,
            question: "How do I give my computer a static local IP address?",
            answer: <>But we dolor eiusmod tempor incididunt ut labore et dolore magna aliqua. sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </>,    
            accordion_id: "One",
            collapsed: "", 
            aria_expanded: true, 
            show: "show"
        },
        {
            id: 2,
            question: "Why can't people connect to the web server?",
            answer: <>But we dolor eiusmod tempor incididunt ut labore et dolore magna aliqua. sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </>,    
            accordion_id: "Two",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 3,
            question: "What domain name should I choose site?",
            answer: <>But we dolor eiusmod tempor incididunt ut labore et dolore magna aliqua. sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },  
 ]

const FAQHomeOne = () => {
    return (
        <>
            <section className="faq-area grad-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-img mb-30">
                                <img className="bounce-animate" src="/assets/img/bg/illustration.png" alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 ">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title section-title-white mb-70">
                                    <span>Faq</span>
                                    <h3>Get Every Single Answer
                                    From Here.</h3>
                                    <h4>We're here to help. Get in touch and we'll get back to you
                                    as soon as we can.</h4>
                                </div>
                                <div className="faq-box">
                                    <div className="accordion" id="accordionExample">
                                    {accordion_data.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                <button
                                                className={`accordion-button ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}`}>
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}`}
                                                data-bs-parent="#accordionExample" >
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))} 
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

export default FAQHomeOne;