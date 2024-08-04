
interface Categories_data_type {
    id: number;
    categorie: string;
    items: number;
}[]

const Categories_data: Categories_data_type[] = [
    {id: 1, categorie: "Lifestyle", items: 78 },
    {id: 2, categorie: "Travel", items: 42 },
    {id: 3, categorie: "Fashion", items: 32 },
    {id: 4, categorie: "Music", items: 85 },
    {id: 5, categorie: "Branding", items: 5 },
]
const CategoriesArea = () => {
    return (
        <>
            <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                <span className="animate-border"></span>
                <h3 className="widget-title">Categories</h3>
                </div>
                <ul className="cat">
                    {Categories_data.map((item, i) => 
                        <li key={i}>
                            <a href="#">{item.categorie} <span className="f-right">{item.items}</span></a>
                        </li>
                    
                    )} 
                </ul>
            </div>
        </>
    );
};

export default CategoriesArea;