

interface City {
    name: string
}

const cities: City[] = [
    {
        name: "Peshawar"
    },
      {
        name: "Mardan"
    },
    {
        name: "Islamabad"
    },
    {
        name: "Karachi"
    },
    {
        name: "Quetta"
    },
    {
        name: "Chaman"
    },
    {
        name: "Hangu"
    },
    {
        name: "Landikotal"
    },
    {
        name: "Kohat"
    },
    {
        name: "Sawabi"
    },
    {
        name: "Hyderabad"
    },
    {
        name: "Multan"
    },
    {
        name: "Abbottabad"
    },
    {
        name: "Lahore"
    },
    {
        name: "Parachinar"
    },
    {
        name: "Faisalabad"
    },
     {
        name: "Peshawar"
    },
      {
        name: "Mardan"
    },
    {
        name: "Islamabad"
    },
    {
        name: "Karachi"
    },
    {
        name: "Quetta"
    },
    {
        name: "Chaman"
    },
    {
        name: "Hangu"
    },
    {
        name: "Landikotal"
    },
    {
        name: "Kohat"
    },
    {
        name: "Sawabi"
    },
    {
        name: "Hyderabad"
    },
    {
        name: "Multan"
    },
    {
        name: "Abbottabad"
    },
    {
        name: "Lahore"
    },
    {
        name: "Parachinar"
    },
    {
        name: "Faisalabad"
    }
]

export const City= () => {
    return(
        <div className="mx-auto overflow-x-auto scroll-smooth hide-scrollbar">
            <div className="grid grid-rows-2 grid-flow-col auto-cols-[130px] lg:auto-cols-[150px] gap-4 m-8 lg:m-10">
            { cities.map((city) => (
                <div className="bg-gray-50 justify-center items-center p-4">{city.name}</div>
            ))}

        </div>
        </div>
        
    )

}