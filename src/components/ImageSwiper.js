import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";

export default ({ featuredListingsItems }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          className={cn("w-full h-96 min-h-full")}
          src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={cn("w-full h-96 min-h-full")}
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={cn("w-full h-96 min-h-full")}
          src="https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160__340.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className={cn("w-full h-96 min-h-full")}
          src="https://cdn.pixabay.com/photo/2019/06/08/21/32/castle-4261029__340.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

// export default ImageSwiper;
