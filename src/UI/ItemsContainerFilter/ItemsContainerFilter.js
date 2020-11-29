import React, {useEffect, useState} from 'react'
import Filters from '../Filters/Filters'
import styles from './ItemsContainerFilter.module.sass'
import {useLocation} from 'react-router-dom'
import {getFilterContainerAction} from '../../redux/actions/FilterContainer'
import {connect} from 'react-redux'
import Hamburger from '../Hamburger/Hamburger'

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
  const [filtersComponentActive, setFiltersComponentActive] = useState(false)
  const [itemsCount, setItemsCount] = useState(null)
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
    setItemsCount(props[path].length)
    getItems(filters, path)
    console.log(itemsCount)
  }

  function onChangeFilterHandler(event, filterName, path) {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      const text = event.target.value
      setFilters({...filters, [filterName]: text})

      setUpdatedItemsList({...filters, [filterName]: text}, path)
    }, 500)
  }

  function changeFiltersComponentState() {
    setFiltersComponentActive(!filtersComponentActive)
  }

  useEffect(() => {
    setActiveFiltersList([])
    setFilters({})
  }, [location.pathname])

  return (
    <div className={`${contentClass} ${styles.content}`}>
      <Hamburger
        isActive={filtersComponentActive}
        className={styles.hamburger}
        linesColor='#fff'
        text='Фильтры'
        textClassName={styles.hamburger_text}
        wrapperClassName={styles.hamburger_wrapper}
        linesClassName={styles.hamburger_lines}
        onClick={changeFiltersComponentState}
      />
      <Filters
        {...filterAttrs}
        onChangeFiltersList={onChangeFiltersListHandler}
        activeFilters={activeFiltersList || []}
        onChangeFilterInput={onChangeFilterHandler}
        className={filtersComponentActive ? '' : styles.filters}
        itemsCount={itemsCount}
      />
      <div className={`${containerClass} ${styles.container}`}>
        {children}
        <span className={styles.overlay}/>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    spareBench_commands: state.filterContainer.spareBench_commands,
    spareBench_players: state.filterContainer.spareBench_players
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getItems: (filters, mode) => dispatch(getFilterContainerAction(filters, mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainerFilter)