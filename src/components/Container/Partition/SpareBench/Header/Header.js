import React, {useEffect, useState} from 'react'
import styles from './Header.module.sass'
import {NavLink, useLocation} from 'react-router-dom'
import Select from 'react-select'

const Header = () => {
  const [reset, setReset] = useState(new Date().getTime())
  const location = useLocation()
  const selectOptions = [
    {value: 'players', label: 'Игроки'},
    {value: 'commands', label: 'Команды'}
  ]
  let lastElem = location.pathname.split('/')
  lastElem = lastElem[lastElem.length - 1]

  function customOption(props) {
    const {innerProps} = props
    return <NavLink
          to={`/app/spareBench/${props.value}`}
          className={styles.commands_mode}
          activeClassName={styles.active}
          {...innerProps}
        >
          {props.label}
        </NavLink>
  }

  function setDefaultOption() {
    lastElem = location.pathname.split('/')
    lastElem = lastElem[lastElem.length - 1]
    let defaultOption = null
    selectOptions.forEach(option => {
      if (lastElem === option.value) {
        defaultOption = option
      }
    })

    return defaultOption
  }

  useEffect(() => {
    setReset(new Date().getTime())
  }, [location.pathname])

  return (
    <div className={styles.header}>
      <div className={styles.search_mode}>
        <NavLink
          to='/app/spareBench/commands'
          className={styles.commands_mode}
          activeClassName={styles.active}
        >
          Показать команды
        </NavLink>
        <NavLink
          to='/app/spareBench/players'
          className={styles.players_mode}
          activeClassName={styles.active}
        >
          Показать игроков
        </NavLink>
      </div>
      <Select
        key={reset}
        options={selectOptions}
        defaultValue={setDefaultOption()}
        components={{
          Option: customOption
        }}
        placeholder='Выберите категорию'
        className={styles.select}
        styles={{
          placeholder: (provided, state) => ({
            ...provided,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          })
        }}
      />
      <button className={styles.submit_yours}>Оставить заявку</button>
    </div>
  )
}

export default Header