


interface YearBikes {
    name: number
}

const years: YearBikes[] = [
    {
        name: 1950
    },
      {
        name: 1951
    },
    {
        name: 1952
    },
    {
        name: 1953
    },
    {
        name: 1954
    },
    {
        name: 1955
    },
    {
        name: 1956
    },
    {
        name: 1957
    },
    {
        name: 1958
    },
    {
        name: 1959
    },
    {
        name: 1960
    },
    {
        name: 1961
    },
    {
        name: 1962
    },
    {
        name: 1963
    },
    {
        name: 1964
    },
    {
        name: 1965
    },
     {
        name: 1950
    },
      {
        name: 1951
    },
    {
        name: 1952
    },
    {
        name: 1953
    },
    {
        name: 1954
    },
    {
        name: 1955
    },
    {
        name: 1956
    },
    {
        name: 1957
    },
    {
        name: 1958
    },
    {
        name: 1959
    },
    {
        name: 1960
    },
    {
        name: 1961
    },
    {
        name: 1962
    },
    {
        name: 1963
    },
    {
        name: 1964
    },
    {
        name: 1965
    },
]

export const YearBikes= () => {
    return(
        <div className="mx-auto overflow-x-auto scroll-smooth hide-scrollbar">
             <div className="grid grid-rows-2 grid-flow-col auto-cols-[130px] lg:auto-cols-[150px] gap-4 m-8 lg:m-10">
            { years.map((year) => (
                <div className="bg-gray-50 justify-center items-center p-4">{year.name}</div>
            ))}

        </div>
        </div>
       
    )

}