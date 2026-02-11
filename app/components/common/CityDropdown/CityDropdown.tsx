//dropdown of cities

"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PakistanCities } from "./PakistanCities";
import { RiArrowDownSLine } from "react-icons/ri";

export const CityDropdown = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCities = useMemo(() => {
    return PakistanCities.filter((city) =>
      city.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleSelectCity = (city: string) => {
    setSearch(city);
    setOpen(false);

    const slug = city.toLowerCase().replace(/\s+/g, "-");
    router.push(`/cities/${slug}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[300px] lg:w-[55%] lg:mx-auto md:w-96  mt-8">
      {/* Input */}
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        className="w-full h-12 rounded-md border text-gray-700 bg-white pl-4 pr-10 outline-none"
      />

      {/* Dropdown Icon */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      >
        <RiArrowDownSLine size={20} className="cursor-pointer"/>
      </button>

      {/* Dropdown List */}
      {open && (
        <div className={`
    absolute top-10 overflow-y-auto mt-2 w-full rounded-md bg-white text-gray-600 shadow-lg
    transition-all duration-600 ease-in-out
    ${open
      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
      : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
  `}>
          {filteredCities.length === 0 ? (
            <p className="p-3 text-gray-500">No city found</p>
          ) : (
            filteredCities.map((city) => (
              <button
                key={city}
                onClick={() => handleSelectCity(city)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {city}
              </button>
            ))
          )}
        </div>
      )}
    </div>
    </div>
    
  );
};
