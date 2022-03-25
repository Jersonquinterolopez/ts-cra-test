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

    return (
        <div>
            {done && (
                <img src={data![5].logo} alt="Beverage-logo" />
            )}
        </div>
    )
}

export default CustomHookComponent