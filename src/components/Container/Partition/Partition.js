import React from 'react'
import Arenas from './Arenas/Arenas'
import {Route} from 'react-router-dom'
import Arena from './Arena/Arena'
import styles from './Partition.module.sass'

const Partition = () => {
  return (
    <div className={styles.partition}>
      <Route exact path='/app/arenas' component={Arenas} />
      <Route path='/app/arenas/:id' component={Arena} />
    </div>
  )
}

export default Partition