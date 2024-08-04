import Link from "next/link";
import Image from "next/image";
import Tags from "../blogs/Tags";
import AboutMe from "../blogs/AboutMe";
import SearchBox from "../blogs/SearchBox";
import SocialLinks from "../common/social-links";
import CategoriesArea from "../blogs/CategoriesArea";
import PopularNewsFeeds from "../blogs/PopularNewsFeeds";

import instafed_img_1 from "../../public/assets/img/blog/ins1.jpg";
import instafed_img_2 from "../../public/assets/img/blog/ins2.jpg";
import instafed_img_3 from "../../public/assets/img/blog/ins3.jpg";
import instafed_img_4 from "../../public/assets/img/blog/ins4.jpg";
import instafed_img_5 from "../../public/assets/img/blog/ins5.jpg";
import instafed_img_6 from "../../public/assets/img/blog/ins1.jpg";

import banner from "../../public/assets/img/blog/details/banner.png";
import PostComments from "../forms/PostComments";
import CommentsBox from "./CommentsBox";


const BlogDetailsArea = () => {
    return (
        <>
            <section className="blog-area gray-bg pt-120 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <article className="postbox post format-image mb-40">
                        <div className="postbox__thumb">
                           <img src="assets/img/blog/b1.jpg" alt="blog image" />
                        </div>
                        <div className="postbox__text potsbox_single">
                           <div className="post-meta mb-15">
                              <span><i className="far fa-calendar-check"></i> September 15, 2018 </span>
                              <span><a href="#"><i className="far fa-user"></i> Diboli B. Joly</a></span>
                              <span><a href="#"><i className="far fa-comments"></i> 23 Comments</a></span>
                           </div>
                           <h3 className="blog-title">
                              If you find yourself constantly bookmarking health sections on news.
                           </h3>
                           <div className="post-text mb-20">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                 aliquip ex ea commodo.
                              </p>
                              <p>Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                 laborum. Sed ut perspiciatis
                                 unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                 aperiam, eaque ipsa quae ab
                                 illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                                 enim ipsam voluptatem quia
                                 voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                 ratione voluptatem sequi
                                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                 adipisci velit, sed quia non
                                 numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                 voluptatem.
                              </p>
                              <blockquote>
                                 <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                 <footer>- Rosalina Pong</footer>
                              </blockquote>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna
                                 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                 aliquip ex ea commodo consequat.
                                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                 nulla pariatur. Excepteur sint
                                 occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                              </p>
                              <div className="blog-inner-img mb-30 mt-30">
                                 <img src="assets/img/blog/b3.jpg" alt="blog image" />
                              </div>
                              <div className="inner-content">
                                 <h4>A cleansing hot shower or bath</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur
                                    sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.
                                 </p>
                              </div>
                              <div className="inner-content">
                                 <h4>Setting the mood with incense</h4>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur
                                    sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia.
                                 </p>
                              </div>
                           </div>
                           <div className="row mt-50">
                              <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                 <div className="blog-post-tag">
                                    <span>Releted Tags</span>
                                    <a href="#">organic</a>
                                    <a href="#">Foods</a>
                                    <a href="#">tasty</a>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                                 <div className="blog-share-icon text-left text-md-right">
                                    <span>Share: </span>
                                    <SocialLinks /> 
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-12">
                                 <div className="navigation-border pt-50 mt-40"></div>
                              </div>
                              <div className="col-xl-5 col-lg-5 col-md-5">
                                 <div className="bakix-navigation b-next-post text-left mb-30">
                                    <span><a href="#">Prev Post</a></span>
                                    <h4><a href="#">Tips on Minimalist</a></h4>
                                 </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 col-md-2 ">
                                 <div className="bakix-filter text-left text-md-center mb-30">
                                    <a href="#"><img src="assets/img/icon/filter.png" alt="theme-pure" /></a>
                                 </div>
                              </div>
                              <div className="col-xl-5 col-lg-5 col-md-5">
                                 <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                                    <span><a href="#">Next Post</a></span>
                                    <h4><a href="#">Tips on Minimalist</a></h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="author mt-80 mb-40">
                           <div className="author-img text-center">
                              <img src="assets/img/blog/details/author.png" alt="theme-pure" />
                           </div>
                           <div className="author-text text-center">
                              <h3>MD. Salim Rana</h3>
                              <div className="author-icon">
                                 <a href="#"><i className="fab fa-facebook-f"></i></a>
                                 <a href="#"><i className="fab fa-twitter"></i></a>
                                 <a href="#"><i className="fab fa-behance-square"></i></a>
                                 <a href="#"><i className="fab fa-youtube"></i></a>
                                 <a href="#"><i className="fab fa-vimeo-v"></i></a>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                 incididunt ut labore et
                                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                 nisi ut aliquip ex
                                 ea commodo consequa aute irure dolor. 
                              </p>
                           </div>
                        </div>
                        <CommentsBox /> 
                        <div className="post-comments-form">
                           <div className="post-comments-title">
                              <h2>Post Comments</h2>
                           </div>
                           <PostComments /> 
                        </div>
                     </article>
                  </div>


                  <div className="col-lg-4">
                        <SearchBox /> 
                        <AboutMe  /> 
                        <PopularNewsFeeds /> 
                        <CategoriesArea /> 
                        <div className="widget mb-40">
                            <div className="widget-title-box mb-30">
                            <span className="animate-border"></span>
                            <h3 className="widget-title">Social Profile</h3>
                            </div>
                            <div className="social-profile">
                                <SocialLinks /> 
                            </div>
                        </div>
                        <div className="widget mb-40">
                            <div className="widget-title-box mb-30">
                            <span className="animate-border"></span>
                            <h3 className="widget-title">Instagram Feeds</h3>
                            </div>
                            <ul id="Instafeed">
                            <li><Link href="#"><Image src={instafed_img_1} alt="theme-pure" /></Link></li>
                            <li><Link href="#"><Image src={instafed_img_2} alt="theme-pure" /></Link></li>
                            <li><Link href="#"><Image src={instafed_img_3} alt="theme-pure" /></Link></li>
                            <li><Link href="#"><Image src={instafed_img_4} alt="theme-pure" /></Link></li>
                            <li><Link href="#"><Image src={instafed_img_5} alt="theme-pure" /></Link></li>
                            <li><Link href="#"><Image src={instafed_img_6} alt="theme-pure" /></Link></li>
                            </ul>
                        </div>
                        <Tags /> 
                        <div className="widget mb-40 p-0 b-0">
                            <div className="banner-widget">
                            <Link href="#"><Image src={banner} alt="theme-pure" /></Link>
                            </div>
                        </div>
                </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default BlogDetailsArea;