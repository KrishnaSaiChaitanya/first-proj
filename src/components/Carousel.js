import { Navigation, Pagination, Scrollbar, A11y, Mousewheel ,Autoplay } from 'swiper';
import "./carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

export default function Carousel () {
    // {const swiper = new Swiper('.swiper', {
    //     autoplay: {
    //       delay: 5000,
    //     },
    //    });}
      

// Now you can use all slider methods like

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 319"><path fill="#0099ff" fill-opacity="1" d="M0,32L34.3,32C68.6,32,137,32,206,69.3C274.3,107,343,181,411,213.3C480,245,549,235,617,208C685.7,181,754,139,823,122.7C891.4,107,960,117,1029,138.7C1097.1,160,1166,192,1234,186.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    <Swiper  style={{height: "45vh", width: "70vw", boxShadow: "35px 0px 58px 0px rgba(0,0,0,0.75)", borderRadius:"30px", alignItems: "center", backgroundColour: "black"}}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation = {true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide >
        <Zoom duration={3000}>
        <h1>Hello World!</h1>
        <div style={{display:"flex"}}>
        <img style={{height : "180px", width :"180px"}} src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png'/>
        <Fade left delay  = {4000}>
          <h5>React Reveal</h5>
        </Fade>
        </div>
        
        </Zoom>
        
        
      </SwiperSlide>
      <SwiperSlide><h1>Hello World!</h1>
        <p>Second Slide</p></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  );
};