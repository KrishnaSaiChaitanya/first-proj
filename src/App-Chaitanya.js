import logo from './logo.svg';
 import {CloudinaryContext, Image} from "cloudinary-react";
import './App.css';
import './styles.css';
import Button from '@mui/material/Button';
import Header from './Header';
import SimpleBackdrop from './SimpleBackdrop';
import Drawer from './components/Drawer';
import { IconButton } from '@mui/material';
import { SwipeableViews} from 'react-swipeable-views-utils';
import Swiper from 'swiper';
import { useEffect } from 'react';
import Notification from './components/Notification';
import ResponsiveAppBar from './components/App_bar';

function App() {
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
    <div>
    
<ResponsiveAppBar></ResponsiveAppBar>
<div class="header">


<div class="inner-header flex">
<Notification ></Notification>


</div>


<div>
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
      width="100px"
      height="100px"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use x="48" fill="rgba(255,255,255,0.7)" xlinkHref="#gentle-wave"></use>
        <use
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
          xlinkHref="#gentle-wave"
        ></use>
        <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave"></use>
      </g>
    </svg>
</div>


</div>





    </div>
  );
}

export default App;
