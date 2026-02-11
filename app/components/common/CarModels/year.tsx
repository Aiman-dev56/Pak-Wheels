


interface Year {
    name: number
}

const years: Year[] = [
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

export const Year= () => {
    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 m-8 lg:m-10">
            { years.map((year) => (
                <div className="bg-gray-50 justify-center items-center p-4">{year.name}</div>
            ))}

        </div>
    )

}