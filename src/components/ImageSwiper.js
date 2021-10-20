// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import cn from "classnames";

const ImageSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {" "}
        <img
          className={cn("w-full h-96")}
          src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756__340.jpg"
          alt=""
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className={cn("w-full h-96")}
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
          alt=""
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className={cn("w-full h-96")}
          src="https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160__340.jpg"
          alt=""
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className={cn("w-full h-96")}
          src="https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245__340.jpg"
          alt=""
        />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
