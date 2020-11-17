import React from 'react'
import styles from './Arenas.module.sass'
import {connect} from 'react-redux'
import Arena from './Arena/Arena'

const Arenas = props => {
  console.log(props.arenasList)
  return (
    <div className={styles.arenas_container}>
      <div className={styles.arenas_list}>
        {
          props.arenasList.map((arena, index) => {
            return <Arena key={index} arena={arena} />
          })
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    arenasList: state.arenas.arenasList
  }
}

export default connect(mapStateToProps)(Arenas)