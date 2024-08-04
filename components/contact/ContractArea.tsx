import ContactForm from "../forms/ContactForm";

const ContractArea = () => {
    return (
        <>
            <section className="Contract-area gray-bg pt-115 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="section-title text-center mb-70">
                                <h2>Get In Touch</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />                  
                
                </div>
            </section>
        </>
    );
};

export default ContractArea;