import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./stylesCarusel1.css"

const Carusel1 = () => {
    const images =[
        "https://i.postimg.cc/PqLYRrt2/mercedes-benz-g03c4a041e-640.jpg",
        "https://i.postimg.cc/25BLxcwt/car-ga79515ad8-640.jpg",
        "https://i.postimg.cc/x8gXdWfX/bmw-g43817e4d3-640.jpg",
        "https://i.postimg.cc/1RKnMNGy/car-gaafb7dede-640.jpg",
        "https://i.postimg.cc/cLPr67SB/koenigsegg-g54c00ccf7-640.jpg",
        "https://i.postimg.cc/d0dDC7QP/pagani-ge36c5bc98-640.jpg",
        "https://i.postimg.cc/1tQXr94g/bugatti-gff1ffd3c1-640.jpg",
        "https://i.postimg.cc/vTPmyfh9/lamborghini-aventador-gd7cf1701c-640.jpg",
    ]
  return (
        <Swiper 
            grabCursor
            centeredSlides
            slidesPerView="auto"
            effect="coverflow"
            loop
            coverflowEffect={{
                rotate: 0,
                stretch:0,
                depth:170,
                modifier:4,
                slideShadows:true,
            }}
            modules={[EffectCoverflow]}
        >
            <div className="swiper-wrapper">
                {
                    images.map((i)=>(
                        <SwiperSlide
                            key={i}
                            style={{background: `url(${i})`,
                            backgroundRepeat: 'no-repeat'
                        }}
                        />
                    ))
                }
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    
  )
}

export default Carusel1