import React from 'react'
import Arenas from './Arenas/Arenas'
import {Route} from 'react-router-dom'
import Arena from './Arena/Arena'

const Partition = props => {
  return (
    <div>
      <Route exact path='/app/arenas' component={Arenas} />
      <Route path='/app/arenas/:id' component={Arena} />
    </div>
  )
}

export default Partition