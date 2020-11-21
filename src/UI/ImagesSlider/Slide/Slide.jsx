import React from "react"
import styles from "./Slide.module.sass"

const Slide = (props) => {
  return (
    <div style={{width: props.width, height: props.height}}>
      <img
        style={{width: props.width, height: props.height}}
        className={styles.image}
        src={props.image}
        alt="Картинка"
      />
    </div>
  )
}

export default Slide