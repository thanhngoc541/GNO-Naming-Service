
import user_1 from "../../public/assets/img/blog/details/comments1.png";
import user_2 from "../../public/assets/img/blog/details/comments2.png";
import user_3 from "../../public/assets/img/blog/details/comments1.png";
import Image, { StaticImageData } from "next/image";

interface comment_box_type {
    id: number;
    cls: string;
    img: StaticImageData;
    name: string;
    date: string;
    reply_text: JSX.Element;
}[]
const comment_box: comment_box_type[] = [
    {
        id: 1,
        cls: "",
        img: user_1,
        name: "Karon Balina",
        date: "19th May 2023",
        reply_text: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
    },
    {
        id: 2,
        cls: "children",
        img: user_2,
        name: "Julias Roy",
        date: "19th May 2023",
        reply_text: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
    },
    {
        id: 3,
        cls: "",
        img: user_3,
        name: "Arista Williamson",
        date: "19th May 2023",
        reply_text: <>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
    },
]

const CommentsBox = () => {
    return (
        <>
            <div className="post-comments">
                <div className="blog-coment-title mb-30">
                    <h2>03 Comments</h2>
                </div>
                <div className="latest-comments">
                    <ul>
                    {comment_box.map((item, i)  => 
                        <li key={i} className={item.cls}>
                            <div className="comments-box">
                            <div className="comments-avatar">
                                <Image src={item.img} alt="theme-pure" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>{item.name}</h5>
                                    <span>{item.date}</span>
                                    <a className="reply" href="#"><i className="fas fa-reply"></i>Reply</a>
                                </div>
                                <p>{item.reply_text}</p>
                            </div>
                            </div>
                        </li> 
                    )}  
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CommentsBox;