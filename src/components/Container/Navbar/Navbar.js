import React, {useState} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.sass'
import Hamburger from '../../../UI/Hamburger/Hamburger'

const Navbar = props => {
  const [hamburger, setHamburger] = useState(false)

  return (
      <div className={styles.navbar}>
        <div className={styles.container} style={hamburger ? {transform: 'unset'} : {}}>
          <ul className={styles.navbar_list}>
            {
              Object.keys(props.partitionList).map((partition, index) => (
                <li key={index} className={styles.nav_item}>
                  <NavLink
                    className={styles.nav_link}
                    to={`/app/${partition}`}
                    activeClassName={styles.active}
                    onClick={() => setHamburger(false)}
                  >{props.partitionList[partition]}</NavLink>
                </li>
              ))
            }
            <Hamburger
              onClick={() => setHamburger(!hamburger)}
              isActive={hamburger}
              className={styles.hamburger}
              linesColor='#fff'
            />
          </ul>
          <div className={styles.auth}>
            <button
              className={styles.sign_in}
              onClick={() => setHamburger(false)}
            >Войти</button>
            <button
              className={styles.sign_up}
              onClick={() => setHamburger(false)}
            >Зарегистрироваться</button>
          </div>
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