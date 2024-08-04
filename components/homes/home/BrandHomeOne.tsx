"use client"
import Slider  from 'react-slick';
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// brand data images 
import brand_1 from "../../../public/assets/img/brand/brand3.png";
import brand_2 from "../../../public/assets/img/brand/brand2.png";
import brand_3 from "../../../public/assets/img/brand/brand1.png";
import brand_4 from "../../../public/assets/img/brand/brand4.png";
import brand_5 from "../../../public/assets/img/brand/brand5.png";
import brand_6 from "../../../public/assets/img/brand/brand1.png";
// brand data type
interface brand_images_type {
    img: StaticImageData;
}
// brand data 
const brand_images: brand_images_type[] = [
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
    {img: brand_4},
    {img: brand_5},
    {img: brand_6},
    {img: brand_1},
    {img: brand_2},
    {img: brand_3},
    {img: brand_4},
    {img: brand_5},
    {img: brand_6},
]
// slider setting
const setting = {
    dots: false, 
    arrows: false, 
    infinite: true, 
    speed: 300, 
   slidesToShow: 5, 
   slidesToScroll: 1, 
   responsive: [ 
     { 
       breakpoint: 1024, 
       settings: { 
         slidesToShow: 4, 
         slidesToScroll:1, 
         infinite: true, 
         dots: false, 
       } 
     }, 
     { 
       breakpoint: 600, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 2
 
       } 
     }, 
     { 
       breakpoint: 480, 
       settings: { 
         slidesToShow: 2, 
         slidesToScroll: 1 
       } 
     } 
   ] 
 }
const BrandHomeOne = ({style} : any) => {
    const sliderRef = useRef(null);
    return (
        <> 
            <section className={`brand-area ${style && "pt-120"} pb-120`}>
                <div className="container">
                    <Slider {...setting} ref={sliderRef} className="row brand-active">
                        {brand_images.map((item, i) => 
                            <div key={i} className="col-12">
                                <div className="single-brand">
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            </div>                        
                        )} 
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default BrandHomeOne;