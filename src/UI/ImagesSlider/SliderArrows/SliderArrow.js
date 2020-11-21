import React from "react"
import styles from "./SliderArrows.module.sass"

const SliderArrow = (props) => {
  return (
    <span
      className={
        `${props.direction ? styles.rightArrow : styles.leftArrow} ${props.className}`
      }
      onClick={props.onClick}
    >
    </span>
  )
}

export default SliderArrow