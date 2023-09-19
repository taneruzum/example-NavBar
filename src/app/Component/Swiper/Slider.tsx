import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css';
import '../Swiper/slider.css'




function Slider() {
  return (
    
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <Swiper
        // install Swiper modules
        modules={[Navigation,Autoplay,]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        //autoplay={{ delay: 3000,disableOnInteraction:false}}
        loop={true}
        
        >
        <SwiperSlide><img src="././images/1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/4.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/5.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/6.jpg" /></SwiperSlide>
        <SwiperSlide><img src="././images/7.jpg" /></SwiperSlide>
    </Swiper>
    </main>
    
    
  )
}

export default Slider

