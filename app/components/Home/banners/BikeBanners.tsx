import { CommonSlider } from "../../common/sliders";

const banners = [
    {
        id: "1",
        imageUrl: "/images/banner5.png"
    },
    {
        id: "2",
        imageUrl: "/images/banner6.png"
    }
];



export default function BikeBannerSec() {
  return (
    <div className="container ">
      <div className=" max-w-8xl mx-auto p-10 lg:m-10  lg:p-0 mt-10 mb-10">
        <CommonSlider
      items={banners}
      autoplay
      showPagination
      slidesOnDesktop={1}
      slidesOnLargeScreens={1}
      renderItem={(banner) => (
        <div
          className="h-[300px] 2xl:h-[400px] rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${banner.imageUrl})` }}
        />
      )}
    />
    </div> 
    </div>
    
  );
}