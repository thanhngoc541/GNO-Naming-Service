

interface priceing_data_two_type {
    id: number;
    active: string,
    tab_id: string,
    data_bs_target: string,
    thead: string[];
    prince_data: {
        id: number;
        plan: string;
        ssd_disk_space: string;
        bandwidth: string;
        email_sql_DB: string;
        sub_domain: string;
        price: number;
    }[];
}[]

const priceing_data_two: priceing_data_two_type[] = [
    {
        id: 1, 
        tab_id: "home-tab",
        data_bs_target:"home-tab-pane",
        active: "show active",
        thead: ["Plan","SSD Disk Space","Bandwidth","Email (SQL DB)","Sub Domain","Price",],
        prince_data : [
            {
                id: 1,
                plan: "Student",
                ssd_disk_space: "100MB",
                bandwidth: "5GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price: 450,
            },
            {
                id: 2,
                plan: "Economy",
                ssd_disk_space: "130MB",
                bandwidth: "8GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price: 450,
            },
            {
                id: 3,
                plan: "Basic",
                ssd_disk_space: "200MB",
                bandwidth: "5GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price:  200,
            }, 
            {
                id: 4,
                plan: "Classic",
                ssd_disk_space: "300MB",
                bandwidth: "5GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price:  300 ,
            }, 
            {
                id: 5,
                plan: "Deluxe",
                ssd_disk_space: "350MB",
                bandwidth: "20GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price:  450 ,
            }, 
            {
                id: 6,
                plan: "Popular",
                ssd_disk_space: "400MB",
                bandwidth: "5GB",
                email_sql_DB : "30 (03)",
                sub_domain: "1",
                price:  550 ,
            }, 
            {
                id: 7,
                plan: "Email",
                ssd_disk_space: "450MB",
                bandwidth: "22GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price:  500,
            }, 
            {
                id: 8,
                plan: "Corporate",
                ssd_disk_space: "500MB",
                bandwidth: "5GB",
                email_sql_DB : "50 (03)",
                sub_domain: "1",
                price:  800 ,
            }, 
        ]

    },
    {
        id: 2, 
        tab_id: "profile-tab",
        data_bs_target:"profile-tab-pane",
        active: "",
        thead: ["Plan","SSD Disk Space","Bandwidth","Email (SQL DB)","Sub Domain","Price",],
        prince_data : [
            {
                id: 1,
                plan: "Student",
                ssd_disk_space: "100MB",
                bandwidth: "10GB",
                email_sql_DB : "25 (03)",
                sub_domain: "2",
                price: 470,
            },
            {
                id: 2,
                plan: "Economy",
                ssd_disk_space: "230MB",
                bandwidth: "18GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price: 450,
            },
            {
                id: 3,
                plan: "Basic",
                ssd_disk_space: "2000MB",
                bandwidth: "15GB",
                email_sql_DB : "35 (03)",
                sub_domain: "5",
                price:  300,
            }, 
            {
                id: 4,
                plan: "Classic",
                ssd_disk_space: "3000MB",
                bandwidth: "50GB",
                email_sql_DB : "115 (03)",
                sub_domain: "11",
                price:  500 ,
            }, 
            {
                id: 5,
                plan: "Deluxe",
                ssd_disk_space: "3050MB",
                bandwidth: "200GB",
                email_sql_DB : "15 (03)",
                sub_domain: "1",
                price:  550 ,
            }, 
            {
                id: 6,
                plan: "Popular",
                ssd_disk_space: "4000MB",
                bandwidth: "56GB",
                email_sql_DB : "30 (03)",
                sub_domain: "16",
                price:  5560 ,
            }, 
            {
                id: 7,
                plan: "Email",
                ssd_disk_space: "9050MB",
                bandwidth: "22GB",
                email_sql_DB : "105 (03)",
                sub_domain: "30",
                price:  5050,
            }, 
            {
                id: 8,
                plan: "Corporate",
                ssd_disk_space: "5000MB",
                bandwidth: "59GB",
                email_sql_DB : "50 (03)",
                sub_domain: "19",
                price:  8000 ,
            }, 
        ]

    },
    
]
export default priceing_data_two


                 
 
