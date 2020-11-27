import React from 'react'
import Arenas from './Arenas/Arenas'
import {Route} from 'react-router-dom'
import Arena from './Arena/Arena'
import styles from './Partition.module.sass'
import SpareBench from './SpareBench/SpareBench'
import Cloakroom from './Cloakroom/Cloakroom'

const Partition = () => {
  return (
    <div className={styles.partition}>
      <Route exact path='/app/arenas' component={Arenas} />
      <Route path='/app/arenas/:id' component={Arena} />
      <Route path='/app/spareBench' component={SpareBench} />
      <Route path='/app/cloakroom' component={Cloakroom} />
    </div>
  )
}


export default Partition