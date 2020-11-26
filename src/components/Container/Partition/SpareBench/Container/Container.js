import React from 'react'
import styles from './Container.module.sass'
import {Route, Switch} from 'react-router-dom'
import Commands from './Commands/Commands'
import Players from './Players/Players'
import {getSpareBenchAction} from '../../../../../redux/actions/SpareBench'
import {connect} from 'react-redux'

const Container = ({filters, getItems}) => {

  // function getFilteredList(items) {
  //   const clonedItems = []
  //
  //   items.forEach(item => {
  //     let isRight = true
  //     Object.keys(filters).forEach(filter => {
  //       const filterValue = filters[filter].toLowerCase().trim()
  //       const itemValue = item[filter] ? item[filter].toLowerCase().trim() : ''
  //
  //       if (filterValue !== '' && (!itemValue || !itemValue.startsWith(filterValue))) {
  //         isRight = false
  //       }
  //     })
  //     if (isRight) clonedItems.push({...item})
  //   })
  //   return clonedItems
  // }
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Switch>
          <Route path='/app/spareBench/commands' render={
            () => {
              return <Commands />
            }
          } />
          <Route path='/app/spareBench/players' render={
            () => {
              return <Players />
            }
          } />
          <Route exact path='/app/spareBench' render={ () =>
            <p className={styles.nothing}>Выберите категорию</p>
          }
          />
        </Switch>
      </div>
      <span className={styles.overlay}/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: (filters, mode) => dispatch(getSpareBenchAction(filters, mode))
  }
}

export default connect(null, mapDispatchToProps)(Container)