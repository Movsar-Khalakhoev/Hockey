import React from 'react'
import styles from './Arena.module.sass'
import {connect} from 'react-redux'
import Main from './Main/Main'
import ArenaMap from './ArenaMap/ArenaMap'
import Rental from './Rental/Rental'
import Commands from './Commands/Commands'
import Footer from '../../../../UI/Footer/Footer'

export const ArenaId = React.createContext(null)

const Arena = ({childrenCommands, mensCommands, match}) => {
  return (
    <ArenaId.Provider value={match.params.id}>
      <div className={styles.arena_container}>
        <Main />

        <ArenaMap />

        <Rental />

        <Commands commands={childrenCommands}/>

        <Commands commands={mensCommands} />
      </div>
      <Footer />
    </ArenaId.Provider>
  )
}

function mapStateToProps(state) {
  return {
    childrenCommands: state.arena.childrenCommands,
    mensCommands: state.arena.mensCommands
  }
}

export default connect(mapStateToProps)(Arena)
