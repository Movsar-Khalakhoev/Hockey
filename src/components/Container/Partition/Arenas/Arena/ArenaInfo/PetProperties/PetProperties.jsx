import React from "react"
import styles from "./PetProperties.module.css"
import PetProperty from "./PetProperty/PetProperty";

const PetProperties = (props) => {
  return (
    <div className={styles.properties}>
      {Object.keys(props.petProperties).map((property, index) => {
        return <PetProperty
                key={index}
                property={property}
                property_value={props.petProperties[property]}
              />
      })}
    </div>
  )
}

export default PetProperties