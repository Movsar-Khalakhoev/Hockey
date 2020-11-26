import React from 'react'
import styles from './Filters.module.sass'
import Select from 'react-select'
import Input from '../Input/Input'
import {Route, Switch} from 'react-router-dom'

const Filters = props => {
  const {
    isOverlay,
    commandFiltersList,
    playerFiltersList,
    onChangeFiltersList,
    activeFilters,
    addedFilter,
    onChangeFilterInput
  } = props

  function SelectComponent(options, mode) {
    return (
      <>
        <Select
          key={mode}
          options={options}
          isMulti
          isClearable={false}
          onChange={onChangeFiltersList}
          placeholder='Выберите фильтр'
        />
        {
          mode !== ''
            ? <div className={styles.list}>
                {
                  activeFilters.map(filter => {
                    return <Input
                      key={filter.value}
                      isFocus={filter.value === addedFilter}
                      filterLabel={filter.label}
                      filterValue={filter.value}
                      onChange={onChangeFilterInput}
                    />
                  })
                }
              </div>
            : null
        }
      </>
    )
  }

  return (
    <div className={styles.filters}>
      <div className={styles.content}>
        <Switch>
          <Route path='/app/spareBench/commands' render={() => SelectComponent(commandFiltersList, 'commands')} />
          <Route path='/app/spareBench/players' render={() => SelectComponent(playerFiltersList, 'players')} />
          <Route exact path='/app/spareBench' render={() => SelectComponent([], '')} />
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