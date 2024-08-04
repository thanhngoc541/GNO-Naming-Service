"use client"

const FaqContactFormArea = () => {
  return (
    <>
      <form id="contact-form"  onClick={e => e.preventDefault()}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-box user-icon mb-30">
              <input type="text" name="name" placeholder="Your Name" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box email-icon mb-30">
              <input type="text" name="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box phone-icon mb-30 phone_icon">
              <input type="text" name="phone" placeholder="Your Phone" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box subject-icon mb-30">
              <input type="text" name="subject" placeholder="Your Subject" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-box message-icon mb-30">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="contact-btn text-center">
              <button className="btn btn-2 btn-icon ml-0" type="submit">
                get action
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FaqContactFormArea;
