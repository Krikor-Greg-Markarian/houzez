import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import cn from "classnames";
import { Container } from "postcss";
import ContemporaryApartment from "./ContemporaryApartment";

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
        <div className={cn("kitchen ")}>
          <ContemporaryApartment
            // key={idx}
            // title={item.title}
            // price={item.price}
            // description={item.description}
            // MdBed={item.MdBed}
            // MdOutlineWaterDrop={item.MdOutlineWaterDrop}
            // MdOutlineMap={item.MdOutlineMap}
            // apartment={item.apartment}
            title={"Ample Apartment"}
            price={"$1,900/mo"}
            description={"3617 Clarington Ave, Los Angeles, CA 90034, USA"}
            MdBed={"2"}
            MdOutlineWaterDrop={"1"}
            MdOutlineMap={"2300 Sq Ft"}
            apartment={"Apartment"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cn("kitchen2")}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={cn("kitchen3")}></div>
      </SwiperSlide>
    </Swiper>
  );
};

// export default ImageSwiper;
