"use client"

const PostComments = () => {
    return (
        <>
            <form id="contacts-form" className="conatct-post-form" onSubmit={e => e.preventDefault()}>
                              <div className="row">
                                 <div className="col-xl-12">
                                    <div className="contact-icon contacts-message">
                                       <textarea name="comments" id="comments" cols={30} rows={10}
                                          placeholder="Your Comments...."></textarea>
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="contact-icon contacts-name">
                                       <input type="text" placeholder="Your Name.... " />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="contact-icon contacts-email">
                                       <input type="email" placeholder="Your Email...."  />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="contact-icon contacts-website">
                                       <input type="text" placeholder="Your Website...." /> 
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <button className="btn btn-2" type="submit">Post comment</button>
                                 </div>
                              </div>
                           </form>
        </>
    );
};

export default PostComments;