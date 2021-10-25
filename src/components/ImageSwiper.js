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
        
        <div className={cn("kitchen")}>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
        <div className={cn("kitchen2")}>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        
        <div className={cn("kitchen3")}>
          
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

// export default ImageSwiper;
