import React from 'react'
import imagen1 from './assets/imagen1.jpg'
import imagen2 from './assets/imagen2.jpg'
import imagen3 from './assets/imagen3.jpg'
import imagen4 from './assets/imagen4.jpg'
import imagen5 from './assets/imagen5.jpg'
import imagen6 from './assets/imagen6.jpg'
import imagen7 from './assets/imagen7.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'

//import './styles.css'
import 'swiper/css'

const Carusel2 = () => {
  
  const imagenes = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7]
  return (
    <div>
      <Swiper 
      spaceBetween={10} 
      slidesPerView={3} 
      loop 
      >
        {
          imagenes.map(i=>(
            <SwiperSlide key={i}>
              <img src={i} alt='landspaces images'/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carusel2