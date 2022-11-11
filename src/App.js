import logo from './logo.svg';
 import {CloudinaryContext, Image} from "cloudinary-react";
import './App.css';
import './styles.css';
import Button from '@mui/material/Button';
import Header from './Header';
import SimpleBackdrop from './SimpleBackdrop';
import Drawer from './components/Drawer';
import { IconButton, Slider } from '@mui/material';
import { SwipeableViews} from 'react-swipeable-views-utils';
import Swiper from 'swiper';
import { useEffect } from 'react';
import Notification from './components/Notification';
import ResponsiveAppBar from './components/App_bar';

import Cariousal from './components/Slider';
import QuiltedImageList from './components/ImageList';
import ScrollTop from './components/ScrollTop';
import { useRef } from 'react';
import Waves from './components/Waves';
import Carousel from './components/Carousel';
import Cards from './components/Cards';

function App() {
  let mainDiv = useRef();
  useEffect(() => {
    let swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
  }, []);
  return (
    <div ref={mainDiv}>
    
<ResponsiveAppBar />
<ScrollTop parent={mainDiv} />
<div class="header">
<br></br>
<br/>
<div >
<Carousel />
<br/><br/><br/>
<Cariousal/>
</div>
<br/><br/>
<div>
  <SimpleBackdrop/>
  {/* <QuiltedImageList/> */}
</div>
<div className="vedio">
<video
    // id="my-video"
    // class="video-js"
    // controls
    // preload="auto"
    // width="640"
    // height="264"
    // poster="MY_VIDEO_POSTER.jpg"
    // data-setup="{}"
    src='https://en.wikipedia.org/wiki/File:Wood_cleaving_-_2016.webm'
  >
    {/* <source src="MY_VIDEO.mp4" type="video/mp4" />
    <source src="MY_VIDEO.webm" type="video/webm" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p> */}
  </video>
</div>

  <Cards/>

{/* <div class="inner-header flex">
<Notification ></Notification>


</div> */}


<Waves />


</div>





    </div>
  );
}

export default App;
