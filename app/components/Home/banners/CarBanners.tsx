import { CommonSlider } from "../../common/sliders";

const banners = [
    {
        id: "1",
        imageUrl: "/images/banner1.png"
    },
    {
        id: "2",
        imageUrl: "/images/banner2.png"
    },
    {
        id: "3",
        imageUrl: "/images/banner3.png"
    },
    {
        id: "4",
        imageUrl: "/images/banner4.png"
    }
];



export default function BannerSec() {
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10">
        <CommonSlider
      items={banners}
      autoplay
      showPagination
      slidesOnDesktop={1}
      slidesOnLargeScreens={1}
      renderItem={(banner) => (
        <div
          className="h-[300px] rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${banner.imageUrl})` }}
        />
      )}
    />
    </div>
  );
}