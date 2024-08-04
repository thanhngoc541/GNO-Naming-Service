import news_thumb_1 from "../../public/assets/img/blog/latest1.jpg";
import news_thumb_2 from "../../public/assets/img/blog/latest2.jpg";
import news_thumb_3 from "../../public/assets/img/blog/latest3.jpg";

import avatar_1 from "../../public/assets/img/blog/lat.png";
import avatar_2 from "../../public/assets/img/blog/let.png";
import avatar_3 from "../../public/assets/img/blog/let1.png";
import { StaticImageData } from "next/image";


interface news_data_type {
    id: number;
    news_thumb: StaticImageData;
    avatar: StaticImageData;
    name: string;
    date: string;
    title: string;
    news_blog: string;
}


const news_data: news_data_type[] = [
    {
        id: 1,
        news_thumb: news_thumb_1,
        avatar: avatar_1,
        name: "Aurthur William",
        date: "23 Mar 2023",
        title: "Hosting as far as the eye is can see! visitor.",
        news_blog: "ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        news_thumb: news_thumb_2,
        avatar: avatar_2,
        name: "Salim Rana",
        date: "23 Mar 2023",
        title: "Hosting as far as the eye is can see! visitor.",
        news_blog: "ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        news_thumb: news_thumb_3,
        avatar: avatar_3,
        name: "William Aurthur",
        date: "23 Mar 2023",
        title: "Hosting as far as the eye is can see! visitor.",
        news_blog: "ipsum dolor sit amet, consectetur adipis icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
export default news_data