import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.sass'

const Navbar = props => {
  return (
      <div className={styles.navbar}>
        <ul className={styles.navbar_list}>
          {
            Object.keys(props.partitionList).map((partition, index) => (
              <li key={index} className={styles.nav_item}>
                <NavLink
                  className={styles.nav_link}
                  to={`/app/${partition}`}
                  activeClassName={styles.active}
                >{props.partitionList[partition]}</NavLink>
              </li>
            ))
          }
        </ul>
        <div className={styles.auth}>
          <button className={styles.sign_in}>Войти</button>
          <button className={styles.sign_up}>Зарегистрироваться</button>
        </div>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    partitionList: state.navbar
  }
}

export default connect(mapStateToProps)(Navbar)