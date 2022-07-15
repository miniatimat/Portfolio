import React from "react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "../../components/Project/Project";
import "./Projects.scss"
import "swiper/css/bundle"
import { useTranslation } from "react-i18next";


const mercadont = require("../../images/projects/mercadon't.png")
const algoTeg = require("../../images/projects/AlgoTeg.png")
const spotyPy = require("../../images/projects/SpotiPy.jpg")
const dogFacts = require("../../images/projects/DogFacts.png")
export default function Projects() {
  const { t, i18n } = useTranslation();


  return (
      <div className="div-slide">
        <Swiper
            loop={true}
            modules={[Navigation, FreeMode, Pagination]}
            navigation={true}
            pagination={{clickable:true}}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },

            }}
            className="mySwiper"
        >
          <section className="section-products-slider">
            <SwiperSlide>
              <Project
                  image ={mercadont}
                  title={"Mercadon't Libre"}
                  description={" FullStack Web Developer bootcamp " +
                  "Soyhenry's Final Project. Where we developed an E-commerce web app where we had to apply all that we " +
                  "had learnt in the course of four months.\n" +
                  "The E-commerce is presented towards the fashion industry, but we've made it flexible enough so as " +
                  "to it being able to adapt to whatever trade that is required."}
                  repoLink={"https://github.com/GutierrezLD/Proyecto-Final"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Project
                  image ={algoTeg}
                  title={"Java RISK"}
                  description={"Java Application which matches the strategy game RISK in which " +
                  "multiple people fight to complete their objectives. Project was made based in Object Oriented" +
                      " Programing using Java, and JavaFX for our graphical interface"}
                  repoLink={"https://github.com/miniatimat/RISK_Java"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Project
                  image ={spotyPy}
                  title={"SpotyPy"}
                  description={"SpotiPy is a graph simulation of Spotify where we have songs, which are linked together " +
                      "when a user has them added to the same playlist."}
                  repoLink={"https://github.com/miniatimat/SpotyPy"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Project
                  image ={dogFacts}
                  title={"Dog Facts"}
                  description={"JavaScript Fullstack Web Application in which a user can research facts about different" +
                      "dog breeds. These include a representative picture of the breed, their height range, weight range," +
                      "lifespan and common temperaments observed on the breed. \n" +
                      "All of the data is taken from 'thedogapi.com'. The user can also add new information about breeds" +
                      "that are not in the API database"}
                  repoLink={"https://github.com/miniatimat/PI-Dogs-main"}/>
            </SwiperSlide>
          </section>
        </Swiper>
      </div>
  );
}



/*
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
            <SwiperSlide>
              {"Project 1"//<Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
                  }
            </SwiperSlide>
            <SwiperSlide>
              {"Project 2"//<Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
                   }
            </SwiperSlide>
            <SwiperSlide>
              {"Project 3"//<Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
              }
            </SwiperSlide>
            <SwiperSlide>
              {"Project 4"//<Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
                   }
            </SwiperSlide>
            <SwiperSlide>
              {"Project 5"//<Project image ={""} description={"Test Description 5"} repoLink={"link"}/>
                  }
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}*/
