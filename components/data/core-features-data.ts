import { StaticImageData } from "next/image";
import feature_img_1 from "../../public/assets/img/icon/core.png";
import feature_img_2 from "../../public/assets/img/icon/core1.png";
import feature_img_3 from "../../public/assets/img/icon/core2.png";
import feature_img_4 from "../../public/assets/img/icon/core4.png";
import feature_img_5 from "../../public/assets/img/icon/core5.png";
import feature_img_6 from "../../public/assets/img/icon/core6.png";

import feature_img_1_1 from "../../public/assets/img/icon/cf1.png";
import feature_img_1_2 from "../../public/assets/img/icon/cf2.png";
import feature_img_1_3 from "../../public/assets/img/icon/cf3.png";
import feature_img_1_4 from "../../public/assets/img/icon/cf4.png";
import feature_img_1_5 from "../../public/assets/img/icon/cf5.png";
import feature_img_1_6 from "../../public/assets/img/icon/cf6.png";


interface core_features_data_type {
    id: number;
    img: StaticImageData;
    img_2: StaticImageData;
    delay: string;
    title: string;
    title_2: string;
    sm_des: string;
    sm_des_2: string;
}

const core_features_data: core_features_data_type[] = [
    // for home 02
    {
        id: 1,
        img: feature_img_1,
        img_2: feature_img_1_1,
        delay:"0.7s",
        title: "Better Security and faster Server",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    },
    {
        id: 2,
        img: feature_img_2,
        img_2: feature_img_1_2,
        delay:"0.4s",
        title: "Better Speed With Full Panel",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    },
    {
        id: 3,
        img: feature_img_3,
        img_2: feature_img_1_3,
        delay:"0.5s",
        title: "360 Degree Office Box",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    },
    {
        id: 4,
        img: feature_img_4,
        img_2: feature_img_1_4,
        delay:"1s",
        title: "Get best plans for more Power",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    },
    {
        id: 5,
        img: feature_img_5,
        img_2: feature_img_1_5,
        delay:"0.7s",
        title: "24/7 Online & Offline Support",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    },
    {
        id: 6,
        img: feature_img_6,
        img_2: feature_img_1_6,
        delay:"0.9s",
        title: "Better Security and faster Server",
        title_2: "Hosting Buy Service",
        sm_des: "ipsum dolor sit amet, consectetur adipisicing lorem elit, se tempor incididunt ut labore et dolore magna aliqua.",
        sm_des_2: "Let us negotiate a domain purchase based on your budget.",
    }, 
]

export default core_features_data