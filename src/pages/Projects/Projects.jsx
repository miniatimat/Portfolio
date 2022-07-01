import React from "react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../../components/Project/Project";
import "./Projects.scss"

export default function Projects(){
  return(
    <div>
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
              <SwiperSlide>
                <Project image ={""} description={"Test Description"} repoLink={"link"}/>
              </SwiperSlide>
              <SwiperSlide>
                <Project image ={""} description={"Test Description 2"} repoLink={"link"}/>
              </SwiperSlide>
              <SwiperSlide>
                <Project image ={""} description={"Test Description 3"} repoLink={"link"}/>
              </SwiperSlide>
              <SwiperSlide>
                <Project image ={""} description={"Test Description 4"} repoLink={"link"}/>
              </SwiperSlide>
              <SwiperSlide>
                <Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
              </SwiperSlide>
            </section>
          </Swiper>
      </div>
    </div>
  )
}