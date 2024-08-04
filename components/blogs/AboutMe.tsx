import Image from "next/image";
import SocialLinks from "../common/social-links";
import profile_pic from "../../public/assets/img/blog/details/me.jpg";


interface about_me_content_type {
    sub_title: string;
    name: string;
    sm_info: string;
}

const about_me_content: about_me_content_type ={
    sub_title: "About Me",
    name: "Jamil Rayhan",
    sm_info: "I'am React js Develoeper,  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
}
const {sub_title, name, sm_info}  = about_me_content

const AboutMe = () => {
    return (
        <>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">{sub_title}</h3>
                </div>
                <div className="about-me text-center">
                <Image src={profile_pic} alt="theme-pure" />
                <h4>{name}</h4>
                <p>{sm_info}</p>
                <div className="widget-social-icon">
                    <SocialLinks  /> 
                </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;