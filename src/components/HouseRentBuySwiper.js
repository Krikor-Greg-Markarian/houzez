// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FeaturedListingsitem from "./FeaturedListingsitem";
import cn from "classnames";

export default ({ featuredListingsItems }) => {
  return (
    <Swiper
      className={cn("w-7/12")}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {featuredListingsItems.data.map((item, idx) => (
        <SwiperSlide className={cn("py-16 flex justify-center items-center")}>
          <FeaturedListingsitem
            key={idx}
            imageUrl={item.imageUrl}
            featureIsSelected={item.featureIsSelected}
            featured={item.featured}
            rentIsSelected={item.rentIsSelected}
            forRent={item.forRent}
            price={item.price}
            isVisible={item.isVisible}
            perSquarPrice={item.perSquarPrice}
            title={item.title}
            location={item.location}
            numberOfBedroom={item.numberOfBedroom}
            bedrooms={item.bedrooms}
            numberOfBathroom={item.numberOfBathroom}
            bathroom={item.bathroom}
            spaceMeters={item.spaceMeters}
            space={item.space}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
