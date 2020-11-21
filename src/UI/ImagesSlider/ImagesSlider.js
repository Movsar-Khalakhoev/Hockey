import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from "./ImagesSlider.module.sass"
import SliderArrow from "./SliderArrows/SliderArrow";
import Slide from "./Slide/Slide";

const ImagesSlider = (props) => {

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
    <div
      style={{width: props.width, height: props.height}}
      className={styles.images}
    >
      <Slider {...settings}>
        {
          props.images.map((image, index) =>
            <Slide
              key={index}
              image={image}
              width={props.width}
              height={props.height}
            />)
        }
      </Slider>
    </div>
  )
}

export default ImagesSlider
