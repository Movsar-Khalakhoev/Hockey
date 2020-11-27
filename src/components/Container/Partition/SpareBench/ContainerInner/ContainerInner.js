import React from 'react'
import styles from './ContainerInner.module.sass'
import {Route, Switch} from 'react-router-dom'
import Commands from './Commands/Commands'
import Players from './Players/Players'

const ContainerInner = () => {

  return (
      <div className={styles.list}>
        <Switch>
          <Route path='/app/spareBench/commands' component={Commands} />
          <Route path='/app/spareBench/players' component={Players} />
          <Route exact path='/app/spareBench' render={ () =>
            <p className='nothing'>Выберите категорию</p>
          }
          />
        </Switch>
    </div>
  )
}

export default ContainerInner