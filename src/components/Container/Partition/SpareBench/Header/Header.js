import React from 'react'
import styles from './Header.module.sass'
import {NavLink} from 'react-router-dom'

const Header = () => {
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
      <button className={styles.submit_yours}>Оставить заявку</button>
    </div>
  )
}

export default Header