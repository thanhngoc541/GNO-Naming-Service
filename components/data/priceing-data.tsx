
interface priceing_data_type {
    id: number;
    best_value: boolean;
    title: string;
    info: string;
    price: number;
    save?: number;
    price_features: (JSX.Element | undefined)[];
}

const priceing_data:priceing_data_type[] = [
    {
        id: 1,
        best_value: false,
        title: "Starter",
        info: "More power for complex sites and heavy traffic.",
        price: 34, 
        price_features: [
            <><span>1</span>website</>,
            <><span>30 GB</span>bandwidth</>,
            <><span>Unmetered</span>website</>,

        ]
    },
    {
        id: 2,
        best_value: true,
        title: "Economy",
        info: "More power for complex sites and heavy traffic.",
        price: 95,
        save: 62,
        price_features: [
            <><span>1</span>website</>,
            <><span>30 GB</span>bandwidth</>,
            <><span>Unmetered</span>website</>,
            <><span>Professional Email</span>- 1-year trial</>,
            <><span>Free domain</span>- annual plan </>,

        ]
    },
    {
        id: 3,
        best_value: false,
        title: "Ultimate",
        info: "More power for complex sites and heavy traffic.",
        price: 54,
        save: 62,
        price_features: [
            <><span>1</span>website</>,
            <><span>30 GB</span>bandwidth</>,
            <><span>Unmetered</span>website</>,
            <><span>Professional Email</span>- 1-year trial</>,
            <><span>Free domain</span>- annual plan </>,
        ]
    },
]
export default priceing_data