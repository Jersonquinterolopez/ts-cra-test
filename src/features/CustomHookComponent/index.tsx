import { useMemo } from "react";
import useFetchData from "../../hooks/useFetchData"

interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

const CustomHookComponent = () => {
    const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json")
    const portlandTaps = useMemo(() => (data || []).filter(bev => bev.producerLocation.includes("Portland")), [data])

    return (
        <div>
            {portlandTaps.length && (
                <img src={portlandTaps![1].logo} alt="Beverage-logo" />
            )}
        </div>
    )
}

export default CustomHookComponent