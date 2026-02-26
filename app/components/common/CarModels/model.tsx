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
    },
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
    },
];


export const Model = () => {
    return (
        <div className="mx-auto overflow-x-auto scroll-smooth hide-scrollbar">
             <div className="grid grid-rows-2 grid-flow-col auto-cols-[130px] lg:auto-cols-[150px] gap-4 m-8 lg:m-16">
            {brands.map((brand) => (
                <div key={brand.name}
                className="flex justify-center items-center bg-gray-50 h-14 py-2"
                >
                    <Typography variant="h5" >{brand.name}</Typography>
                    

                </div>

            ))}

        </div>
        </div>
       
    )
}