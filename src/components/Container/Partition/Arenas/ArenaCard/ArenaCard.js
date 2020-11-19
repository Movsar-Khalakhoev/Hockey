import React from 'react'
import styles from './ArenaCard.module.sass'
import ImagesSlider from '../../../../../UI/ImagesSlider/ImagesSlider'
import ArenaInfo from './ArenaInfo/ArenaInfo'

const ArenaCard = ({arena}) => {

  return (
    <div
      className={styles.card}
    >
      <ImagesSlider
        images={arena.images}
        width='230px'
        height='230px'
      />
      <ArenaInfo
        info={arena}
      />
    </div>
  )
}

export default ArenaCard