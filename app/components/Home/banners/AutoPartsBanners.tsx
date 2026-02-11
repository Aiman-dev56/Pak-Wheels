import { CommonSlider } from "../../common/sliders";
import "@/app/globals.css";

const banners = [
    {
        id: "1",
        imageUrl: "/images/banner7.png"
    },
    {
        id: "2",
        imageUrl: "/images/banner8.png"
    }
];



export default function AutoPartsBannerSec() {
  return (
    <div className=" max-w-6xl lg:mx-auto p-4  lg:p-0  mt-10 mb-10">
        <CommonSlider
      items={banners}
      autoplay
      showPagination
      slidesOnDesktop={1}
      slidesOnLargeScreens={1}
      renderItem={(banner) => (
        <div
          className="lg:h-[300px] h-[180px]  rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${banner.imageUrl})` }}
        />
      )}
    />
    </div>
  );
}