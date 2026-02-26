import Image from "next/image";
import "../../../../app/globals.css";
import mobilesec from "@/public/images/mobilesec.png";

const banners = [
  {
    id: "1",
    imageUrl: "/images/browse.png",
  },
 
];

export default function BrowseBannerSec() {
  return (
    <div className="container">
      <div className="max-w-8xl p-10 mx-auto mt-10 mb-10">

      {/* Desktop Banner */}
      <div className="hidden md:block relative w-full">
        {banners.map((banner) => (
          <Image
            key={banner.id}
            src={banner.imageUrl}
            alt="Browse banner"
            width={500}
            height={500}
            className="object-contain rounded-xl w-full"
          />
        ))}
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden relative w-full px-4">
        <Image
          src={mobilesec}
          alt="Mobile banner"
          height={300}
          width={400}
          className="object-contain"
        />
      </div>

    </div>
    </div>
    
  );
}


