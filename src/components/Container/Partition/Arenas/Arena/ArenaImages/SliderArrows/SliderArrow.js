import React from "react"
import styles from "./SliderArrows.module.sass"

const SliderArrow = (props) => {
  return (
    <div
      className={
        `${props.direction ? styles.rightArrow : styles.leftArrow} ${props.className}`
      }
      onClick={props.onClick}
    >
    </div>
  )
}

export default SliderArrow