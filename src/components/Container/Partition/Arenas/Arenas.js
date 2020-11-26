import React from 'react'
import styles from './Arenas.module.sass'
import {connect} from 'react-redux'
import ArenaCard from './ArenaCard/ArenaCard'

const Arenas = props => {
  return (
    <div
      className={styles.arenas_container}
    >
      <div className={styles.arenas_list}>
        {
          props.arenasList.map((arena, index) => {
            return <ArenaCard key={index} arena={arena} />
          })
        }
      </div>
      <span className={styles.arenas_list_overlay}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    arenasList: state.arenas.arenasList
  }
}

export default connect(mapStateToProps)(Arenas)