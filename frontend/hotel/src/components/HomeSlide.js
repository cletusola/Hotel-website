import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './homeslide.css'
const slideImages = [
  {
    url: 'img/6.png',
    caption: 'Slide 1'
  },
  {
    url: 'img/7.png',
    caption: 'Slide 2'
  },
  {
    url: 'img/5.png',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={true}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='the-img' style={{'backgroundImage': `url(${slideImage.url})`}}>
                {/* <span>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;
