import FaqContactFormArea from "../forms/FaqContactFormArea";


const FaqContactForm = () => {
    return (
        <>
            <section className="contact-form-area gray-bg pt-115 pb-120">
            <div className="container">
               <div className="form-wrapper">
                  <div className="row">
                     <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="section-title text-center mb-70">
                           <h2>Get In Touch</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. 
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="contact-form">
                    <FaqContactFormArea /> 
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default FaqContactForm;