import Image from "next/image";
import "../../../../app/globals.css";

const banners = [
  {
    id: "1",
    imageUrl: "/images/browse.png",
  },
];

export default function BrowseBannerSec() {
  return (
    <div className="lg:m-10">
      {banners.map((banner) => (
        <div key={banner.id} className="relative h-100 lg:h-136 w-full  flex items-center justify-center">
          <Image
            src={banner.imageUrl}
            alt="Browse banner"
            fill
            className="object-contain rounded-xl p-6"
          />
        </div>
      ))}
    </div>
  );
}
