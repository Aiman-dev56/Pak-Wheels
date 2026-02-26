// cities dropdown

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
    <div className="mt-8 flex justify-center">
      <div className="relative w-full max-w-2xl">
        
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
          className="w-full h-12 rounded-md bg-white pl-12 pr-4 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Dropdown Icon */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <RiArrowDownSLine size={22} />
        </button>

        {/* Dropdown List */}
        {open && (
          <div
            className="
              absolute top-full mt-2 w-full 
              max-h-60 overflow-y-auto 
              rounded-md bg-white shadow-lg border border-gray-200
              transition-all duration-200 ease-in-out text-black
              z-50
            "
          >
            {filteredCities.length === 0 ? (
              <p className="p-3 text-gray-500">No city found</p>
            ) : (
              filteredCities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleSelectCity(city)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
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
