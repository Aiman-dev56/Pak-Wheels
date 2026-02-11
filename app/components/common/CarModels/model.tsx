import { Typography } from "../Typography";


interface Model {
    name: string
}

const brands: Model[] = [
    {
        name: "Corolla"
    },
    {
        name: "Yaris CROSS"
    },
    {
        name: "Fortuner"
    },
    {
        name: "Crown"
    },
    {
        name: "VITZ"
    },
    {
        name: "Aqua"
    },
    {
        name: "Land Cruiser"
    },
    {
        name: "Camry"
    },
    {
        name: "Hilux"
    },
    {
        name: "Prius"
    },
    {
        name: "Raize"
    },
    {
        name: "Prado"
    },
    {
        name: "PASSO"
    },
    {
        name: "Yaris Sedan"
    },
    {
        name: "VITZ F"
    }
];


export const Model = () => {
    return (
        <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 m-8 lg:m-16">
            {brands.map((brand) => (
                <div key={brand.name}
                className="flex justify-center items-center bg-gray-50 h-14 py-2"
                >
                    <Typography variant="h5" >{brand.name}</Typography>
                    

                </div>

            ))}

        </div>
    )
}