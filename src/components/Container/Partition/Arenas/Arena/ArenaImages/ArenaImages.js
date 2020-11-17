import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./ArenaImages.module.sass"
import SliderArrow from "./SliderArrows/SliderArrow";
import Slide from "./Slide/Slide";

const ArenaImages = (props) => {

  const settings = {
    adaptiveHeight: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow direction={true} />,
    prevArrow: <SliderArrow direction={false} />,
    dotsClass: `slick-dots ${styles.pagination}`
  }

  return (
    <div className={styles.images}>
      <Slider {...settings}>
        {
          props.images.map((image, index) => <Slide key={index} image={image} />)
        }
      </Slider>
    </div>
  )
}

export default ArenaImages
