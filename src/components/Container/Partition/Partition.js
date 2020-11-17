import React from 'react'
import styles from './Partition.module.sass'
import Arenas from './Arenas/Arenas'
import {Route} from 'react-router-dom'

const Partition = props => {
  return (
    <div>
      <Route path='/app/arenas' component={Arenas} />
    </div>
  )
}

export default Partition