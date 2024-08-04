"use client"
import Tags from "../Tags";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "../AboutMe";
import SearchBox from "../SearchBox";
import CategoriesArea from "../CategoriesArea";
import PopularNewsFeeds from "../PopularNewsFeeds";
import SocialLinks from "../../common/social-links";

import instafed_img_1 from "../../../public/assets/img/blog/ins1.jpg";
import instafed_img_2 from "../../../public/assets/img/blog/ins2.jpg";
import instafed_img_3 from "../../../public/assets/img/blog/ins3.jpg";
import instafed_img_4 from "../../../public/assets/img/blog/ins4.jpg";
import instafed_img_5 from "../../../public/assets/img/blog/ins5.jpg";
import instafed_img_6 from "../../../public/assets/img/blog/ins1.jpg";

import banner from "../../../public/assets/img/blog/details/banner.png";
import blog_img_1 from "../../../public/assets/img/blog/b1.jpg";
import blog_img_2 from "../../../public/assets/img/blog/b2.jpg"; 

import blog_slider_1 from "../../../public/assets/img/blog/b3.jpg";
import blog_slider_2 from "../../../public/assets/img/blog/b4.jpg";
import blog_slider_3 from "../../../public/assets/img/blog/b5.jpg";

import Slider from "react-slick";
import { useRef, useState } from "react";
import VideoPopup from "../../modals/video-popup";
// blog content
const blog_content =  [ 
    {
        id: 1, 
        cls: "format-image",
        just_thumb: true,
        img: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "But there is a downside. Simply running a search for medical blogs.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 2, 
        cls: "format-video",
        video: true,
        videoID: "Y6MlVop80y0",
        img_thumb: blog_img_2,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "When Do We Need A Design System? An Interview With Brad Frost.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 3, 
        cls: "format-gallery", 
        slider: true,
        slider_img: [
            blog_slider_1,
            blog_slider_2,
            blog_slider_3,
        ],
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "Exploring The Latest Web Design Trends Together With Be Theme?.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },
    {
        id: 4, 
        cls: "format-audio",
        audio: true,
        audioID: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/469608615&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        img_thumb: blog_img_1,
        date: "September 15, 2023",
        post_by: "Diboli B. Joly",
        comments: "23",
        title: "If you find yourself constantly bookmarking health sections on news.",
        sm_des: <>There’s a good chance Everyday Health is the most appropriately named blog on this list
        because it focuses on the health topics that consistently affect a wide range of people. They also get kudos for
        addressing the emotional challenges folks face when managing conditions.</>,
    },

] 
// slider setting 
const setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300, 
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
const BlogArea = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    // const sliderRef = useRef()
    const sliderRef = useRef<Slider | null>(null);

    const handlePrev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };
  
    const handleNext = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };
    return (
        <>
            <section className="blog-area gray-bg pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8"> 
                            {blog_content.map((item, i)  => 
                                <article key={i} className="postbox post format-image mb-40">
                                    {item.just_thumb && 
                                        <div className="postbox__thumb">
                                            <a href="#">
                                                <Image src={blog_img_1} alt="blog image" />
                                            </a>
                                        </div> 
                                    }
                                    {item.video &&
                                        <div className="postbox__video">
                                            <Image src={item.img_thumb}  alt="theme-pure" />
                                            <button className="popup-video video-btn" 
                                                onClick={() => setIsVideoOpen(true)}
                                                style={{ cursor: "pointer" }}>
                                                <i className="fas fa-play"></i>
                                            </button> 
                                        </div>                                  
                                    }
                                    {item?.slider && 
                                        <div className="postbox__gallery mb-30 slick-slider"> 
                                            <button type="button" className="slick-prev slick-arrow" 
                                            onClick={handlePrev}>
                                                    <i className="fas fa-arrow-left"></i>
                                                </button>
                                                <button type="button" className="slick-next slick-arrow" 
                                                onClick={handleNext}>
                                                    <i className="fas fa-arrow-right"></i>
                                                </button>
                                            <Slider {...setting} ref={sliderRef}>
                                                {item.slider_img.map((sl_img, index) =>
                                                    <Image key={index} src={sl_img}  alt="theme-pure" /> 
                                                )}
                                            </Slider> 
                                        </div>
                                    }
                                    {item?.audio && 
                                        <div className="postbox__audio embed-responsive embed-responsive-16by9 mb-30">
                                            <iframe src={item.audioID}></iframe>
                                        </div>
                                    }
                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span><i className="far fa-calendar-check"></i> {item.date}</span>
                                            <span><a href="#"><i className="far fa-user"></i>{item.post_by}</a></span>
                                            <span><a href="#"><i className="far fa-comments"></i> {item.comments} Comments</a></span>
                                        </div>
                                        <h3 className="blog-title">
                                            <a href="#">{item.title}</a>
                                        </h3>
                                        <div className="post-text mb-20">
                                            <p>{item.sm_des}</p>
                                        </div>
                                        <div className="read-more mt-30">
                                            <a href="#" className="btn btn-2">read more</a>
                                        </div>
                                    </div>
                               </article>  
                            )} 

                            <article className="postbox post format-quote mb-40">
                                <div className="post-text">
                                <blockquote>
                                    <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                    <footer>- Rosalina Pong</footer>
                                </blockquote>
                                </div>
                            </article>


                            <div className="basic-pagination basic-pagination-2 mb-40">
                                <ul>
                                <li><Link href="#"><i className="fas fa-angle-double-left"></i></Link></li>
                                <li><Link href="#">01</Link></li>
                                <li className="active"><Link href="#">02</Link></li>
                                <li><Link href="#">03</Link></li>
                                <li><Link href="#"><i className="fas fa-ellipsis-h"></i></Link></li>
                                <li><Link href="#"><i className="fas fa-angle-double-right"></i></Link></li>
                                </ul>
                            </div>
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

             {/* video modal start */}
             <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"g1u2_-Xz8qw"} />
            {/* video modal end */}
        </>
    );
};

export default BlogArea;