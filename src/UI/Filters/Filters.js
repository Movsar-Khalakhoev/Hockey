import React, {useState} from 'react'
import styles from './Filters.module.sass'
import Select from 'react-select'
import Input from '../Input/Input'
import {Route, Switch} from 'react-router-dom'

const Filters = props => {
  const [newFilter, setNewFilter] = useState(null)

  const {
    isOverlay,
    selectFiltersList = [],
    onChangeFiltersList = (...args) => {},
    activeFilters = [],
    onChangeFilterInput = (...args) => {}
  } = props

  function updateFiltersList(value, action, path) {
    if (action.option) {
      setNewFilter(action.option.value)
    } else if (action.removedValue) {
      setNewFilter(null)
    }
    onChangeFiltersList(value, action, path)
  }

  function SelectComponent(options, index, path) {
    return (
      <>
        <Select
          key={index}
          options={options}
          isMulti
          isClearable={false}
          onChange={(value, action) => updateFiltersList(value, action, path)}
          placeholder='Выберите фильтр'
        />
        <div className={styles.list}>
          {
            activeFilters.map(filter => {
              return <Input
                key={filter.value}
                isFocus={filter.value === newFilter}
                filterLabel={filter.label}
                filterValue={filter.value}
                onChange={(value, filter) => onChangeFilterInput(value, filter, path)}
              />
            })
          }
        </div>
      </>
    )
  }

  return (
    <div className={styles.filters}>
      <div className={styles.content}>
        <Switch>
          {
            selectFiltersList.map((filtersInfo, index) => {
              return <Route
                key={index}
                exact={filtersInfo.exact ? filtersInfo.exact : false}
                path={filtersInfo.renderPath}
                render={() =>
                  SelectComponent(
                    filtersInfo.filters,
                    index,
                    filtersInfo.getDataPath
                  )
                }
              />
            })
          }
        </Switch>
      </div>
      {
        isOverlay
          ? <span className={styles.overlay}/>
          : null
      }
    </div>
  )
}

export default Filters