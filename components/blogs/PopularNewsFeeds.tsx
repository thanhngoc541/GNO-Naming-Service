import popular_img_1 from "../../public/assets/img/blog/ins5.jpg";
import popular_img_2 from "../../public/assets/img/blog/ins4.jpg";
import popular_img_3 from "../../public/assets/img/blog/ins3.jpg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface popular_news_type {
    title: string;
    popular_news_data: {
        id: number;
        img: StaticImageData;
        time: string;
        title: string;
    }[];
}

const popular_news: popular_news_type = {
    title: "Popular Feeds",
    popular_news_data: [
        {
            id: 1, 
            img: popular_img_1,
            time: "October 18, 2023",
            title: "Give Us Pics, Video To Support #MeToo Allegations: Cops To Wrestlers"
        },
        {
            id: 2, 
            img: popular_img_2,
            time: "October 18, 2023",
            title: "British Soldiers Faint In Front Of Prince William Amid The Scorching London Heat"
        },
        {
            id: 3, 
            img: popular_img_3,
            time: "October 18, 2023",
            title: "Cyclone Biparjoy Turns Into =Extremely Severe Cyclonic Storm: 10 Points"
        },
    ]

}
const {title, popular_news_data }  = popular_news

const PopularNewsFeeds = () => {
    return (
        <>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">{title}</h3>
                </div>
                <ul className="recent-posts">
                    {popular_news_data.map((item, i)  => 
                        <li key={i}>
                            <div className="widget-posts-image">
                                <Link href="/blog-details"><Image src={item.img} alt="theme-pure" /></Link>
                            </div>
                            <div className="widget-posts-body">
                                <h6 className="widget-posts-title"><Link href="/blog-details">{item.title}</Link>
                                </h6>
                                <div className="widget-posts-meta">{item.time}</div>
                            </div>
                        </li>                    
                    )} 
                </ul>
            </div>
        </>
    );
};

export default PopularNewsFeeds;