// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default ({ item }) => {
  return (
    <Swiper
      className="m-10 my-20"
      spaceBetween={50}
      slidesPerView={item}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
    >
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">Food</h1>
        <p className="text-slate-500 py-2">Here is amazing food collaction.</p>
      </SwiperSlide>
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">Shoes</h1>
        <p className="text-slate-500 py-2">Here is amazing Shoes collaction.</p>
      </SwiperSlide>
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">T-Shart</h1>
        <p className="text-slate-500 py-2">
          Here is amazing T-Shart collaction.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">Accessorics</h1>
        <p className="text-slate-500 py-2">
          Here is amazing Accessorics collaction.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">Hear item</h1>
        <p className="text-slate-500 py-2">
          Here is amazing Hear item collaction.
        </p>
      </SwiperSlide>
      <SwiperSlide className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center">
        <h1 className="text-2xl">Others</h1>
        <p className="text-slate-500 py-2">
          Here is amazing Others collaction.
        </p>
      </SwiperSlide>
    </Swiper>
  );
};
