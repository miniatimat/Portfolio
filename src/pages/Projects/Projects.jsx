import React from "react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects(){
  return(
        <div className="div-slide">
          <Swiper
              loop={true}
              modules={[Navigation, FreeMode]}
              navigation={true}
              freeMode={true}
              breakpoints={{
                500: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
          >
            <section className="section-products ">
              Projects
            </section>
          </Swiper>
      </div>
  )
}