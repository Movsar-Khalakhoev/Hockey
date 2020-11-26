import React, {useEffect, useState} from 'react'
import styles from './SpareBench.module.sass'
import Header from './Header/Header'
import Filters from '../../../../UI/Filters/Filters'
import Container from './Container/Container'
import {connect} from 'react-redux'
import { useLocation } from 'react-router-dom'
import {getSpareBenchAction} from '../../../../redux/actions/SpareBench'

const SpareBench = ({commandFiltersList, playerFiltersList, getItems}) => {
  const [activeFiltersList, setActiveFiltersList] = useState([])
  const [newFilter, setNewFilter] = useState(null)
  const [filters, setFilters] = useState({})
  const location = useLocation()
  let timeout

  function onChangeFiltersListHandler(value, action) {
    setActiveFiltersList(value)
    if (action.option) {
      setNewFilter(action.option.value)
    } else if (action.removedValue) {
      const clonedFilters = {...filters}
      delete clonedFilters[action.removedValue.value]
      setFilters(clonedFilters)
      setNewFilter(null)

      setUpdatedItemsList(clonedFilters)
    }
  }

  function setUpdatedItemsList(filters) {
    const pathArr = location.pathname.split('/')
    getItems(filters, pathArr[pathArr.length - 1])
  }

  function onChangeFilterHandler(event, filterName) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      const text = event.target.value
      setFilters({...filters, [filterName]: text})

      setUpdatedItemsList({...filters, [filterName]: text})
    }, 500)
  }

  useEffect(() => {
    setActiveFiltersList([])
    setNewFilter(null)
    setFilters({})
  }, [location.pathname])

  return (
    <div className={styles.spare_bench}>
      <Header />

      <div className={styles.content}>
        <Filters
          isOverlay={true}
          commandFiltersList={commandFiltersList}
          playerFiltersList={playerFiltersList}
          onChangeFiltersList={(value, action) => onChangeFiltersListHandler(value, action)}
          activeFilters={activeFiltersList || []}
          addedFilter={newFilter}
          onChangeFilterInput={onChangeFilterHandler}
        />
        <Container />
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    commandFiltersList: state.spareBench.commandFiltersList,
    playerFiltersList: state.spareBench.playerFiltersList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: (filters, mode) => dispatch(getSpareBenchAction(filters, mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpareBench)