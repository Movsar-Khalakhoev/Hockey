import React, {useEffect, useState} from 'react'
import Filters from '../Filters/Filters'
import styles from './ItemsContainerFilter.module.sass'
import {useLocation} from 'react-router-dom'
import {getFilterContainerAction} from '../../redux/actions/FilterContainer'
import {connect} from 'react-redux'

const ItemsContainerFilter = props => {

  const {
    filterAttrs = {},
    children = [],
    contentClass = '',
    containerClass = '',
    getItems
  } = props

  const [activeFiltersList, setActiveFiltersList] = useState([])
  const [filters, setFilters] = useState({})
  const location = useLocation()
  let timeout

  function onChangeFiltersListHandler(value, action, path) {
    setActiveFiltersList(value)
    if (action.removedValue) {
      const clonedFilters = {...filters}
      delete clonedFilters[action.removedValue.value]
      setFilters(clonedFilters)

      setUpdatedItemsList(clonedFilters, path)
    }
  }

  function setUpdatedItemsList(filters, path) {
    getItems(filters, path)
  }

  function onChangeFilterHandler(event, filterName, path) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      const text = event.target.value
      setFilters({...filters, [filterName]: text})

      setUpdatedItemsList({...filters, [filterName]: text}, path)
    }, 500)
  }

  useEffect(() => {
    setActiveFiltersList([])
    setFilters({})
  }, [location.pathname])

  return (
    <div className={`${contentClass} ${styles.content}`}>
      <Filters
        {...filterAttrs}
        onChangeFiltersList={onChangeFiltersListHandler}
        activeFilters={activeFiltersList || []}
        onChangeFilterInput={onChangeFilterHandler}
      />
      <div className={`${containerClass} ${styles.container}`}>
        {children}
        <span className={styles.overlay}/>
      </div>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    getItems: (filters, mode) => dispatch(getFilterContainerAction(filters, mode))
  }
}

export default connect(null, mapDispatchToProps)(ItemsContainerFilter)