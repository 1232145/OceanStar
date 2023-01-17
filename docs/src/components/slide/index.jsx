import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps } from 'react-multi-carousel/lib/types'
import React from 'react';
import '../slide/index.css'
import image1 from '../image/Mask Group 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  
const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
    onMove,
    carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
};
  
const Slider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 
        }
      };

      return (
      <Carousel className="carousel-container" responsive={responsive}
                CustomRightArrow={<FontAwesomeIcon icon={faArrowRight}/>}
                CustomLeftArrow={<FontAwesomeIcon icon={faArrowLeft}/>}>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
        <div className="carousel-items"><img className="carousel-img" src={image1} alt="" /></div>
      </Carousel>
      )
}

export default Slider;