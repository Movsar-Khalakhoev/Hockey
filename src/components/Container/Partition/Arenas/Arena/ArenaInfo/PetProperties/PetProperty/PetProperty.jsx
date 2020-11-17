import React from "react"
import styles from "./PetProperty.module.css"

const PetProperty = (props) => {
  return (
    <p className={styles.property}>
      {props.property}:
      <span className={styles.property_value}>{props.property_value}</span>
    </p>
  )
}

export default PetProperty
