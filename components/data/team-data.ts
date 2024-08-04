import { StaticImageData } from "next/image";
import team_avatar_1 from  "../../public/assets/img/team/team01.jpg";
import team_avatar_2 from  "../../public/assets/img/team/team02.jpg";
import team_avatar_3 from  "../../public/assets/img/team/team03.jpg";
import team_avatar_4 from  "../../public/assets/img/team/team04.jpg";
import team_avatar_5 from  "../../public/assets/img/team/team05.jpg";
import team_avatar_6 from  "../../public/assets/img/team/team06.jpg"; 


import team_shape from  "../../public/assets/img/shape/team-shape.png";

interface team_data_type {
    id: number;
    shape: StaticImageData;
    avatar: StaticImageData;
    name: string;
    job_title: string;
    sm_info: string;
}[]

const team_data: team_data_type[] = [
    {
        id: 1,
        shape: team_shape,
        avatar:  team_avatar_1,
        name: "Rosalina D.William",
        job_title: "founder",
        sm_info: "adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur",
    },
    {
        id: 2,
        shape: team_shape,
        avatar:  team_avatar_2,
        name: "William D.Rosalina",
        job_title: "ceo",
        sm_info: "consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, incididunt ut labore et dolore.",
    },
    {
        id: 3,
        shape: team_shape,
        avatar:  team_avatar_3,
        name: "Salman Muktadir",
        job_title: "marketer",
        sm_info: "eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
    },
    {
        id: 4,
        shape: team_shape,
        avatar:  team_avatar_4,
        name: "Kohinur Tabassum",
        job_title: "marketer",
        sm_info: "eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
    },
    {
        id: 5,
        shape: team_shape,
        avatar:  team_avatar_5,
        name: "Mehedi Hasan",
        job_title: "Coder",
        sm_info: "eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
    },
    {
        id: 6,
        shape: team_shape,
        avatar:  team_avatar_6,
        name: "Afroza Akter",
        job_title: "Designer",
        sm_info: "eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
    },
]
export default team_data
