import React from 'react'
import "./slider.css"
import Grid from '@mui/material/Unstable_Grid2';

function Cariousal() {
  return (
    
    <div>
      <Grid container spacing={2}>
        <Grid xs={12} md = {4}>
        <div className="img">
        <img style = {{height: "350px", width: "200px"}} src='https://o.remove.bg/downloads/d7978c74-466d-427d-b48a-9145261e62c5/LxCT-iPhone6-removebg-preview.png'/>
      </div>
        </Grid>
        <Grid xs ={12} md ={8}>
        <div class="slider">
  <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>
  <input type="radio" name="slider" title="slide2" class="slider__nav"/>
  <input type="radio" name="slider" title="slide3" class="slider__nav"/>
  <input type="radio" name="slider" title="slide4" class="slider__nav"/>
  <div class="slider__inner">
    <div class="slider__contents"><i class="slider__image fa fa-codepen"></i>
      <h2 class="slider__caption">code</h2>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents"><i class="slider__image fa fa-newspaper-o"></i>
      <h2 class="slider__caption">newspaper-o</h2>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents"><i class="slider__image fa fa-television"></i>
      <h2 class="slider__caption">television</h2>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
    <div class="slider__contents"><i class="slider__image fa fa-diamond"></i>
      <h2 class="slider__caption">diamond</h2>
      <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
    </div>
  </div>
  </div>
        </Grid>
      </Grid>
      
        

    </div>
  )
}

export default Cariousal