import Link from "next/link";

const tags_data = [
    "Popular","desgin","usability","develop","consult","icon","HTML","ux","business","kit","keyboard","tech",
]

const Tags = () => {
    return (
        <>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">Instagram Feeds</h3>
                </div>
                <div className="tag">
                    {tags_data.map((item, i)  => <Link href="#" key={i}>{item}</Link>)} 
                </div>
            </div>
        </>
    );
};

export default Tags;