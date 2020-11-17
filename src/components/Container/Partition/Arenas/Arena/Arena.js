import React from 'react'
import styles from './Arena.module.sass'
import ArenaImages from './ArenaImages/ArenaImages'
import ArenaInfo from './ArenaInfo/ArenaInfo'
import {NavLink} from 'react-router-dom'

const Arena = ({arena}) => {

  return (
    <div
      className={styles.card}
    >
      <ArenaImages
        images={arena.images}
      />
      <ArenaInfo
        info={arena}
      />
    </div>
  )
}

export default Arena