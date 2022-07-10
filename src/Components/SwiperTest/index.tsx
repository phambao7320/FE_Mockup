import CourseItem from "@components/CourseLists/CourseItem";
import { Swiper, SwiperSlide } from "swiper/react";

// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   Virtual
// } from "swiper/core";

import SwiperCore, { A11y, Navigation,Scrollbar,Virtual } from "swiper";
import 'swiper/scss';

SwiperCore.use([Navigation,Scrollbar,A11y,Virtual])

const SwiperTest = () => {
  return (
    <div>
        <Swiper
            virtual
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><CourseItem/></SwiperSlide>
            <SwiperSlide><CourseItem/></SwiperSlide>
            <SwiperSlide><CourseItem/></SwiperSlide>
            <SwiperSlide><CourseItem/></SwiperSlide>
            <SwiperSlide><CourseItem/></SwiperSlide>
            <SwiperSlide><CourseItem/></SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export default SwiperTest